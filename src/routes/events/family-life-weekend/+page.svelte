<script lang="ts">
	import Alert from '$lib/ui/Alert.svelte';
	import Button from '$lib/ui/Button.svelte';
	import type { PageData } from './$types';

	type DetailItem = {
		label: string;
		value: string;
		supporting: string | null;
	};

	let { data }: { data: PageData } = $props();

	const event = $derived(data.event);

	const details = $derived(
		[
		event.times.length > 0
			? {
					label: 'When',
					value: event.times[0],
					supporting: event.times.length > 1 ? `${event.times.length - 1} more scheduled time${event.times.length > 2 ? 's' : ''}` : null
				}
			: null,
		event.locationName || event.locationDetail
			? {
					label: 'Where',
					value: event.locationName ?? 'Location',
					supporting: event.locationDetail
				}
			: null,
		event.registrationWindow
			? {
					label: 'Registration',
					value: event.registrationWindow,
					supporting: null
				}
			: null
		].filter((detail): detail is DetailItem => Boolean(detail))
	);
</script>

<svelte:head>
	<title>{event.title} - First Baptist Church Wimberley</title>
	<meta name="description" content={event.descriptionText} />
</svelte:head>

<section class="relative min-h-[55vh] flex items-end justify-center overflow-hidden">
	<div class="absolute inset-0 bg-[radial-gradient(circle_at_top,#446f89_0%,#1a1a2e_52%,#120f18_100%)]"></div>
	<div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_38%),linear-gradient(180deg,rgba(8,10,19,0.12)_0%,rgba(8,10,19,0.7)_100%)]"></div>

	<div class="relative z-1 container pb-16 pt-32">
		<div class="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)]">
			<div class="max-w-[760px]">
				<p class="section-label">Featured Event</p>
				<h1 class="text-[clamp(2.35rem,6vw,4.35rem)] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.28)]">
					{event.title}
				</h1>
				<!-- <p class="mt-5 max-w-[58ch] text-[1.05rem] leading-[1.85] text-white/82"> -->
				<!-- 	{event.descriptionText} -->
				<!-- </p> -->
				<div class="mt-8 flex flex-wrap gap-3">
					<Button href={event.registerUrl} variant="accent" target="_blank" rel="noopener noreferrer">
						Register
					</Button>
					<Button href={event.eventUrl} variant="outline" target="_blank" rel="noopener noreferrer">
						View on Church Center
					</Button>
				</div>
			</div>

			{#if event.heroImageUrl}
				<div class="hero-image-wrap justify-self-start lg:justify-self-end">
					<img src={event.heroImageUrl} alt={event.title} class="hero-image" />
				</div>
			{/if}
		</div>
	</div>
 </section>

<section class="py-20 bg-(--color-bg)">
	<div class="container">
		{#if event.loadError}
			<div class="mb-8">
				<Alert type="error">
					We could not load the latest event details from Planning Center right now. You can still register below.
				</Alert>
			</div>
		{/if}

		<div class="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(300px,0.95fr)]">
			<div class="order-2 lg:order-1 rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-7 md:p-10 shadow-(--shadow-sm)">
				<p class="section-label">Event Details</p>
				<h2 class="text-[clamp(1.75rem,4vw,2.45rem)] mb-5">What to expect</h2>

				{#if event.descriptionHtml}
					<div class="prose-block">
						{@html event.descriptionHtml}
					</div>
				{:else}
					<p class="text-(--color-text-muted) text-[1.02rem] leading-[1.85]">
						Visit Church Center to see the latest event description and register.
					</p>
				{/if}

				{#if event.times.length > 1}
					<div class="mt-10">
						<h3 class="text-[1.2rem] mb-4">Schedule</h3>
						<ul class="space-y-3">
							{#each event.times as time}
								<li class="rounded-[var(--radius-md)] bg-(--color-bg-alt) px-4 py-3 text-(--color-text-muted)">
									{time}
								</li>
							{/each}
						</ul>
					</div>
				{/if}
			</div>

			<div class="order-1 lg:order-2 space-y-6">
				<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-7 shadow-(--shadow-sm)">
					<p class="section-label">Quick Look</p>
					<div class="space-y-5">
						{#each details as detail}
							<div>
								<p class="text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-(--color-accent)">
									{detail.label}
								</p>
								<p class="mt-2 text-[1.03rem] leading-[1.75]">{detail.value}</p>
								{#if detail.supporting}
									<p class="mt-1 text-(--color-text-muted) leading-[1.7]">{detail.supporting}</p>
								{/if}
							</div>
						{/each}
					</div>

					{#if event.locationUrl && event.locationType === 'online'}
						<a
							href={event.locationUrl}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex mt-6 font-semibold"
						>
							Attend online details
						</a>
					{/if}
				</div>

				{#if event.pricing.length > 0}
					<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-7 shadow-(--shadow-sm)">
						<p class="section-label">Selections</p>
						<h3 class="text-[1.2rem] mb-4">Registration options</h3>
						<ul class="space-y-3">
							{#each event.pricing as item}
								<li class="rounded-[var(--radius-md)] bg-(--color-bg-alt) px-4 py-3 text-(--color-text-muted)">
									{item}
								</li>
							{/each}
						</ul>
					</div>
				{/if}

				<div class="rounded-[var(--radius-lg)] bg-(--color-footer-bg) p-7 text-white shadow-(--shadow-md)">
					<p class="section-label">Reserve Your Spot</p>
					<h3 class="text-[1.5rem] text-white mb-3">Registration happens in Church Center</h3>
					<p class="text-white/78 leading-[1.8]">
						Use the register button to complete your reservation through Church Center. That is where signup, payment, and confirmation are handled.
					</p>
					<div class="mt-6">
						<Button href={event.registerUrl} variant="accent" target="_blank" rel="noopener noreferrer" class="w-full justify-center">
							Register
						</Button>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.prose-block {
		color: var(--color-text-muted);
		font-size: 1.02rem;
		line-height: 1.85;
	}

	.prose-block :global(p) {
		margin-bottom: 1rem;
	}

	.prose-block :global(a) {
		font-weight: 600;
	}

	.prose-block :global(ul),
	.prose-block :global(ol) {
		list-style: initial;
		padding-left: 1.25rem;
		margin: 1rem 0;
	}

	.prose-block :global(li) {
		margin-bottom: 0.5rem;
	}
	
	.prose-block :global(strong) {
		color: var(--color-text);
	}

	.hero-image-wrap {
		height: 100%;
		display: flex;
		align-items: stretch;
	}

	.hero-image {
		width: min(100%, 420px);
		height: 100%;
		max-height: none;
		border-radius: 20px;
		align-self: stretch;
		object-fit: contain;
		filter: drop-shadow(0 24px 60px rgba(0, 0, 0, 0.32));
	}
</style>
