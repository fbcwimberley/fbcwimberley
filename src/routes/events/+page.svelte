<script lang="ts">
	import Alert from '$lib/ui/Alert.svelte';
	import Button from '$lib/ui/Button.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const model = $derived(data.events);
	const featured = $derived(
		model.featuredEventId
			? model.events.find((event) => event.id === model.featuredEventId) ?? null
			: null
	);
	const listedEvents = $derived(
		featured ? model.events.filter((event) => event.id !== featured.id) : model.events
	);

	function excerpt(text: string, max = 190) {
		if (text.length <= max) {
			return text;
		}

		return `${text.slice(0, max).trimEnd()}...`;
	}

	function sanitizeUrlForCss(url: string | null | undefined): string {
		if (!url) {
			return '';
		}

		try {
			const normalizedUrl = new URL(url, 'http://localhost').toString();
			return normalizedUrl.replace(/["\\)]/g, (match) => {
				if (match === '"') return '\\"';
				if (match === '\\') return '\\\\';
				return '\\)';
			});
		} catch {
			return '';
		}
	}

	function getFeaturedHeroStyle(heroImageUrl: string | null | undefined): string | undefined {
		const safeUrl = sanitizeUrlForCss(heroImageUrl);

		return safeUrl
			? `background-image: linear-gradient(180deg, rgba(7, 10, 19, 0.28) 0%, rgba(7, 10, 19, 0.62) 100%), url("${safeUrl}")`
			: undefined;
	}

	function getEventCardImageStyle(heroImageUrl: string | null | undefined): string | undefined {
		const safeUrl = sanitizeUrlForCss(heroImageUrl);

		return safeUrl
			? `background-image: linear-gradient(180deg, rgba(13, 16, 28, 0.08) 0%, rgba(13, 16, 28, 0.32) 100%), url("${safeUrl}")`
			: undefined;
	}
</script>

<svelte:head>
	<title>Events - First Baptist Church Wimberley</title>
	<meta
		name="description"
		content="See upcoming events and registrations at First Baptist Church Wimberley."
	/>
</svelte:head>

<section class="relative min-h-[54vh] flex items-end justify-center overflow-hidden">
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,#446f89_0%,#1a1a2e_52%,#120f18_100%)]"></div>
	<div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_38%),linear-gradient(180deg,rgba(8,10,19,0.12)_0%,rgba(8,10,19,0.7)_100%)]"></div>

	<div class="absolute inset-0 opacity-45">
		<div class="absolute left-[8%] top-[22%] h-40 w-40 rounded-full bg-[rgba(200,145,90,0.15)] blur-3xl"></div>
		<div class="absolute right-[10%] top-[18%] h-56 w-56 rounded-full bg-[rgba(90,159,194,0.16)] blur-3xl"></div>
		<div class="absolute bottom-[8%] left-[32%] h-48 w-48 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl"></div>
	</div>

	<div class="relative z-1 container pb-16 pt-32">
		<div class="max-w-[760px]">
			<p class="section-label">Church Life</p>
			<h1 class="text-[clamp(2.35rem,6vw,4.25rem)] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.28)]">
				Upcoming Events
			</h1>
			<p class="mt-5 max-w-[58ch] text-[1.02rem] leading-[1.85] text-white/84">
				Find registrations, schedules, and event details from Planning Center in one place without sending people straight out to Church Center first.
			</p>
				<div class="mt-8 flex flex-wrap gap-3">
					<Button href="#event-list" variant="accent">
						See Upcoming Events
					</Button>
					<Button href="https://fbcwimberley.churchcenter.com/registrations" variant="outline" target="_blank" rel="noopener noreferrer">
						Open Church Center
					</Button>
				</div>
			</div>
		</div>
</section>

<section id="event-list" class="py-20 bg-(--color-bg)">
	<div class="container">
		{#if model.loadError}
			<div class="mb-8">
				<Alert type="error">
					We could not load the latest event list from Planning Center right now. You can still use the available registration links below.
				</Alert>
			</div>
		{/if}

		{#if featured}
			<div class="grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(300px,0.7fr)]">
				<div class="overflow-hidden rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) shadow-(--shadow-sm)">
					<div class="featured-hero">
						<div
							class="featured-hero-banner"
							style={getFeaturedHeroStyle(featured.heroImageUrl)}
						>
							<div class="featured-hero-overlay"></div>
							<div class="relative z-1 p-7 md:p-10">
								<p class="section-label text-white!">Featured Event</p>
								<h2 class="max-w-[12ch] text-[clamp(1.9rem,4.2vw,3rem)] text-white">
									{featured.title}
								</h2>
							</div>
						</div>
						<div class="relative z-1 p-7 md:p-10">
							<p class="max-w-[58ch] text-white/82 leading-[1.85]">
								{excerpt(featured.descriptionText, 280)}
							</p>
							<div class="mt-7 flex flex-wrap gap-3">
								<Button href={featured.registerUrl} variant="accent" target="_blank" rel="noopener noreferrer">
									Register
								</Button>
								<Button href={featured.eventUrl} variant="outline" target="_blank" rel="noopener noreferrer">
									View Details
								</Button>
							</div>
						</div>
					</div>
				</div>

				<div class="featured-side">
					<div class="featured-detail-card rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-7 shadow-(--shadow-sm)">
						<div>
							<p class="section-label">Quick Look</p>
							<div class="space-y-5">
								{#if featured.startText}
									<div>
										<p class="eyebrow">When</p>
										<p class="detail-text">{featured.startText}</p>
									</div>
								{/if}

								{#if featured.locationName || featured.locationDetail}
									<div>
										<p class="eyebrow">Where</p>
										<p class="detail-text">{featured.locationName ?? 'Location'}</p>
										{#if featured.locationDetail}
											<p class="detail-supporting">{featured.locationDetail}</p>
										{/if}
									</div>
								{/if}

								{#if featured.registrationWindow}
									<div>
										<p class="eyebrow">Registration</p>
										<p class="detail-text">{featured.registrationWindow}</p>
									</div>
								{/if}
							</div>
						</div>

						<div class="quick-look-actions">
							{#if featured.locationUrl && featured.locationType === 'online'}
								<a href={featured.locationUrl} target="_blank" rel="noopener noreferrer" class="inline-flex mb-4 font-semibold">
									Attend online details
								</a>
							{/if}
							<Button href={featured.eventUrl} variant="outline-dark" target="_blank" rel="noopener noreferrer" class="w-full justify-center">
								View Full Details
							</Button>
						</div>
					</div>
				</div>
			</div>
		{/if}

		{#if model.events.length > 0}
			<div class={featured ? 'mt-10' : ''}>
				<div class="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
					<div>
						<p class="section-label">{featured ? 'More Events' : 'Upcoming Events'}</p>
						<h2 class="text-[clamp(1.65rem,4vw,2.35rem)]">{featured ? 'Everything coming up' : 'All published registrations'}</h2>
					</div>
				</div>

				{#if listedEvents.length > 0}
					<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
						{#each listedEvents as event}
							<article class="event-card rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-6 shadow-(--shadow-sm)">
								<div class="flex min-h-full flex-col">
									{#if event.heroImageUrl}
										<div
											class="event-card-image"
											style={getEventCardImageStyle(event.heroImageUrl)}
											aria-hidden="true"
										></div>
									{/if}
									<div>
										{#if event.startText}
											<p class="text-[0.76rem] font-semibold uppercase tracking-[0.14em] text-(--color-accent)">
												{event.startText}
											</p>
										{/if}
										<h3 class="mt-3 text-[1.45rem]">{event.title}</h3>
										{#if event.locationName}
											<p class="mt-2 text-[0.94rem] text-(--color-text-muted)">
												{event.locationName}
											</p>
										{/if}
										<p class="mt-4 text-[0.97rem] leading-[1.8] text-(--color-text-muted)">
											{excerpt(event.descriptionText)}
										</p>
									</div>

									<div class="mt-auto pt-6">
										<div class="border-t border-(--color-border-light) pt-5">
										<div class="flex flex-wrap gap-3">
											<a
												href={event.registerUrl}
												target="_blank"
												rel="noopener noreferrer"
												class="btn btn-accent hover:btn-accent-hover flex-1 justify-center"
											>
												Register
											</a>
											<a
												href={event.eventUrl}
												target="_blank"
												rel="noopener noreferrer"
												class="btn btn-outline-dark hover:btn-outline-dark-hover flex-1 justify-center"
											>
												Details
											</a>
										</div>
										</div>
									</div>
								</div>
							</article>
						{/each}
					</div>
				{:else}
					<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-8 shadow-(--shadow-sm)">
						<p class="max-w-[42rem] text-(--color-text-muted) leading-[1.8]">
							{featured ? 'No additional events' : 'No events'} currently.
						</p>
					</div>
				{/if}
			</div>
		{:else}
			<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-10 text-center shadow-(--shadow-sm)">
				<p class="section-label">No Events Found</p>
				<h2 class="text-[clamp(1.65rem,4vw,2.35rem)]">Nothing is published right now</h2>
				<p class="mt-4 max-w-[42rem] mx-auto text-(--color-text-muted) leading-[1.8]">
					Check back soon or open Church Center directly to verify the latest registrations.
				</p>
				<div class="mt-7">
					<Button href="https://fbcwimberley.churchcenter.com/registrations" variant="outline-dark" target="_blank" rel="noopener noreferrer">
						Open Church Center
					</Button>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.featured-hero {
		min-height: 100%;
		background:
			radial-gradient(circle at top left, rgba(200, 145, 90, 0.24) 0%, rgba(200, 145, 90, 0) 34%),
			linear-gradient(145deg, #1c3344 0%, #172433 48%, #120f18 100%);
	}

	.featured-hero-banner {
		position: relative;
		min-height: clamp(220px, 34vw, 300px);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
	}

	.featured-hero-overlay {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 38%),
			linear-gradient(180deg, rgba(8, 10, 19, 0.16) 0%, rgba(8, 10, 19, 0.72) 100%);
	}

	.featured-side {
		display: flex;
		min-height: 100%;
	}

	.featured-detail-card {
		display: flex;
		width: 100%;
		flex-direction: column;
		justify-content: space-between;
	}

	.quick-look-actions {
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border-light);
	}

	.eyebrow {
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.14em;
		color: var(--color-accent);
	}

	.detail-text {
		margin-top: 0.5rem;
		font-size: 1.03rem;
		line-height: 1.75;
	}

	.detail-supporting {
		margin-top: 0.25rem;
		color: var(--color-text-muted);
		line-height: 1.7;
	}

	.event-card {
		transition:
			transform 300ms var(--ease-spring),
			box-shadow 300ms var(--ease-spring),
			border-color 300ms ease;
	}

	.event-card-image {
		margin-bottom: 1.1rem;
		min-height: 180px;
		border-radius: calc(var(--radius-lg) - 0.35rem);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		border: 1px solid rgba(255, 255, 255, 0.05);
		box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.06);
	}

	.event-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
		border-color: var(--color-border);
	}

	@media (max-width: 767px) {
		.featured-hero-banner {
			min-height: 200px;
		}
	}
</style>
