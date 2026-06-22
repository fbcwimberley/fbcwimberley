<script lang="ts">
	import { onMount } from 'svelte';
	import { familyMilestones } from '$lib/familyMilestones';
	import FamilyMilestoneIcon from '$lib/ui/FamilyMilestoneIcon.svelte';

	const pathwaySteps = [
		{
			kicker: 'Start',
			title: 'Know the season',
			text: 'Each milestone names a key stage of spiritual formation so parents can lead with confidence.'
		},
		{
			kicker: 'Equip',
			title: 'Train the home',
			text: 'Parent training gives families shared language, practical tools, and a clear next conversation.'
		},
		{
			kicker: 'Mark',
			title: 'Celebrate the moment',
			text: 'Church and family events help mark growth with blessing, worship, and community support.'
		}
	];

	const totalMilestones = familyMilestones.length;
	let activeMilestone = $state(familyMilestones[0]?.number ?? 1);
	let milestonePage: HTMLElement;

	onMount(() => {
		const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		const revealItems = milestonePage.querySelectorAll<HTMLElement>('[data-reveal]');
		const milestoneCards = milestonePage.querySelectorAll<HTMLElement>('[data-milestone]');

		if (!('IntersectionObserver' in window)) {
			revealItems.forEach((item) => item.classList.add('is-visible'));
			return;
		}

		let revealObserver: IntersectionObserver | undefined;

		if (reduceMotion) {
			revealItems.forEach((item) => item.classList.add('is-visible'));
		} else {
			revealObserver = new IntersectionObserver(
				(entries) => {
					for (const entry of entries) {
						if (entry.isIntersecting) {
							entry.target.classList.add('is-visible');
							revealObserver?.unobserve(entry.target);
						}
					}
				},
				{ threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
			);

			revealItems.forEach((item) => revealObserver?.observe(item));
		}

		const activeObserver = new IntersectionObserver(
			(entries) => {
				const visible = entries
					.filter((entry) => entry.isIntersecting)
					.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

				if (visible?.target instanceof HTMLElement) {
					activeMilestone = Number(visible.target.dataset.milestone);
				}
			},
			{ threshold: [0.32, 0.5, 0.68], rootMargin: '-18% 0px -42% 0px' }
		);

		milestoneCards.forEach((card) => activeObserver.observe(card));

		return () => {
			revealObserver?.disconnect();
			activeObserver.disconnect();
		};
	});
</script>

<svelte:head>
	<title>Family Milestones - First Baptist Church Wimberley</title>
	<meta
		name="description"
		content="Explore Family Milestones at First Baptist Church Wimberley, from Family Dedication through Life in Christ."
	/>
</svelte:head>

<section class="milestone-page" bind:this={milestonePage}>
	<section class="milestones-hero">
		<div class="container max-w-[1220px]">
			<div class="hero-grid">
				<div class="hero-copy" data-reveal>
					<p class="section-label">FBCW Formation Pathway</p>
					<h1>Family Milestones</h1>
					<p class="hero-lede">
						A parent-focused roadmap for discipling children from their earliest years into a lifelong walk with Christ.
					</p>
					<div class="hero-actions" role="group" aria-label="Family Milestones actions">
						<a href="#milestone-roadmap" class="primary-action">Explore the Pathway</a>
						<a href="/connect" class="secondary-action">Ask a Question</a>
					</div>
				</div>

				<aside class="hero-panel" data-reveal>
					<div class="hero-panel__ring" aria-hidden="true">
						<span>{totalMilestones}</span>
					</div>
					<p class="hero-panel__eyebrow">Milestone Pathway</p>
					<p class="hero-panel__title">From Family Dedication to Life in Christ</p>
					<p class="hero-panel__text">
						Each stage pairs parent training with a church or family event so formation is taught, practiced, and celebrated.
					</p>
				</aside>
			</div>
		</div>
	</section>

	<section class="pathway-overview" aria-labelledby="pathway-overview-heading">
		<div class="container max-w-[1120px]">
			<div class="overview-heading" data-reveal>
				<p class="section-label">How The Pathway Works</p>
				<h2 id="pathway-overview-heading">Faith formation moves from home to church and back again.</h2>
			</div>

			<div class="overview-steps">
				{#each pathwaySteps as step, index}
					<article class="overview-step" data-reveal style={`--reveal-index: ${index};`}>
						<p class="overview-step__kicker">{step.kicker}</p>
						<h3>{step.title}</h3>
						<p>{step.text}</p>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section id="milestone-roadmap" class="roadmap-section" aria-labelledby="roadmap-heading">
		<div class="container max-w-[1220px]">
			<div class="roadmap-layout">
				<aside class="pathway-nav" aria-label="Family Milestones pathway">
					<p class="pathway-nav__label">Current Milestone</p>
					<h2 id="roadmap-heading">The Seven Milestones</h2>
					<nav>
						{#each familyMilestones as milestone}
							<a
								href={`#milestone-${milestone.number}`}
								class:active={activeMilestone === milestone.number}
								aria-current={activeMilestone === milestone.number ? 'location' : undefined}
								style={`--milestone-accent: ${milestone.accent};`}
							>
								<span>{milestone.number}</span>
								{milestone.title}
							</a>
						{/each}
					</nav>
				</aside>

				<div class="milestone-list">
					{#each familyMilestones as milestone, index}
						<article
							id={`milestone-${milestone.number}`}
							class="milestone-card"
							data-reveal
							data-milestone={milestone.number}
							style={`--milestone-accent: ${milestone.accent}; --milestone-surface: ${milestone.surface}; --reveal-index: ${index};`}
						>
							<div class="milestone-card__header">
								<div class="milestone-token" aria-hidden="true">
									<FamilyMilestoneIcon icon={milestone.icon} />
								</div>
								<div class="milestone-heading">
									<p class="milestone-kicker">Milestone {milestone.number} / {milestone.ministryDepartment}</p>
									<h3>{milestone.title}</h3>
								</div>
							</div>

							<dl class="milestone-meta" aria-label={`${milestone.title} details`}>
								<div>
									<dt>Target Audience</dt>
									<dd>{milestone.targetAudience}</dd>
								</div>
								{#each milestone.events as event}
									<div>
										<dt>{event.label}</dt>
										<dd>{event.value}</dd>
									</div>
								{/each}
							</dl>

							<div class="training-panel">
								<p class="training-panel__label">Parent Training</p>
								{#each milestone.parentTraining as paragraph}
									<p>{paragraph}</p>
								{/each}
							</div>
						</article>
					{/each}
				</div>
			</div>
		</div>
	</section>
</section>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	.milestone-page {
		--fm-ink: var(--color-heading);
		--fm-muted: var(--color-text-muted);
		--fm-line: color-mix(in oklch, var(--color-border) 78%, transparent);
		--fm-canvas: color-mix(in oklch, var(--color-bg) 94%, var(--color-primary) 6%);
		background: var(--fm-canvas);
		color: var(--color-text);
		overflow: clip;
	}

	.milestones-hero {
		position: relative;
		padding: clamp(8rem, 13vw, 11rem) 0 clamp(5rem, 9vw, 7.5rem);
		isolation: isolate;
	}

	.milestones-hero::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -2;
		background:
			radial-gradient(circle at 12% 18%, color-mix(in oklch, var(--color-primary) 24%, transparent), transparent 26rem),
			radial-gradient(circle at 88% 12%, color-mix(in oklch, var(--color-accent) 24%, transparent), transparent 24rem),
			linear-gradient(180deg, var(--color-bg-alt), var(--fm-canvas) 72%);
	}

	.milestones-hero::after {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background-image:
			linear-gradient(color-mix(in oklch, var(--color-primary) 10%, transparent) 1px, transparent 1px),
			linear-gradient(90deg, color-mix(in oklch, var(--color-primary) 10%, transparent) 1px, transparent 1px);
		background-size: 52px 52px;
		mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5), transparent 72%);
	}

	.hero-grid {
		display: grid;
		grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.62fr);
		gap: clamp(2rem, 6vw, 5rem);
		align-items: end;
	}

	.hero-copy h1 {
		max-width: 760px;
		margin: 0;
		color: var(--fm-ink);
		font-family: var(--font-serif);
		font-size: clamp(3.2rem, 8vw, 7rem);
		line-height: 0.86;
		letter-spacing: 0;
	}

	.hero-lede {
		max-width: 680px;
		margin: clamp(1.25rem, 3vw, 2rem) 0 0;
		color: var(--fm-muted);
		font-size: clamp(1.08rem, 2vw, 1.32rem);
		line-height: 1.75;
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: clamp(1.75rem, 4vw, 2.5rem);
	}

	.primary-action,
	.secondary-action {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		min-height: 3.15rem;
		padding: 0.9rem 1.35rem;
		border-radius: var(--radius-full);
		font-weight: 800;
		text-decoration: none;
		transition:
			transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
			background 220ms ease,
			color 220ms ease,
			border-color 220ms ease,
			box-shadow 220ms ease;
	}

	.primary-action {
		background: var(--color-primary);
		color: var(--color-text-inverse);
		box-shadow: 0 18px 42px color-mix(in oklch, var(--color-primary) 24%, transparent);
	}

	.secondary-action {
		border: 1px solid color-mix(in oklch, var(--color-primary) 42%, var(--color-border));
		background: color-mix(in oklch, var(--color-bg-card) 78%, transparent);
		color: var(--color-primary);
	}

	.primary-action:hover,
	.secondary-action:hover {
		transform: translateY(-3px);
	}

	.primary-action:hover {
		background: var(--color-primary-hover);
		box-shadow: 0 22px 48px color-mix(in oklch, var(--color-primary) 30%, transparent);
	}

	.secondary-action:hover {
		border-color: var(--color-primary);
		background: var(--color-bg-card);
	}

	.hero-panel {
		position: relative;
		display: grid;
		gap: 1rem;
		padding: clamp(1.35rem, 3vw, 2rem);
		border: 1px solid var(--fm-line);
		border-radius: calc(var(--radius-lg) + 0.65rem);
		background:
			linear-gradient(145deg, color-mix(in oklch, var(--color-bg-card) 92%, transparent), color-mix(in oklch, var(--color-bg-alt) 76%, transparent)),
			var(--color-bg-card);
		box-shadow: 0 26px 80px rgba(21, 26, 36, 0.16);
		overflow: hidden;
	}

	.hero-panel::before {
		content: '';
		position: absolute;
		inset: auto -12% -34% 22%;
		height: 13rem;
		border-radius: 999px;
		background: color-mix(in oklch, var(--color-accent) 18%, transparent);
		filter: blur(38px);
		pointer-events: none;
	}

	.hero-panel__ring {
		position: relative;
		width: 8.5rem;
		aspect-ratio: 1;
		border: 1px solid color-mix(in oklch, var(--color-accent) 50%, var(--color-border));
		border-radius: 999px;
		background:
			radial-gradient(circle, color-mix(in oklch, var(--color-accent) 18%, transparent) 0 46%, transparent 47%),
			var(--color-bg-card);
		color: var(--color-accent);
		font-family: var(--font-serif);
		font-size: 4rem;
		font-weight: 700;
		line-height: 1;
	}

	.hero-panel__ring span {
		position: absolute;
		top: 40%;
		left: 50%;
		display: grid;
		place-items: center;
		line-height: 1;
		transform: translate(-50%, -50%);
	}

	.hero-panel__eyebrow,
	.pathway-nav__label,
	.milestone-kicker,
	.training-panel__label,
	.overview-step__kicker {
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.13em;
		text-transform: uppercase;
	}

	.hero-panel__eyebrow {
		color: var(--color-primary);
	}

	.hero-panel__title {
		margin: 0;
		color: var(--fm-ink);
		font-family: var(--font-serif);
		font-size: clamp(1.55rem, 3vw, 2.15rem);
		line-height: 1.06;
	}

	.hero-panel__text {
		margin: 0;
		color: var(--fm-muted);
		line-height: 1.75;
	}

	.pathway-overview {
		padding: clamp(3.5rem, 8vw, 6.5rem) 0;
	}

	.overview-heading {
		display: grid;
		gap: 0.85rem;
		justify-items: start;
		margin-bottom: clamp(1.5rem, 4vw, 2.75rem);
	}

	.overview-heading h2 {
		max-width: 780px;
		margin: 0;
		color: var(--fm-ink);
		font-family: var(--font-serif);
		font-size: clamp(2rem, 4.5vw, 4rem);
		line-height: 0.98;
	}

	.overview-steps {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(0.875rem, 2vw, 1.25rem);
	}

	.overview-step {
		min-height: 15rem;
		padding: clamp(1.25rem, 3vw, 1.75rem);
		border: 1px solid var(--fm-line);
		border-radius: calc(var(--radius-lg) + 0.35rem);
		background: color-mix(in oklch, var(--color-bg-card) 88%, transparent);
		box-shadow: 0 18px 56px rgba(21, 26, 36, 0.08);
	}

	.overview-step__kicker {
		margin: 0 0 2.2rem;
		color: var(--color-accent);
	}

	.overview-step h3 {
		margin: 0 0 0.75rem;
		color: var(--fm-ink);
		font-family: var(--font-serif);
		font-size: clamp(1.35rem, 2.4vw, 1.85rem);
		line-height: 1.1;
	}

	.overview-step p:last-child {
		margin: 0;
		color: var(--fm-muted);
		line-height: 1.72;
	}

	.roadmap-section {
		padding: clamp(3rem, 8vw, 6rem) 0 clamp(5rem, 10vw, 8rem);
	}

	.roadmap-layout {
		display: grid;
		grid-template-columns: minmax(240px, 320px) minmax(0, 1fr);
		gap: clamp(1.5rem, 4vw, 4.5rem);
		align-items: start;
	}

	.pathway-nav {
		position: sticky;
		top: 7.5rem;
		display: grid;
		gap: 1.25rem;
		padding: 1.25rem;
		border: 1px solid var(--fm-line);
		border-radius: calc(var(--radius-lg) + 0.4rem);
		background: color-mix(in oklch, var(--color-bg-card) 88%, transparent);
		box-shadow: 0 18px 60px rgba(21, 26, 36, 0.1);
	}

	.pathway-nav__label {
		margin: 0;
		color: var(--color-accent);
	}

	.pathway-nav h2 {
		margin: 0;
		color: var(--fm-ink);
		font-family: var(--font-serif);
		font-size: clamp(1.65rem, 3vw, 2.25rem);
		line-height: 1.04;
	}

	.pathway-nav nav {
		display: grid;
		gap: 0.4rem;
	}

	.pathway-nav a {
		display: grid;
		grid-template-columns: 2rem minmax(0, 1fr);
		gap: 0.65rem;
		align-items: center;
		padding: 0.55rem 0.65rem;
		border: 1px solid transparent;
		border-radius: var(--radius-md);
		color: var(--fm-muted);
		font-size: 0.86rem;
		font-weight: 700;
		text-decoration: none;
		transition:
			transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
			background 220ms ease,
			border-color 220ms ease,
			color 220ms ease;
	}

	.pathway-nav a span {
		display: grid;
		place-items: center;
		width: 2rem;
		aspect-ratio: 1;
		border-radius: var(--radius-full);
		background: color-mix(in oklch, var(--milestone-accent) 14%, var(--color-bg-card));
		color: var(--milestone-accent);
		font-size: 0.78rem;
	}

	.pathway-nav a:hover,
	.pathway-nav a.active {
		transform: translateX(0.18rem);
		border-color: color-mix(in oklch, var(--milestone-accent) 30%, var(--color-border));
		background: color-mix(in oklch, var(--milestone-accent) 10%, var(--color-bg-card));
		color: var(--fm-ink);
	}

	.milestone-list {
		position: relative;
		display: grid;
		gap: clamp(1.25rem, 3vw, 2rem);
	}

	.milestone-list::before {
		content: '';
		position: absolute;
		top: 1rem;
		bottom: 1rem;
		left: 2.45rem;
		width: 1px;
		background: linear-gradient(180deg, var(--color-primary), var(--color-accent), color-mix(in oklch, var(--color-primary) 70%, var(--color-accent)));
		opacity: 0.35;
	}

	.milestone-card {
		position: relative;
		display: grid;
		gap: clamp(1.15rem, 3vw, 1.65rem);
		padding: clamp(1.15rem, 3vw, 1.75rem);
		border: 1px solid color-mix(in oklch, var(--milestone-accent) 24%, var(--color-border));
		border-radius: calc(var(--radius-lg) + 0.45rem);
		background:
			radial-gradient(circle at 0 0, var(--milestone-surface), transparent 18rem),
			linear-gradient(135deg, color-mix(in oklch, var(--color-bg-card) 96%, transparent), color-mix(in oklch, var(--color-bg-card) 82%, var(--milestone-accent) 4%));
		box-shadow: 0 22px 70px rgba(21, 26, 36, 0.1);
		scroll-margin-top: 7rem;
		transition:
			transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 260ms ease,
			border-color 260ms ease;
	}

	.milestone-card:hover {
		transform: translateY(-4px);
		border-color: color-mix(in oklch, var(--milestone-accent) 48%, var(--color-border));
		box-shadow: 0 28px 86px rgba(21, 26, 36, 0.14);
	}

	.milestone-card__header {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: clamp(0.9rem, 2vw, 1.25rem);
		align-items: center;
	}

	.milestone-token {
		position: relative;
		z-index: 1;
		display: grid;
		place-items: center;
		width: clamp(4.5rem, 8vw, 5.75rem);
		aspect-ratio: 1;
		border: 1px solid color-mix(in oklch, var(--milestone-accent) 38%, var(--color-border));
		border-radius: 999px;
		background:
			radial-gradient(circle at 35% 25%, color-mix(in oklch, var(--color-bg-card) 76%, transparent), transparent 48%),
			var(--milestone-accent);
		color: var(--color-text-inverse);
		box-shadow: 0 18px 42px color-mix(in oklch, var(--milestone-accent) 28%, transparent);
		transition:
			transform 260ms cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 260ms ease;
	}

	.milestone-card:hover .milestone-token {
		transform: rotate(-4deg) scale(1.04);
		box-shadow: 0 22px 54px color-mix(in oklch, var(--milestone-accent) 34%, transparent);
	}

	.milestone-token :global(svg) {
		width: 62%;
		height: 62%;
	}

	.milestone-heading {
		min-width: 0;
	}

	.milestone-kicker {
		margin: 0 0 0.4rem;
		color: var(--milestone-accent);
	}

	.milestone-heading h3 {
		margin: 0;
		color: var(--fm-ink);
		font-family: var(--font-serif);
		font-size: clamp(1.65rem, 4vw, 3rem);
		line-height: 0.98;
	}

	.milestone-meta {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 0.75rem;
	}

	.milestone-meta div {
		padding: 0.9rem 1rem;
		border: 1px solid var(--fm-line);
		border-radius: var(--radius-md);
		background: color-mix(in oklch, var(--color-bg) 64%, transparent);
	}

	.milestone-meta dt {
		margin-bottom: 0.35rem;
		color: var(--fm-muted);
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.11em;
		text-transform: uppercase;
	}

	.milestone-meta dd {
		margin: 0;
		color: var(--fm-ink);
		font-weight: 700;
		line-height: 1.45;
	}

	.training-panel {
		display: grid;
		gap: 0.85rem;
		padding-top: clamp(0.75rem, 2vw, 1rem);
		border-top: 1px solid var(--fm-line);
	}

	.training-panel__label {
		margin: 0;
		color: var(--milestone-accent);
	}

	.training-panel p:not(.training-panel__label) {
		max-width: 76ch;
		margin: 0;
		color: var(--color-text);
		line-height: 1.82;
	}

	[data-reveal] {
		opacity: 0;
		transform: translateY(1.75rem);
		transition:
			opacity 620ms cubic-bezier(0.22, 1, 0.36, 1),
			transform 620ms cubic-bezier(0.22, 1, 0.36, 1);
		transition-delay: calc(var(--reveal-index, 0) * 70ms);
	}

	.milestone-page :global([data-reveal].is-visible) {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-panel[data-reveal] {
		transform: translateY(2rem) scale(0.98);
	}

	.milestone-page :global(.hero-panel[data-reveal].is-visible) {
		transform: translateY(0) scale(1);
	}

	@media (max-width: 980px) {
		.hero-grid,
		.roadmap-layout {
			grid-template-columns: 1fr;
		}

		.pathway-nav {
			position: relative;
			top: auto;
		}

		.pathway-nav nav {
			grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		}

		.pathway-nav a {
			transform: none;
		}

		.pathway-nav a:hover,
		.pathway-nav a.active {
			transform: translateY(-2px);
		}
	}

	@media (max-width: 760px) {
		.milestones-hero {
			padding-top: 7.5rem;
		}

		.hero-actions {
			align-items: stretch;
			flex-direction: column;
		}

		.primary-action,
		.secondary-action {
			width: 100%;
		}

		.overview-steps {
			grid-template-columns: 1fr;
		}

		.overview-step {
			min-height: auto;
		}

		.milestone-list::before {
			display: none;
		}

		.milestone-card__header {
			grid-template-columns: 1fr;
		}

		.milestone-token {
			width: 4.35rem;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:global(html) {
			scroll-behavior: auto;
		}

		[data-reveal],
		.hero-panel[data-reveal] {
			opacity: 1;
			transform: none;
			transition: none;
		}

		.primary-action,
		.secondary-action,
		.pathway-nav a,
		.milestone-card,
		.milestone-token {
			transition: none;
		}

		.milestone-card:hover,
		.milestone-card:hover .milestone-token,
		.primary-action:hover,
		.secondary-action:hover,
		.pathway-nav a:hover,
		.pathway-nav a.active {
			transform: none;
		}
	}
</style>
