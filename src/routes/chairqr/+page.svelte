<script lang="ts">
	import Button from '$lib/ui/Button.svelte';
	import Card from '$lib/ui/Card.svelte';

	type QuickLink = {
		eyebrow: string;
		title: string;
		description: string;
		href: string;
		cta: string;
		external?: boolean;
	};

	type GuestEssential = {
		eyebrow: string;
		title: string;
		detail: string;
	};

	const groupsUrl = 'https://fbcwimberley.churchcenter.com/groups/';
	const givingUrl = 'https://onrealm.org/fbcwimberley/give/now';
	const podcastUrl = 'https://fbcwimberley.buzzsprout.com';
	const directionsUrl = 'https://maps.google.com/?q=15951+Winters+Mill+Parkway+Wimberley+TX+78676';

	const featuredLinks: QuickLink[] = [
		{
			eyebrow: 'New Here?',
			title: 'Plan Your Visit',
			description:
				"If you're visiting, start here. You'll find service times, parking, what to expect, and info for kids before you ever walk in.",
			href: '/about-us',
			cta: 'See what to expect'
		},
		{
			eyebrow: 'Ready To Connect?',
			title: 'Tell Us You Are Here',
			description:
				"Want to follow Jesus, get baptized, ask a question, or just let us know you stopped by? Start here.",
			href: '/connect',
			cta: 'Open connect page'
		},
		{
			eyebrow: 'Prayer And Support',
			title: 'Need Care Or Prayer?',
			description:
				"If life feels heavy right now, you don't have to carry it alone. Reach out for prayer, counseling, or support.",
			href: '/ministries/care',
			cta: 'Talk with someone'
		}
	];

	const exploreLinks: QuickLink[] = [
		{
			eyebrow: 'Grow In Community',
			title: 'Life Groups',
			description: 'Find a group that fits your season of life. Most meet during the week, on campus or in homes.',
			href: groupsUrl,
			cta: 'Browse Groups',
			external: true
		},
		{
			eyebrow: 'On Campus Today?',
			title: 'Events',
			description: 'Concerts, signups, family events, and the rest of what is coming up at FBC all live here.',
			href: '/events',
			cta: 'See Events'
		},
		{
			eyebrow: 'For Every Age',
			title: 'Ministries',
			description: 'Kids, students, women, men, care, missions. Start wherever makes sense for you.',
			href: '/ministries',
			cta: 'View Ministries'
		},
		{
			eyebrow: 'Support The Mission',
			title: 'Give Online',
			description: 'If you call FBC home and want to give online, you can do that here.',
			href: givingUrl,
			cta: 'Give Now',
			external: true
		}
	];

	const guestEssentials: GuestEssential[] = [
		{
			eyebrow: 'Sunday Mornings',
			title: '9:30 AM and 11:00 AM',
			detail: "Join either gathering. If you're new, coming a few minutes early makes the morning easier."
		},
		{
			eyebrow: 'Kids',
			title: 'Secure Check-In',
			detail: 'Kids spaces have secure check-in and trained, background-checked volunteers.'
		},
		{
			eyebrow: 'What To Expect',
			title: 'Worship, Prayer, and Teaching',
			detail: "You'll hear worship, spend time in prayer, and listen to biblical teaching. Nothing complicated."
		},
		{
			eyebrow: 'Come As You Are',
			title: 'Relaxed Dress',
			detail: "You'll see jeans, boots, dresses, and button-downs. Wear what feels like you."
		}
	];
</script>

<svelte:head>
	<title>Chair QR - First Baptist Church Wimberley</title>
	<meta
		name="description"
		content="New to First Baptist Church Wimberley? Find service times, directions, info for kids, events, sermons, care, and a few easy ways to connect."
	/>
</svelte:head>

<section class="hero-viewport relative overflow-hidden bg-(--color-footer-bg)">
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('/images/remote/fbcwimberley.com-102A6400-1-scaled-2a1dd8d246.webp'); background-position: center 28%;"
	></div>
	<div class="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,16,28,0.9)_0%,rgba(18,24,40,0.72)_46%,rgba(44,95,124,0.68)_100%)]"></div>
	<div class="absolute inset-0 opacity-60">
		<div class="absolute left-[8%] top-[16%] h-44 w-44 rounded-full bg-[rgba(200,145,90,0.15)] blur-3xl"></div>
		<div class="absolute right-[12%] top-[14%] h-56 w-56 rounded-full bg-[rgba(255,255,255,0.08)] blur-3xl"></div>
		<div class="absolute bottom-[6%] left-[38%] h-48 w-48 rounded-full bg-[rgba(90,159,194,0.18)] blur-3xl"></div>
	</div>

	<div class="container relative z-1 grid min-h-[100svh] content-end gap-10 pt-[7.5rem] pb-8 md:pb-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:gap-14">
		<div class="max-w-[760px]">
			<p class="section-label text-white/80">First Baptist Church Wimberley</p>
			<h1 class="text-[clamp(2.45rem,6vw,4.9rem)] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.28)]">
				Glad you're here.
			</h1>
			<p class="mt-5 max-w-[62ch] text-[1.04rem] leading-[1.9] text-white/84">
				If it's your first time with us, start here. Service times, directions, kids info, and a few easy next steps are all on this page.
			</p>
			<div class="hero-note mt-5 max-w-[46rem]">
				Here for worship, a concert, or something special? Same page. Same QR code. The details can change without making you hunt for them.
			</div>

			<div class="mt-8 flex flex-wrap gap-3">
				<Button href="#start-here" variant="accent">
					It&apos;s my first time
				</Button>
				<Button href="/about-us" variant="outline">
					Plan Your Visit
				</Button>
				<Button href="/connect" variant="outline">
					Connect With Us
				</Button>
			</div>

			<div class="mt-8 flex flex-wrap gap-2.5">
				<span class="hero-chip">Sundays at 9:30 AM and 11:00 AM</span>
				<span class="hero-chip">15951 Winters Mill Parkway</span>
				<span class="hero-chip">Wimberley, Texas 78676</span>
			</div>
		</div>

		<div class="hero-panel rounded-[var(--radius-lg)] p-6 md:p-7">
			<div class="flex items-start justify-between gap-4">
				<div>
					<p class="section-label text-white/70">First Visit</p>
					<h2 class="text-[1.65rem] text-white">A few things people usually want to know first.</h2>
				</div>
				<span class="panel-badge">First time</span>
			</div>

			<div class="mt-6 space-y-3.5">
				{#each guestEssentials as item}
					<div class="schedule-row">
						<div class="schedule-time">
							<span>{item.eyebrow}</span>
						</div>
						<div>
							<h3 class="schedule-title">{item.title}</h3>
							<p class="schedule-detail">{item.detail}</p>
						</div>
					</div>
				{/each}
			</div>

			<div class="mt-6 flex flex-wrap gap-3">
				<a
					href="/about-us"
					class="mini-action"
				>
					Plan Your Visit
				</a>
				<a
					href={directionsUrl}
					target="_blank"
					rel="noopener noreferrer"
					class="mini-action"
				>
					Get Directions
				</a>
				<a
					href="/connect"
					class="mini-action"
				>
					Connect With Us
				</a>
			</div>
		</div>
	</div>
</section>

<section id="start-here" class="bg-(--color-bg-alt) py-[clamp(4.5rem,8vw,6rem)]">
	<div class="container">
		<div class="max-w-[760px]">
			<p class="section-label">Start Here</p>
			<h2 class="text-[clamp(1.9rem,4vw,3rem)]">If you're visiting, start here.</h2>
			<p class="mt-4 text-[1rem] leading-[1.85] text-(--color-text-muted)">
				Most people want the same few basics first. After that, you can look around, find a group, or see what's coming up.
			</p>
		</div>

		<div class="mt-10 grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
			<Card hover={false} class="featured-card p-7 md:p-9">
				<p class="section-label">First Time Here?</p>
				<h3 class="text-[clamp(1.7rem,3vw,2.4rem)]">Most guests ask the same few questions.</h3>
				<p class="mt-4 max-w-[58ch] text-[1rem] leading-[1.85] text-(--color-text-muted)">
					So we kept the answers close. If you want more detail, the full visitor page is one click away.
				</p>

				<div class="mt-7 grid gap-3 sm:grid-cols-3">
					<div class="detail-card">
						<p class="detail-label">When You Arrive</p>
						<p>There's plenty of paved parking out front, and someone can help if you're not sure where to go.</p>
					</div>
					<div class="detail-card">
						<p class="detail-label">If You Have Kids</p>
						<p>Kids check-in is simple, and the volunteers serving there are trained and background checked.</p>
					</div>
					<div class="detail-card">
						<p class="detail-label">During The Gathering</p>
						<p>You'll hear worship, prayer, and biblical teaching in a room full of regular people, not perfect ones.</p>
					</div>
				</div>

				<div class="mt-7 flex flex-wrap gap-3">
					<Button href="/about-us" variant="primary">
						Plan Your Visit
					</Button>
					<Button href="/watch" variant="outline-dark">
						Watch A Service
					</Button>
				</div>
			</Card>

				<div class="grid gap-5">
					{#each featuredLinks as link}
						<Card
							href={link.href}
							target={link.external ? '_blank' : undefined}
							rel={link.external ? 'noopener noreferrer' : undefined}
							class="resource-card p-6 arrow-slide-hover"
						>
						<p class="section-label">{link.eyebrow}</p>
						<h3 class="text-[1.42rem]">{link.title}</h3>
						<p class="mt-3 text-[0.98rem] leading-[1.8] text-(--color-text-muted)">
							{link.description}
						</p>
						<span class="resource-link">
							{link.cta}
							<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<line x1="5" y1="12" x2="19" y2="12"></line>
								<polyline points="12 5 19 12 12 19"></polyline>
							</svg>
						</span>
					</Card>
				{/each}
			</div>
		</div>

			<div class="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
				{#each exploreLinks as link}
					<Card
						href={link.href}
						target={link.external ? '_blank' : undefined}
						rel={link.external ? 'noopener noreferrer' : undefined}
						class="resource-card p-6 arrow-slide-hover"
					>
					<p class="section-label">{link.eyebrow}</p>
					<h3 class="text-[1.28rem]">{link.title}</h3>
					<p class="mt-3 text-[0.96rem] leading-[1.8] text-(--color-text-muted)">
						{link.description}
					</p>
					<span class="resource-link">
						{link.cta}
						<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
							<line x1="5" y1="12" x2="19" y2="12"></line>
							<polyline points="12 5 19 12 12 19"></polyline>
						</svg>
					</span>
				</Card>
			{/each}

				<Card class="resource-card p-6">
					<p class="section-label">Sermons And Teaching</p>
					<h3 class="text-[1.28rem]">Watch or listen during the week.</h3>
				<p class="mt-3 text-[0.96rem] leading-[1.8] text-(--color-text-muted)">
					Missed a Sunday? Watch online or pull up the podcast during the week.
				</p>

				<div class="mt-6 flex flex-wrap gap-2.5">
					<a href="/watch" class="sub-link">Watch Online</a>
					<a href={podcastUrl} target="_blank" rel="noopener noreferrer" class="sub-link">Podcast</a>
				</div>
			</Card>
		</div>
	</div>
</section>

<section class="py-[clamp(4.5rem,8vw,6rem)]">
	<div class="container">
		<div class="contact-shell">
			<div class="contact-copy">
				<p class="section-label">Want To Talk To Someone?</p>
				<h2 class="text-[clamp(1.8rem,4vw,2.75rem)]">Call or email us. Really.</h2>
				<p class="mt-4 max-w-[60ch] text-[1rem] leading-[1.85] text-(--color-text-muted)">
					If you'd rather talk to a person than click around, the church office is easy to reach.
				</p>
			</div>

			<div class="contact-grid">
				<div class="contact-card">
					<p class="contact-label">Visit</p>
					<p class="contact-value">15951 Winters Mill Parkway<br />Wimberley, Texas 78676</p>
				</div>
				<div class="contact-card">
					<p class="contact-label">Call</p>
					<p class="contact-value"><a href="tel:+15128479035">512-847-9035</a></p>
				</div>
				<div class="contact-card">
					<p class="contact-label">Email</p>
					<p class="contact-value"><a href="mailto:office@fbcwimberley.com">office@fbcwimberley.com</a></p>
				</div>
			</div>

			<div class="mt-8 flex flex-wrap gap-3">
				<Button href={directionsUrl} variant="accent" target="_blank" rel="noopener noreferrer">
					Get Directions
				</Button>
				<Button href="mailto:office@fbcwimberley.com" variant="outline-dark">
					Email The Office
				</Button>
				<Button href="tel:+15128479035" variant="outline-dark">
					Call The Office
				</Button>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-viewport {
		width: 100vw;
		min-height: 100svh;
		margin-inline: calc(50% - 50vw);
	}

	.hero-chip {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.55rem 0.9rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.16);
		background: rgba(255, 255, 255, 0.08);
		color: rgba(255, 255, 255, 0.84);
		font-size: 0.82rem;
		font-weight: 600;
		letter-spacing: 0.04em;
	}

	.hero-note {
		padding: 0.95rem 1rem;
		border-radius: var(--radius-md);
		border: 1px solid rgba(255, 255, 255, 0.14);
		background: rgba(255, 255, 255, 0.08);
		color: rgba(255, 255, 255, 0.76);
		font-size: 0.94rem;
		line-height: 1.8;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
	}

	.hero-panel {
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.11) 0%, rgba(255, 255, 255, 0.06) 100%);
		border: 1px solid rgba(255, 255, 255, 0.14);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
		box-shadow: 0 24px 60px rgba(7, 10, 19, 0.24);
	}

	.panel-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.42rem 0.7rem;
		border-radius: 999px;
		background: rgba(200, 145, 90, 0.18);
		border: 1px solid rgba(200, 145, 90, 0.28);
		color: rgba(255, 255, 255, 0.88);
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	.schedule-row {
		display: grid;
		grid-template-columns: 108px minmax(0, 1fr);
		gap: 1rem;
		padding: 1rem 0;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.schedule-row:first-of-type {
		padding-top: 0;
		border-top: 0;
	}

	.schedule-time {
		display: flex;
		flex-direction: column;
		gap: 0.15rem;
		font-size: 0.78rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(255, 255, 255, 0.58);
	}

	.schedule-title {
		font-family: var(--font-sans);
		font-size: 1rem;
		font-weight: 700;
		color: rgba(255, 255, 255, 0.96);
	}

	.schedule-detail {
		margin-top: 0.28rem;
		font-size: 0.92rem;
		line-height: 1.7;
		color: rgba(255, 255, 255, 0.7);
	}

	.mini-action {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 44px;
		padding: 0.65rem 1rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.14);
		background: rgba(255, 255, 255, 0.08);
		color: rgba(255, 255, 255, 0.88);
		font-size: 0.84rem;
		font-weight: 600;
		transition:
			transform 200ms ease,
			border-color 200ms ease,
			background 200ms ease;
	}

	.mini-action:hover {
		transform: translateY(-1px);
		border-color: rgba(255, 255, 255, 0.24);
		background: rgba(255, 255, 255, 0.13);
		color: white;
	}

	:global(.featured-card) {
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(255, 255, 255, 0.96) 100%);
		border: 1px solid rgba(44, 95, 124, 0.12);
		box-shadow: 0 24px 48px rgba(25, 33, 52, 0.08);
	}

	.detail-card {
		padding: 1rem;
		border-radius: var(--radius-md);
		background: color-mix(in srgb, var(--color-bg-alt) 78%, white 22%);
		border: 1px solid var(--color-border-light);
	}

	.detail-card p:last-child {
		font-size: 0.92rem;
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	.detail-label {
		margin-bottom: 0.45rem;
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-primary);
	}

	:global(.resource-card) {
		display: flex;
		flex-direction: column;
		min-height: 100%;
	}

	.resource-link {
		display: inline-flex;
		align-items: center;
		gap: 0.45rem;
		margin-top: auto;
		padding-top: 1.5rem;
		font-weight: 700;
		color: var(--color-primary);
	}

	.sub-link {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 44px;
		padding: 0.62rem 0.95rem;
		border-radius: 999px;
		border: 1px solid var(--color-border);
		background: var(--color-bg-alt);
		color: var(--color-text);
		font-size: 0.85rem;
		font-weight: 600;
	}

	.sub-link:hover {
		border-color: var(--color-primary);
		color: var(--color-primary);
	}

	.contact-shell {
		padding: clamp(1.75rem, 4vw, 3rem);
		border-radius: var(--radius-lg);
		background:
			linear-gradient(135deg, color-mix(in srgb, var(--color-bg-alt) 82%, white 18%) 0%, var(--color-bg-card) 100%);
		border: 1px solid var(--color-border-light);
		box-shadow: var(--shadow-sm);
	}

	.contact-grid {
		display: grid;
		gap: 1rem;
		margin-top: 2rem;
	}

	.contact-card {
		padding: 1rem 1.1rem;
		border-radius: var(--radius-md);
		background: var(--color-bg);
		border: 1px solid var(--color-border-light);
	}

	.contact-label {
		margin-bottom: 0.45rem;
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-accent);
	}

	.contact-value {
		font-size: 0.98rem;
		line-height: 1.75;
		color: var(--color-text);
	}

	@media (min-width: 768px) {
		.contact-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (max-width: 767px) {
		.hero-viewport {
			margin-inline: 0;
			width: 100%;
		}

		.schedule-row {
			grid-template-columns: 1fr;
			gap: 0.55rem;
		}
	}

	:global(.dark .featured-card) {
		background:
			linear-gradient(180deg, rgba(30, 30, 50, 0.94) 0%, rgba(22, 24, 40, 0.98) 100%);
		border-color: rgba(90, 159, 194, 0.14);
	}

	:global(.dark) .detail-card,
	:global(.dark) .contact-card {
		background: rgba(255, 255, 255, 0.03);
		border-color: var(--color-border-light);
	}

	:global(.dark) .contact-shell {
		background:
			linear-gradient(135deg, rgba(22, 24, 40, 0.92) 0%, rgba(16, 18, 30, 0.98) 100%);
	}
</style>
