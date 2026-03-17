<script lang="ts">
	import Alert from '$lib/ui/Alert.svelte';
	import Button from '$lib/ui/Button.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const model = $derived(data.events);
	const featured = $derived(model.events[0] ?? null);
	const remainingEvents = $derived(model.events.slice(1));

	function excerpt(text: string, max = 190) {
		if (text.length <= max) {
			return text;
		}

		return `${text.slice(0, max).trimEnd()}...`;
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
		<div class="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(260px,0.8fr)] lg:items-end">
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

			<div class="rounded-[var(--radius-lg)] border border-white/12 bg-white/8 p-6 text-white shadow-[0_18px_50px_rgba(0,0,0,0.22)] backdrop-blur-sm">
				<p class="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-[rgba(212,163,106,0.95)]">
					Live Feed
				</p>
				<div class="mt-4 space-y-4">
					<div class="rounded-[var(--radius-md)] border border-white/10 bg-black/12 px-4 py-3">
						<p class="text-[0.76rem] uppercase tracking-[0.12em] text-white/62">Source</p>
						<p class="mt-1 text-[1rem] font-medium">Planning Center Registrations</p>
					</div>
					<div class="rounded-[var(--radius-md)] border border-white/10 bg-black/12 px-4 py-3">
						<p class="text-[0.76rem] uppercase tracking-[0.12em] text-white/62">Events Loaded</p>
						<p class="mt-1 text-[1.8rem] font-semibold tabular-nums">{model.events.length}</p>
					</div>
					<div class="rounded-[var(--radius-md)] border border-white/10 bg-black/12 px-4 py-3">
						<p class="text-[0.76rem] uppercase tracking-[0.12em] text-white/62">Status</p>
						<p class="mt-1 text-[1rem] font-medium">{model.loadError ? 'Fallback content' : 'Live data available'}</p>
					</div>
				</div>
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
						<div class="featured-hero-overlay"></div>
						{#if featured.heroImageUrl}
							<img
								src={featured.heroImageUrl}
								alt={featured.title}
								class="featured-hero-image"
								loading="lazy"
							/>
						{/if}
						<div class="relative z-1 p-7 md:p-10">
							<p class="section-label text-white!">Featured Event</p>
							<h2 class="max-w-[12ch] text-[clamp(1.9rem,4.2vw,3rem)] text-white">
								{featured.title}
							</h2>
							<p class="mt-4 max-w-[58ch] text-white/82 leading-[1.85]">
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

				<div class="space-y-6">
					<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-7 shadow-(--shadow-sm)">
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

						{#if featured.locationUrl && featured.locationType === 'online'}
							<a href={featured.locationUrl} target="_blank" rel="noopener noreferrer" class="inline-flex mt-6 font-semibold">
								Attend online details
							</a>
						{/if}
					</div>

					<div class="rounded-[var(--radius-lg)] bg-(--color-footer-bg) p-7 text-white shadow-(--shadow-md)">
						<p class="section-label">Reserve Your Spot</p>
						<h3 class="text-[1.5rem] text-white mb-3">Registration still happens in Church Center</h3>
						<p class="text-white/78 leading-[1.8]">
							This page keeps event discovery on your site, while Church Center still handles signup, payment, and confirmation.
						</p>
						<div class="mt-6">
							<Button href={featured.registerUrl} variant="accent" target="_blank" rel="noopener noreferrer" class="w-full justify-center">
								Register Now
							</Button>
						</div>
					</div>
				</div>
			</div>
		{/if}

		{#if remainingEvents.length > 0}
			<div class="mt-10">
				<div class="mb-6 flex items-end justify-between gap-4">
					<div>
						<p class="section-label">More Events</p>
						<h2 class="text-[clamp(1.65rem,4vw,2.35rem)]">Everything coming up</h2>
					</div>
				</div>

				<div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{#each remainingEvents as event}
						<article class="event-card rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-6 shadow-(--shadow-sm)">
							<div class="flex min-h-full flex-col">
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

								<div class="mt-6 pt-5 border-t border-(--color-border-light)">
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
						</article>
					{/each}
				</div>
			</div>
		{:else if !featured}
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
		position: relative;
		min-height: 100%;
		background:
			radial-gradient(circle at top left, rgba(200, 145, 90, 0.24) 0%, rgba(200, 145, 90, 0) 34%),
			linear-gradient(145deg, #1c3344 0%, #172433 48%, #120f18 100%);
	}

	.featured-hero-overlay {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0) 38%),
			linear-gradient(180deg, rgba(8, 10, 19, 0.16) 0%, rgba(8, 10, 19, 0.72) 100%);
	}

	.featured-hero-image {
		position: absolute;
		right: 1.5rem;
		bottom: 1.5rem;
		width: min(38%, 240px);
		max-height: calc(100% - 3rem);
		object-fit: contain;
		filter: drop-shadow(0 24px 60px rgba(0, 0, 0, 0.3));
		opacity: 0.92;
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

	.event-card:hover {
		transform: translateY(-4px);
		box-shadow: var(--shadow-md);
		border-color: var(--color-border);
	}

	@media (max-width: 767px) {
		.featured-hero-image {
			position: static;
			width: min(100%, 220px);
			margin: 0 auto 1.5rem;
			max-height: 220px;
		}
	}
</style>
