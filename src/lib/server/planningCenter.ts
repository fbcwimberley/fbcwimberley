import { env } from '$env/dynamic/private';

const PLANNING_CENTER_BASE_URL = 'https://api.planningcenteronline.com';
const EVENT_ID = '3413391';
const REGISTER_URL = `https://fbcwimberley.churchcenter.com/registrations/events/${EVENT_ID}/reservations/new`;
const EVENT_URL = `https://fbcwimberley.churchcenter.com/registrations/events/${EVENT_ID}`;
const ORGANIZATION_TIME_ZONE = 'America/Chicago';

type PlanningCenterResource<TAttributes = Record<string, unknown>> = {
	id: string;
	type: string;
	attributes: TAttributes;
	relationships?: Record<string, { data: { id: string; type: string } | null }>;
};

type PlanningCenterCollectionResponse<TAttributes = Record<string, unknown>> = {
	data: Array<PlanningCenterResource<TAttributes>>;
	links?: {
		next?: string | null;
	};
};

type PlanningCenterDocumentResponse<TAttributes = Record<string, unknown>> = {
	data: PlanningCenterResource<TAttributes>;
};

type SignupAttributes = {
	name?: string;
	description?: string;
	logo_url?: string;
	new_registration_url?: string;
	open_at?: string;
	close_at?: string;
};

type SignupTimeAttributes = {
	starts_at?: string;
	ends_at?: string;
	all_day?: boolean;
};

type SignupLocationAttributes = {
	name?: string;
	location_type?: string;
	formatted_address?: string;
	full_formatted_address?: string;
	url?: string;
};

type SelectionTypeAttributes = {
	name?: string;
	price_cents?: number;
	price_currency?: string;
	price_currency_symbol?: string;
	price_formatted?: string;
	publicly_available?: boolean;
};

export type EventPageModel = {
	title: string;
	descriptionHtml: string;
	descriptionText: string;
	heroImageUrl: string | null;
	registerUrl: string;
	eventUrl: string;
	locationName: string | null;
	locationDetail: string | null;
	locationUrl: string | null;
	locationType: string | null;
	times: string[];
	pricing: string[];
	registrationWindow: string | null;
	loadError: boolean;
};

export type EventsListItem = {
	id: string;
	title: string;
	descriptionText: string;
	heroImageUrl: string | null;
	registerUrl: string;
	eventUrl: string;
	locationName: string | null;
	locationDetail: string | null;
	locationUrl: string | null;
	locationType: string | null;
	startAt: string | null;
	startText: string | null;
	registrationWindow: string | null;
};

export type EventsListPageModel = {
	events: EventsListItem[];
	loadError: boolean;
};

function getBasicAuthHeader() {
	const clientId = env.PLANNINGCENTER_CLIENT_ID;
	const pat = env.PLANNINGCENTER_PAT;

	if (!clientId || !pat) {
		throw new Error('Planning Center credentials are missing.');
	}

	const token = btoa(`${clientId}:${pat}`);
	return `Basic ${token}`;
}

async function fetchJson<T>(pathOrUrl: string) {
	const url = pathOrUrl.startsWith('http') ? pathOrUrl : `${PLANNING_CENTER_BASE_URL}${pathOrUrl}`;
	const response = await fetch(url, {
		headers: {
			Authorization: getBasicAuthHeader(),
			Accept: 'application/json'
		}
	});

	if (!response.ok) {
		throw new Error(`Planning Center request failed: ${response.status} ${response.statusText}`);
	}

	return (await response.json()) as T;
}

async function fetchCollection<TAttributes>(path: string) {
	const items: Array<PlanningCenterResource<TAttributes>> = [];
	let nextUrl: string | null | undefined = `${path}${path.includes('?') ? '&' : '?'}per_page=100`;

	while (nextUrl) {
		const responsePage: PlanningCenterCollectionResponse<TAttributes> = await fetchJson(nextUrl);
		items.push(...responsePage.data);
		nextUrl = responsePage.links?.next;
	}

	return items;
}

function stripHtml(value: string) {
	return value
		.replace(/<br\s*\/?>/gi, '\n')
		.replace(/<\/p>/gi, '\n\n')
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+\n/g, '\n')
		.replace(/\n{3,}/g, '\n\n')
		.replace(/[ \t]{2,}/g, ' ')
		.trim();
}

function formatDateRange(startIso: string, endIso?: string, allDay?: boolean) {
	const start = new Date(startIso);
	const end = endIso ? new Date(endIso) : null;

	if (Number.isNaN(start.getTime())) {
		return null;
	}

	const dateFormatter = new Intl.DateTimeFormat('en-US', {
		timeZone: ORGANIZATION_TIME_ZONE,
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
	const timeFormatter = new Intl.DateTimeFormat('en-US', {
		timeZone: ORGANIZATION_TIME_ZONE,
		hour: 'numeric',
		minute: '2-digit'
	});

	const startDate = dateFormatter.format(start);
	const startTime = timeFormatter.format(start);

	if (!end || Number.isNaN(end.getTime())) {
		return allDay ? `${startDate} • All day` : `${startDate} • ${startTime}`;
	}

	const sameDay =
		start.toLocaleDateString('en-US', { timeZone: ORGANIZATION_TIME_ZONE }) ===
		end.toLocaleDateString('en-US', { timeZone: ORGANIZATION_TIME_ZONE });

	if (allDay) {
		return sameDay ? `${startDate} • All day` : `${startDate} - ${dateFormatter.format(end)} • All day`;
	}

	if (sameDay) {
		return `${startDate} • ${startTime} - ${timeFormatter.format(end)}`;
	}

	return `${startDate} • ${startTime} to ${dateFormatter.format(end)} • ${timeFormatter.format(end)}`;
}

function formatRegistrationWindow(openAt?: string, closeAt?: string) {
	if (!openAt && !closeAt) {
		return null;
	}

	const formatter = new Intl.DateTimeFormat('en-US', {
		timeZone: ORGANIZATION_TIME_ZONE,
		month: 'short',
		day: 'numeric',
		year: 'numeric',
		hour: 'numeric',
		minute: '2-digit'
	});

	const openText = openAt ? formatter.format(new Date(openAt)) : null;
	const closeText = closeAt ? formatter.format(new Date(closeAt)) : null;

	if (openText && closeText) {
		return `Registration opens ${openText} and closes ${closeText}.`;
	}

	if (openText) {
		return `Registration opens ${openText}.`;
	}

	return closeText ? `Registration closes ${closeText}.` : null;
}

function formatPrice(selection: PlanningCenterResource<SelectionTypeAttributes>) {
	const { name, price_cents: priceCents, price_currency_symbol: symbol, price_formatted: formatted } =
		selection.attributes;

	if (!name) {
		return null;
	}

	if (priceCents === 0) {
		return `${name} • Free`;
	}

	if (formatted && symbol) {
		return `${name} • ${symbol}${formatted}`;
	}

	if (typeof priceCents === 'number') {
		return `${name} • $${(priceCents / 100).toFixed(2)}`;
	}

	return name;
}

function getEventUrlFromRegistrationUrl(registrationUrl: string) {
	return registrationUrl.replace(/\/reservations\/new\/?$/, '');
}

function toChurchCenterEventUrl(signupId: string, registrationUrl?: string) {
	if (registrationUrl) {
		return getEventUrlFromRegistrationUrl(registrationUrl);
	}

	return `https://fbcwimberley.churchcenter.com/registrations/events/${signupId}`;
}

function toChurchCenterRegistrationUrl(signupId: string, registrationUrl?: string) {
	if (registrationUrl) {
		return registrationUrl;
	}

	return `${toChurchCenterEventUrl(signupId)}/reservations/new`;
}

function buildFallbackModel(): EventPageModel {
	return {
		title: 'Family Life Weekend',
		descriptionHtml:
			'<p>Join us for Family Life Weekend at First Baptist Church Wimberley. Register through Church Center to reserve your spot and view the latest schedule details.</p>',
		descriptionText:
			'Join us for Family Life Weekend at First Baptist Church Wimberley. Register through Church Center to reserve your spot and view the latest schedule details.',
		heroImageUrl: null,
		registerUrl: REGISTER_URL,
		eventUrl: EVENT_URL,
		locationName: null,
		locationDetail: null,
		locationUrl: null,
		locationType: null,
		times: [],
		pricing: [],
		registrationWindow: null,
		loadError: true
	};
}

async function findSignupForEvent() {
	const signups = await fetchCollection<SignupAttributes>('/registrations/v2/signups');

	return signups.find((signup) => {
		const url = signup.attributes.new_registration_url ?? '';
		return url.includes(`/${EVENT_ID}/`) || url.endsWith(`/${EVENT_ID}`) || url.includes(EVENT_ID);
	});
}

function choosePrimaryTime(times: Array<PlanningCenterResource<SignupTimeAttributes>>) {
	if (times.length === 0) {
		return null;
	}

	const parsed = times
		.filter((time) => Boolean(time.attributes.starts_at))
		.map((time) => {
			const startsAt = time.attributes.starts_at as string;
			return {
				startsAt,
				ts: new Date(startsAt).getTime(),
				endsAt: time.attributes.ends_at,
				allDay: time.attributes.all_day
			};
		})
		.filter((time) => Number.isFinite(time.ts))
		.sort((a, b) => a.ts - b.ts);

	if (parsed.length === 0) {
		return null;
	}

	const now = Date.now();
	const next = parsed.find((time) => time.ts >= now) ?? parsed[0];

	return {
		startAt: next.startsAt,
		startText: formatDateRange(next.startsAt, next.endsAt, next.allDay)
	};
}

function buildFallbackEventsListModel(): EventsListPageModel {
	return {
		events: [
			{
				id: EVENT_ID,
				title: 'Family Life Weekend',
				descriptionText:
					'Join us for Family Life Weekend at First Baptist Church Wimberley. Register through Church Center to reserve your spot and view the latest schedule details.',
				heroImageUrl: null,
				registerUrl: REGISTER_URL,
				eventUrl: EVENT_URL,
				locationName: null,
				locationDetail: null,
				locationUrl: null,
				locationType: null,
				startAt: null,
				startText: null,
				registrationWindow: null
			}
		],
		loadError: true
	};
}

export async function getUpcomingEvents(limit = 12): Promise<EventsListPageModel> {
	try {
		const signups = await fetchCollection<SignupAttributes>('/registrations/v2/signups');
		const events = await Promise.all(
			signups.map(async (signup) => {
				const signupId = signup.id;
				const registrationUrl = signup.attributes.new_registration_url ?? undefined;

				const [times, locationResponse] = await Promise.all([
					fetchCollection<SignupTimeAttributes>(`/registrations/v2/signups/${signupId}/signup_times`).catch(() => []),
					fetchJson<PlanningCenterDocumentResponse<SignupLocationAttributes>>(
						`/registrations/v2/signups/${signupId}/signup_location`
					).catch(() => null)
				]);

				const primaryTime = choosePrimaryTime(times);
				const descriptionHtml = signup.attributes.description?.trim() ?? '';
				const descriptionText = descriptionHtml ? stripHtml(descriptionHtml) : signup.attributes.name?.trim() ?? 'Event';
				const location = locationResponse?.data?.attributes;

				return {
					id: signupId,
					title: signup.attributes.name?.trim() || 'Event',
					descriptionText,
					heroImageUrl: signup.attributes.logo_url ?? null,
					registerUrl: toChurchCenterRegistrationUrl(signupId, registrationUrl),
					eventUrl: toChurchCenterEventUrl(signupId, registrationUrl),
					locationName: location?.name ?? null,
					locationDetail: location?.full_formatted_address ?? location?.formatted_address ?? null,
					locationUrl: location?.url ?? null,
					locationType: location?.location_type ?? null,
					startAt: primaryTime?.startAt ?? null,
					startText: primaryTime?.startText ?? null,
					registrationWindow: formatRegistrationWindow(signup.attributes.open_at, signup.attributes.close_at)
				} satisfies EventsListItem;
			})
		);

		const now = Date.now();
		const sorted = events
			.filter((event) => event.title.trim().length > 0)
			.sort((a, b) => {
				const aTs = a.startAt ? new Date(a.startAt).getTime() : Number.POSITIVE_INFINITY;
				const bTs = b.startAt ? new Date(b.startAt).getTime() : Number.POSITIVE_INFINITY;
				const aUpcoming = aTs >= now;
				const bUpcoming = bTs >= now;

				if (aUpcoming !== bUpcoming) {
					return aUpcoming ? -1 : 1;
				}

				if (aTs !== bTs) {
					return aTs - bTs;
				}

				return a.title.localeCompare(b.title);
			})
			.slice(0, limit);

		return {
			events: sorted,
			loadError: false
		};
	} catch (error) {
		console.error('Failed to load events from Planning Center.', error);
		return buildFallbackEventsListModel();
	}
}

export async function getFamilyLifeWeekendEvent() {
	try {
		const signup = await findSignupForEvent();

		if (!signup) {
			throw new Error(`Unable to find Planning Center signup for event ${EVENT_ID}.`);
		}

		const [times, selectionTypes, locationResponse] = await Promise.all([
			fetchCollection<SignupTimeAttributes>(`/registrations/v2/signups/${signup.id}/signup_times`),
			fetchCollection<SelectionTypeAttributes>(`/registrations/v2/signups/${signup.id}/selection_types?fields=price_currency_symbol,price_formatted`),
			fetchJson<PlanningCenterDocumentResponse<SignupLocationAttributes>>(
				`/registrations/v2/signups/${signup.id}/signup_location`
			).catch(() => null)
		]);

		const descriptionHtml = signup.attributes.description?.trim() ?? '';
		const descriptionText = descriptionHtml ? stripHtml(descriptionHtml) : signup.attributes.name ?? 'Family Life Weekend';
		const pricing = selectionTypes
			.filter((selection) => selection.attributes.publicly_available !== false)
			.map(formatPrice)
			.filter((value): value is string => Boolean(value));
		const normalizedTimes = times
			.map((time) =>
				time.attributes.starts_at
					? formatDateRange(time.attributes.starts_at, time.attributes.ends_at, time.attributes.all_day)
					: null
			)
			.filter((value): value is string => Boolean(value));

		const location = locationResponse?.data?.attributes;

		return {
			title: signup.attributes.name?.trim() || 'Family Life Weekend',
			descriptionHtml,
			descriptionText,
			heroImageUrl: signup.attributes.logo_url ?? null,
			registerUrl: REGISTER_URL,
			eventUrl: EVENT_URL,
			locationName: location?.name ?? null,
			locationDetail: location?.full_formatted_address ?? location?.formatted_address ?? null,
			locationUrl: location?.url ?? null,
			locationType: location?.location_type ?? null,
			times: normalizedTimes,
			pricing,
			registrationWindow: formatRegistrationWindow(signup.attributes.open_at, signup.attributes.close_at),
			loadError: false
		} satisfies EventPageModel;
	} catch (error) {
		console.error('Failed to load Family Life Weekend event data from Planning Center.', error);
		return buildFallbackModel();
	}
}
