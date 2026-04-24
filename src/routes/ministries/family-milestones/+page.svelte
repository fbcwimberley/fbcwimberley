<script lang="ts">
	import { familyMilestones } from '$lib/familyMilestones';
	import FamilyMilestoneIcon from '$lib/ui/FamilyMilestoneIcon.svelte';
</script>

<svelte:head>
	<title>Family Milestones - First Baptist Church Wimberley</title>
	<meta
		name="description"
		content="Explore Family Milestones at First Baptist Church Wimberley, from Family Dedication through Life in Christ."
	/>
</svelte:head>

<section class="milestones-hero pt-32 pb-18 md:pt-40 md:pb-24">
	<div class="container max-w-[1180px]">
		<div class="hero-shell">
			<div class="max-w-[700px]">
				<p class="section-label">FBCW Milestones</p>
				<h1 class="text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.96] mb-5">Family Milestones</h1>
				<p class="text-[1.02rem] md:text-[1.12rem] leading-[1.9] text-(--color-text-muted)">
					From childhood to a life in Christ, we want families to know Christ and make Him
					known through every season. These milestones help mark key discipleship moments
					across Kids Ministry, Student Ministry, and Adult Ministry.
				</p>
			</div>

			<aside class="hero-quote">
				<p class="hero-quote__eyebrow">Family Ministry Milestones</p>
				<p class="hero-quote__title">From childhood to a life in Christ</p>
				<p class="hero-quote__text">To know Christ and make Him known.</p>
				<p class="hero-quote__scripture">Matthew 28:19-20</p>
			</aside>
		</div>
	</div>
</section>

<section class="pb-20 md:pb-24">
	<div class="container max-w-[1180px]">
		<div class="roadmap">
			{#each familyMilestones as milestone}
				<article
					class="milestone-card"
					style={`--milestone-accent: ${milestone.accent}; --milestone-surface: ${milestone.surface};`}
				>
					<div class="milestone-rail">
						<p class="milestone-number">Milestone {milestone.number}</p>
						<div class="milestone-icon">
							<FamilyMilestoneIcon icon={milestone.icon} />
						</div>
					</div>

					<div class="milestone-body">
						<div class="milestone-body__header">
							<p class="milestone-department">{milestone.ministryDepartment}</p>
							<h2 class="text-[clamp(1.45rem,2.8vw,2rem)]">{milestone.title}</h2>
						</div>

						<dl class="milestone-details">
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

						<div class="milestone-training">
							<p class="milestone-training__label">Parent Training</p>
							{#each milestone.parentTraining as paragraph}
								<p>{paragraph}</p>
							{/each}
						</div>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.milestones-hero {
		position: relative;
		overflow: hidden;
		background:
			radial-gradient(circle at top left, rgba(79, 124, 172, 0.18), transparent 34%),
			radial-gradient(circle at bottom right, rgba(206, 160, 73, 0.14), transparent 28%),
			linear-gradient(180deg, var(--color-bg-alt), transparent 55%),
			var(--color-bg);
	}

	.milestones-hero::before {
		content: '';
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(140, 122, 98, 0.08) 1px, transparent 1px),
			linear-gradient(90deg, rgba(140, 122, 98, 0.08) 1px, transparent 1px);
		background-size: 40px 40px;
		mask-image: linear-gradient(180deg, rgba(0, 0, 0, 0.42), transparent 85%);
		pointer-events: none;
	}

	.hero-shell {
		position: relative;
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(260px, 340px);
		gap: 2rem;
		align-items: end;
		padding: clamp(1.5rem, 3vw, 2rem);
		border: 1px solid var(--color-border-light);
		border-radius: calc(var(--radius-lg) + 0.5rem);
		background:
			linear-gradient(180deg, rgba(255, 255, 255, 0.05), transparent 48%),
			var(--color-bg-card);
		box-shadow: var(--shadow-lg);
	}

	.hero-quote {
		padding: 1.5rem;
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-lg);
		background:
			linear-gradient(145deg, rgba(77, 146, 202, 0.12), rgba(59, 143, 91, 0.08)),
			var(--color-bg-card);
	}

	.hero-quote__eyebrow {
		margin-bottom: 0.75rem;
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--color-primary);
	}

	.hero-quote__title {
		margin-bottom: 0.75rem;
		font-family: var(--font-serif);
		font-size: 1.35rem;
		color: var(--color-heading);
	}

	.hero-quote__text {
		margin-bottom: 0.75rem;
		font-size: 1.05rem;
		line-height: 1.8;
		color: var(--color-heading);
	}

	.hero-quote__scripture {
		font-size: 0.84rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.roadmap {
		position: relative;
		display: grid;
		gap: 1.5rem;
	}

	.roadmap::before {
		content: '';
		position: absolute;
		top: 0.75rem;
		bottom: 0.75rem;
		left: 4.05rem;
		width: 2px;
		background: linear-gradient(180deg, rgba(77, 146, 202, 0.55), rgba(212, 166, 60, 0.45));
	}

	.milestone-card {
		position: relative;
		display: grid;
		grid-template-columns: 7rem minmax(0, 1fr);
		gap: 1.5rem;
		align-items: stretch;
	}

	.milestone-rail {
		position: relative;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.8rem;
		padding-top: 0.35rem;
	}

	.milestone-number {
		font-size: 0.76rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--milestone-accent);
	}

	.milestone-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 4.5rem;
		height: 4.5rem;
		border-radius: 999px;
		background: var(--milestone-accent);
		color: white;
		box-shadow: 0 14px 30px rgba(0, 0, 0, 0.16);
	}

	.milestone-icon :global(svg) {
		width: 2rem;
		height: 2rem;
	}

	.milestone-body {
		border: 1px solid var(--color-border-light);
		border-left: 4px solid var(--milestone-accent);
		border-radius: var(--radius-lg);
		background:
			linear-gradient(135deg, var(--milestone-surface), transparent 48%),
			var(--color-bg-card);
		padding: clamp(1.35rem, 3vw, 2rem);
		box-shadow: var(--shadow-md);
	}

	.milestone-body__header {
		margin-bottom: 1.2rem;
	}

	.milestone-department {
		margin-bottom: 0.35rem;
		font-size: 0.82rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--milestone-accent);
	}

	.milestone-details {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1rem;
		padding: 1rem 0 1.1rem;
		border-top: 1px solid var(--color-border-light);
		border-bottom: 1px solid var(--color-border-light);
	}

	.milestone-details dt {
		margin-bottom: 0.28rem;
		font-size: 0.72rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.milestone-details dd {
		line-height: 1.6;
		color: var(--color-heading);
	}

	.milestone-training {
		padding-top: 1.1rem;
	}

	.milestone-training__label {
		margin-bottom: 0.75rem;
		font-size: 0.8rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--milestone-accent);
	}

	.milestone-training p + p {
		margin-top: 0.9rem;
	}

	.milestone-training p {
		line-height: 1.82;
		color: var(--color-text);
	}

	@media (max-width: 900px) {
		.hero-shell {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 767px) {
		.roadmap::before {
			left: 2rem;
		}

		.milestone-card {
			grid-template-columns: 1fr;
			gap: 1rem;
		}

		.milestone-rail {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			padding-left: 0.5rem;
		}

		.milestone-icon {
			width: 3.8rem;
			height: 3.8rem;
		}
	}
</style>
