<script lang="ts">
	import type { FamilyMilestone } from '$lib/familyMilestones';
	import { familyMilestoneRoute } from '$lib/familyMilestones';
	import FamilyMilestoneIcon from '$lib/ui/FamilyMilestoneIcon.svelte';

	type Props = {
		eyebrow?: string;
		title: string;
		intro: string;
		milestones: FamilyMilestone[];
	};

	let { eyebrow = 'Family Milestones', title, intro, milestones }: Props = $props();
</script>

<section class="py-16 md:py-20">
	<div class="container max-w-[1100px]">
		<div class="preview-shell">
			<div class="mb-8 max-w-[740px]">
				<p class="section-label">{eyebrow}</p>
				<h2 class="text-[clamp(1.7rem,3.5vw,2.5rem)] mb-4">{title}</h2>
				<p class="text-(--color-text-muted) leading-[1.8]">
					{intro}
					The full pathway is also available on the
					<a href={familyMilestoneRoute} class="preview-link">Family Milestones page</a>.
				</p>
			</div>

			<div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
				{#each milestones as milestone}
					<article
						class="preview-card"
						style={`--milestone-accent: ${milestone.accent}; --milestone-surface: ${milestone.surface};`}
					>
						<div class="preview-card__header">
							<div class="preview-card__icon">
								<FamilyMilestoneIcon icon={milestone.icon} />
							</div>
							<div>
								<p class="preview-card__number">Milestone {milestone.number}</p>
								<h3 class="text-[1.2rem] text-(--color-heading)">{milestone.title}</h3>
							</div>
						</div>

						<dl class="preview-card__details">
							<div>
								<dt>Ministry Department</dt>
								<dd>{milestone.ministryDepartment}</dd>
							</div>
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
					</article>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.preview-shell {
		position: relative;
		overflow: hidden;
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-lg);
		background:
			radial-gradient(circle at top right, rgba(200, 168, 124, 0.16), transparent 34%),
			linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 40%),
			var(--color-bg-card);
		padding: clamp(1.5rem, 3vw, 2.5rem);
		box-shadow: var(--shadow-md);
	}

	.preview-card {
		height: 100%;
		border: 1px solid var(--color-border-light);
		border-left: 4px solid var(--milestone-accent);
		border-radius: var(--radius-md);
		background:
			linear-gradient(135deg, var(--milestone-surface), transparent 55%),
			var(--color-bg-card);
		padding: 1.25rem;
		box-shadow: var(--shadow-sm);
	}

	.preview-card__header {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.preview-card__icon {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 999px;
		background: var(--milestone-accent);
		color: white;
		box-shadow: 0 12px 24px color-mix(in srgb, var(--milestone-accent) 35%, transparent);
	}

	.preview-card__icon :global(svg) {
		width: 1.65rem;
		height: 1.65rem;
	}

	.preview-card__number {
		margin-bottom: 0.25rem;
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--milestone-accent);
	}

	.preview-card__details {
		display: grid;
		gap: 0.8rem;
	}

	.preview-card__details dt {
		margin-bottom: 0.25rem;
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-text-muted);
	}

	.preview-card__details dd {
		color: var(--color-heading);
		line-height: 1.6;
	}

	.preview-link {
		color: var(--color-primary);
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 0.22em;
	}

	.preview-link:hover {
		color: var(--color-accent);
	}

	@media (max-width: 767px) {
		.preview-card__header {
			align-items: flex-start;
		}
	}
</style>
