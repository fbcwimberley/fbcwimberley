import { env } from '$env/dynamic/private';

const PLANNING_CENTER_BASE_URL = 'https://api.planningcenteronline.com';
const EVENT_ID = '3413391';
const REGISTER_URL = `https://fbcwimberley.churchcenter.com/registrations/events/${EVENT_ID}/reservations/new`;
const EVENT_URL = `https://fbcwimberley.churchcenter.com/registrations/events/${EVENT_ID}`;
const ORGANIZATION_TIME_ZONE = 'America/Chicago';

// Limit the number of concurrent upstream API requests when loading events.
const EVENTS_CONCURRENCY_LIMIT = 5;

async function mapWithConcurrency<T, R>(
	items: T[],
	concurrency: number,
	mapper: (item: T, index: number) => Promise<R>
): Promise<R[]> {
	if (concurrency <= 0) {
		throw new Error('concurrency must be greater than 0');
	}

	const results: R[] = new Array(items.length);
	let currentIndex = 0;

	async function worker() {
		for (;;) {
			const index = currentIndex++;
			if (index >= items.length) {
				break;
			}
			results[index] = await mapper(items[index], index);
		}
	}

	const workersCount = Math.min(concurrency, items.length);
	const workers = Array.from({ length: workersCount }, () => worker());
	await Promise.all(workers);

	return results;
}

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
	archived?: boolean;
};

type CategoryAttributes = {
	name?: string;
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
	category: string;
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
	categories: string[];
	featuredEventId: string | null;
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

function stripDescriptionToPlainText(value?: string) {
	if (!value) {
		return '';
	}

	return stripHtml(value)
		.replace(/&nbsp;/gi, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function parseDeadlineFromDescription(descriptionText: string) {
	const lowered = descriptionText.toLowerCase();

	if (!lowered.includes('deadline')) {
		return null;
	}

	const monthDateYearMatch = descriptionText.match(
		/\b(january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{1,2}(?:st|nd|rd|th)?(?:,)?\s+\d{4}\b/i
	);

	if (!monthDateYearMatch) {
		return null;
	}

	const normalized = monthDateYearMatch[0].replace(/(\d)(st|nd|rd|th)\b/gi, '$1');
	const parsed = new Date(normalized);

	return Number.isNaN(parsed.getTime()) ? null : parsed.getTime();
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

function isSignupCurrentlyOpen(signup: PlanningCenterResource<SignupAttributes>) {
	const { archived, open_at: openAt, close_at: closeAt, description } = signup.attributes;

	if (archived === true) {
		return false;
	}

	const now = Date.now();
	const openTs = openAt ? new Date(openAt).getTime() : Number.NEGATIVE_INFINITY;
	const closeTs = closeAt ? new Date(closeAt).getTime() : Number.POSITIVE_INFINITY;
	const descriptionDeadlineTs = parseDeadlineFromDescription(stripDescriptionToPlainText(description));

	if (descriptionDeadlineTs !== null && descriptionDeadlineTs < now) {
		return false;
	}

	return openTs <= now && now <= closeTs;
}

const CATEGORY_OVERRIDES: Record<string, string> = {
	'3081226': 'Kids Ministry',
	'3204911': 'Student Ministry',
	'3206612': 'Kids Ministry',
	'3340252': 'Student Ministry',
	'3369755': 'Senior Adults',
	'3391833': 'Church Family',
	'3413058': 'Senior Adults',
	'3413391': 'Church Family',
	'3441306': 'Church Family',
	'3449516': 'Church Family',
	'3455058': 'Church Family',
	'3455252': 'Church Family',
	'3458551': 'Kids Ministry',
	'3458935': 'Kids Ministry',
	'3466682': 'Church Family',
	'3468492': 'Church Family',
	'3468497': 'Church Family'
};

function determineCategory(signupId: string, title: string, descriptionText: string) {
	const override = CATEGORY_OVERRIDES[signupId];

	if (override) {
		return override;
	}

	const haystack = `${title} ${descriptionText}`.toLowerCase();

	if (/(women|ladies|sisterhood)/.test(haystack)) {
		return "Women's Ministry";
	}

	if (/(men|mens|men's)/.test(haystack)) {
		return "Men's Ministry";
	}

	if (/(awana|vbs|kids camp|kid|ministry to kids|preteen|children)/.test(haystack)) {
		return 'Kids Ministry';
	}

	if (/(student|youth|high school|junior high|6th|7th|8th|glorieta|camp)/.test(haystack)) {
		return 'Student Ministry';
	}

	if (/(senior adult|railroad|highland lakes)/.test(haystack)) {
		return 'Senior Adults';
	}

	if (/(life group|small group)/.test(haystack)) {
		return 'Life Groups';
	}

	if (/(care|support|grief|recovery|counsel)/.test(haystack)) {
		return 'Care and Support';
	}

	if (/(summer)/.test(haystack)) {
		return 'Summer';
	}

	return 'Church Family';
}

function buildFallbackEventsListModel(): EventsListPageModel {
	return {
		events: [
			{
				id: EVENT_ID,
				title: 'Family Life Weekend',
				category: 'Church Family',
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
		categories: ['Church Family'],
		featuredEventId: EVENT_ID,
		loadError: true
	};
}

export async function getUpcomingEvents(limit = Number.POSITIVE_INFINITY): Promise<EventsListPageModel> {
	try {
		const signups = await fetchCollection<SignupAttributes>('/registrations/v2/signups');
		const openSignups = signups.filter(isSignupCurrentlyOpen);
		const events = await mapWithConcurrency(openSignups, EVENTS_CONCURRENCY_LIMIT, async (signup) => {
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
			const title = signup.attributes.name?.trim() || 'Event';

			return {
				id: signupId,
				title,
				category: determineCategory(signupId, title, descriptionText),
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
		});

		const sorted = events
			.filter((event) => event.title.trim().length > 0)
			.sort((a, b) => {
				const aTs = a.startAt ? new Date(a.startAt).getTime() : Number.POSITIVE_INFINITY;
				const bTs = b.startAt ? new Date(b.startAt).getTime() : Number.POSITIVE_INFINITY;

				if (aTs !== bTs) {
					return aTs - bTs;
				}

				return a.title.localeCompare(b.title);
			});
		const featuredEvent = sorted.find((event) => event.id === EVENT_ID) ?? sorted[0] ?? null;
		const ordered = featuredEvent
			? [featuredEvent, ...sorted.filter((event) => event.id !== featuredEvent.id)]
			: sorted;
		const visibleEvents = Number.isFinite(limit) ? ordered.slice(0, limit) : ordered;
		const availableCategories = visibleEvents
			.map((event) => event.category?.trim() ?? '')
			.filter((category, index, all): category is string => category.length > 0 && all.indexOf(category) === index)
			.sort((a, b) => a.localeCompare(b));

		return {
			events: visibleEvents,
			categories: availableCategories,
			featuredEventId: featuredEvent?.id ?? null,
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
