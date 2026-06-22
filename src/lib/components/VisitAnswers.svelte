<script lang="ts">
	import { homepageQuestions, visitorActions } from '$lib/homepageContent';
	import { siteLastModified } from '$lib/seo';
	import Button from '$lib/ui/Button.svelte';

	const formattedDate = new Intl.DateTimeFormat('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric',
		timeZone: 'UTC'
	}).format(new Date(`${siteLastModified}T00:00:00Z`));
</script>

<section class="visit-answers">
	<div class="container">
		<div class="visit-intro">
			<p class="section-label">Plan Your Visit</p>
			<h2>First Baptist Church Wimberley exists to magnify Christ and share the gospel.</h2>
			<p>
				Join us in Wimberley, Texas for Sunday worship, find a group, discover ministries for your family, or take a clear next step with our team.
			</p>
			<div class="visit-actions">
				<Button href="/connect">Plan Your Visit</Button>
				<Button href="/watch" variant="outline-dark">Watch Online</Button>
			</div>
		</div>

		<div class="answer-grid" aria-label="Common visitor questions">
			{#each homepageQuestions as item}
				<article class="answer-card">
					<h3>{item.question}</h3>
					<p>{item.answer}</p>
				</article>
			{/each}
		</div>

		<div class="summary-table-wrap" aria-label="Visitor next step options">
			<table>
				<caption>Common next steps at First Baptist Church Wimberley</caption>
				<thead>
					<tr>
						<th scope="col">Next step</th>
						<th scope="col">Best for</th>
						<th scope="col">What to do</th>
					</tr>
				</thead>
				<tbody>
					{#each visitorActions as action}
						<tr>
							<th scope="row"><a href={action.href}>{action.action}</a></th>
							<td>{action.bestFor}</td>
							<td>{action.nextStep}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<p class="updated-date">Last updated {formattedDate}</p>
	</div>
</section>

<style>
	.visit-answers {
		padding: 5rem 0;
		background: var(--color-bg);
		color: var(--color-text);
	}

	.visit-intro {
		max-width: 780px;
		margin: 0 auto 2.5rem;
		text-align: center;
	}

	.visit-intro h2 {
		margin: 0 0 1rem;
		color: var(--color-heading);
		font-family: var(--font-serif);
		font-size: clamp(1.9rem, 4vw, 3rem);
		line-height: 1.12;
	}

	.visit-intro p:not(.section-label) {
		max-width: 680px;
		margin: 0 auto;
		color: var(--color-text-muted);
		font-size: 1.05rem;
		line-height: 1.7;
	}

	.visit-actions {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0.875rem;
		margin-top: 1.75rem;
	}

	.answer-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
		margin-bottom: 2rem;
	}

	.answer-card {
		padding: 1.5rem;
		background: var(--color-bg-card);
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-md);
		box-shadow: var(--shadow-sm);
	}

	.answer-card h3 {
		margin: 0 0 0.75rem;
		color: var(--color-heading);
		font-family: var(--font-serif);
		font-size: 1.25rem;
		line-height: 1.25;
	}

	.answer-card p {
		margin: 0;
		color: var(--color-text-muted);
		line-height: 1.65;
	}

	.summary-table-wrap {
		overflow-x: auto;
		border: 1px solid var(--color-border-light);
		border-radius: var(--radius-md);
		background: var(--color-bg-card);
		box-shadow: var(--shadow-sm);
	}

	table {
		width: 100%;
		min-width: 680px;
		border-collapse: collapse;
		text-align: left;
	}

	caption {
		padding: 1rem 1.25rem;
		color: var(--color-heading);
		font-weight: 700;
		text-align: left;
	}

	th,
	td {
		padding: 1rem 1.25rem;
		border-top: 1px solid var(--color-border-light);
		vertical-align: top;
	}

	thead th {
		color: var(--color-heading);
		background: var(--color-bg-alt);
		font-size: 0.82rem;
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}

	tbody th {
		color: var(--color-primary);
		font-weight: 700;
	}

	td {
		color: var(--color-text-muted);
		line-height: 1.55;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		color: var(--color-primary-hover);
		text-decoration: underline;
	}

	.updated-date {
		margin: 1rem 0 0;
		color: var(--color-text-muted);
		font-size: 0.82rem;
		text-align: right;
	}

	@media (min-width: 768px) {
		.answer-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
