<script lang="ts">
	import Alert from '$lib/ui/Alert.svelte';
	import Button from '$lib/ui/Button.svelte';
	import Card from '$lib/ui/Card.svelte';

	const admissionChecklist = [
		'Immunization records or exemption (exemptions are good for 2 years)',
		"Healthcare professional statement from your child's pediatrician (new students only)",
		'Hearing/vision screening (4 year olds only)'
	];

	const importantDates = [
		{
			title: 'Meet the Teacher Night',
			detail: 'Tuesday, August 11 from 5:30-7:00 PM',
			description: "Come and go event for meeting your child's teacher and getting comfortable in the classroom."
		},
		{
			title: 'First Day of School',
			detail: 'Tuesday, August 18',
			description: 'August tuition is prorated for August 18-27, and the first semester supply fee is also due in August.'
		}
	];

	const pendingResources = [
		{
			title: 'Parent Handbook',
			description:
				'Review all KDO policies and procedures before completing admission paperwork. Final link still pending from Shelby.'
		},
		{
			title: 'Admission Form',
			description:
				'Complete after gathering the required uploads below. Final form link still pending from Shelby.'
		},
		{
			title: 'Parent Questionnaire',
			description:
				'Submit one questionnaire per enrolled child so KDO can build class lists. Final form link still pending from Shelby.'
		}
	];

	const pendingMedia = [
		'Welcome video from Shelby',
		'Back to School Needs graphic',
		'Sample Schedule graphic',
		'Save the Date graphic'
	];
</script>

<svelte:head>
	<title>KDO Back to School - First Baptist Church Wimberley</title>
	<meta
		name="description"
		content="Hidden direct-link back-to-school information page for First Baptist Church Wimberley Kids Day Out families."
	/>
</svelte:head>

<section class="hero-shell">
	<div class="hero-overlay"></div>
	<div class="container hero-content">
		<p class="eyebrow">Kids Day Out</p>
		<h1>KDO Back to School</h1>
		<p class="hero-copy">
			We are so excited to have you and your family be part of KDO for the 2026-2027
			school year. This direct-link page gathers the confirmed back-to-school information
			Shelby shared while the final forms, graphics, and welcome video are still being
			wrapped up.
		</p>
		<div class="hero-actions">
			<Button href="mailto:shelby@fbcwimberley.com" variant="accent">Email Shelby</Button>
			<Button href="/ministries/kids-day-out" variant="outline-dark">Visit KDO Page</Button>
		</div>
	</div>
</section>

<section class="content-shell">
	<div class="container content-grid">
		<div class="main-stack">
			<Alert type="error">
				<strong>Blocked for final launch:</strong> Parent Handbook link, Admission Form
				link, Parent Questionnaire link, welcome video, and approved graphics are still
				pending from Shelby. This page intentionally avoids fake links and placeholder
				downloads.
			</Alert>

			<Card class="section-card intro-card">
				<p class="section-label">Start Here</p>
				<h2>What to do before school starts</h2>
				<p>
					Review the handbook, complete the admission form, complete the parent
					questionnaire, and watch for your Procare setup email. KDO also asks families to
					look over the daily schedule and potty-training expectations before August.
				</p>
			</Card>

			<section class="section-block">
				<div class="section-heading">
					<p class="section-label">Forms</p>
					<h2>Required paperwork</h2>
					<p>
						Shelby confirmed these resources will live on this page. The descriptions below
						reflect finalized source copy, but the links themselves are still pending.
					</p>
				</div>

				<div class="resource-grid">
					{#each pendingResources as resource}
						<Card class="section-card resource-card">
							<h3>{resource.title}</h3>
							<p>{resource.description}</p>
							<button type="button" class="pending-button" disabled>
								Link Coming Soon
							</button>
						</Card>
					{/each}
				</div>
			</section>

			<section class="section-block">
				<div class="section-heading">
					<p class="section-label">Admission Form</p>
					<h2>Gather these uploads first</h2>
					<p>
						Before starting the Admission Form, ensure you have the items below ready to
						upload.
					</p>
				</div>

				<Card class="section-card checklist-card">
					<ol>
						{#each admissionChecklist as item}
							<li>{item}</li>
						{/each}
					</ol>
				</Card>
			</section>

			<section class="section-block">
				<div class="section-heading">
					<p class="section-label">Transition Help</p>
					<h2>Schedules and potty training</h2>
					<p>
						KDO wants families to know transitions can be hard for children, so the team is
						being upfront about daily routines and expectations.
					</p>
				</div>

				<div class="two-up">
					<Card class="section-card">
						<h3>Daily schedule</h3>
						<p>
							Please look over the sample schedule when it is posted and see how you can
							help make the transition smoother, whether that means adjusting nap times,
							meal times, or both.
						</p>
						<p class="pending-note">Sample schedule graphic still pending.</p>
					</Card>

					<Card class="section-card">
						<h3>Potty training expectation</h3>
						<p>
							Children must be potty trained to enter the 3 year old class in August.
							Fully potty trained means they can communicate their potty needs to an
							adult, independently use the restroom, clean themselves, and pull their
							pants on.
						</p>
						<p>
							A child having one or more accidents a week is not considered potty trained.
						</p>
					</Card>
				</div>
			</section>

			<section class="section-block">
				<div class="section-heading">
					<p class="section-label">Billing</p>
					<h2>Tuition and withdrawal details</h2>
				</div>

				<div class="two-up">
					<Card class="section-card">
						<h3>August tuition</h3>
						<p>
							August tuition will be prorated to reflect the two weeks of care from
							August 18-27. The first semester supply fee is also due in August.
						</p>
						<p>
							You will receive an invoice via Procare later in August, and these
							payments are due by the first day of school on August 18.
						</p>
						<p>
							You may set up online payments through Procare or pay by cash or check.
						</p>
					</Card>

					<Card class="section-card">
						<h3>August withdrawal policy</h3>
						<p>
							Families who withdraw their child on or after August 1 will be responsible
							for 50% of the August tuition.
						</p>
						<p>
							If you are on the fence about your child starting school in August, please
							reach out sooner rather than later.
						</p>
					</Card>
				</div>
			</section>
		</div>

		<aside class="sidebar-stack">
			<Card class="section-card sidebar-card">
				<p class="section-label">Important Dates</p>
				<h2>Mark your calendar</h2>
				<div class="date-stack">
					{#each importantDates as item}
						<div class="date-item">
							<h3>{item.title}</h3>
							<p class="date-detail">{item.detail}</p>
							<p>{item.description}</p>
						</div>
					{/each}
				</div>
			</Card>

			<Card class="section-card sidebar-card">
				<p class="section-label">Procare</p>
				<h2>Account setup is coming by email</h2>
				<p>
					Procare is used to communicate with parents, pay tuition, and more. You will
					soon receive an email from Procare with details on how to create an account and
					sync your child&apos;s profile.
				</p>
				<p>
					If you have any issues creating your account, please contact Shelby directly.
				</p>
			</Card>

			<Card class="section-card sidebar-card media-card">
				<p class="section-label">Pending Media</p>
				<h2>Still to be added</h2>
				<ul>
					{#each pendingMedia as item}
						<li>{item}</li>
					{/each}
				</ul>
			</Card>

			<Card class="section-card sidebar-card">
				<p class="section-label">Questions?</p>
				<h2>Reach out anytime</h2>
				<p>
					If you have questions about any of the information above, please email Shelby.
				</p>
				<Button href="mailto:shelby@fbcwimberley.com" variant="primary">shelby@fbcwimberley.com</Button>
			</Card>
		</aside>
	</div>
</section>

<style>
	.hero-shell {
		position: relative;
		padding: 10rem 0 5rem;
		background:
			radial-gradient(circle at top left, rgba(212, 163, 106, 0.24), transparent 34%),
			linear-gradient(135deg, #1f3755 0%, #2b5f7c 48%, #18314a 100%);
		color: #fff;
		overflow: hidden;
	}

	.hero-overlay {
		position: absolute;
		inset: 0;
		background:
			linear-gradient(180deg, rgba(8, 16, 26, 0.08) 0%, rgba(8, 16, 26, 0.48) 100%),
			repeating-linear-gradient(
				135deg,
				rgba(255, 255, 255, 0.05) 0,
				rgba(255, 255, 255, 0.05) 1px,
				transparent 1px,
				transparent 18px
			);
	}

	.hero-content {
		position: relative;
		z-index: 1;
		max-width: 860px;
	}

	.eyebrow,
	.section-label {
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.15em;
		color: var(--color-accent);
		margin-bottom: 0.9rem;
	}

	h1 {
		font-size: clamp(2.8rem, 6vw, 5rem);
		line-height: 0.98;
		margin: 0 0 1.35rem;
		color: #fff;
	}

	h2 {
		font-size: clamp(1.8rem, 3vw, 2.6rem);
		line-height: 1.08;
		margin: 0 0 0.9rem;
		color: var(--color-heading);
	}

	h3 {
		font-size: 1.2rem;
		margin: 0 0 0.7rem;
		color: var(--color-heading);
	}

	p,
	li {
		line-height: 1.7;
		color: var(--color-text-muted);
	}

	.hero-copy {
		max-width: 720px;
		font-size: 1.08rem;
		color: rgba(255, 255, 255, 0.85);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.9rem;
		margin-top: 1.8rem;
	}

	.content-shell {
		padding: 3rem 0 5rem;
	}

	.content-grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: 1.5rem;
	}

	.main-stack,
	.sidebar-stack {
		display: grid;
		gap: 1.5rem;
	}

	.section-block {
		display: grid;
		gap: 1.2rem;
	}

	.section-heading p {
		max-width: 60ch;
	}

	:global(.section-card) {
		padding: 1.6rem;
		border: 1px solid var(--color-border-light);
		box-shadow: var(--shadow-sm);
	}

	.resource-grid,
	.two-up {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}

	.pending-button {
		margin-top: 1rem;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.9rem 1.2rem;
		border-radius: var(--radius-full);
		border: 1px dashed var(--color-border);
		background: var(--color-bg-alt);
		color: var(--color-text-muted);
		font-weight: 600;
		cursor: not-allowed;
	}

	:global(.checklist-card) ol {
		margin: 0;
		padding-left: 1.2rem;
		display: grid;
		gap: 0.7rem;
	}

	.pending-note {
		margin-top: 0.8rem;
		font-size: 0.95rem;
		color: var(--color-primary);
	}

	.date-stack {
		display: grid;
		gap: 1rem;
	}

	.date-item + .date-item {
		padding-top: 1rem;
		border-top: 1px solid var(--color-border-light);
	}

	.date-detail {
		font-weight: 600;
		color: var(--color-text);
		margin-bottom: 0.35rem;
	}

	:global(.media-card) ul {
		margin: 0;
		padding-left: 1.2rem;
		display: grid;
		gap: 0.55rem;
	}

	@media (min-width: 768px) {
		.resource-grid,
		.two-up {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.content-grid {
			grid-template-columns: minmax(0, 1.55fr) minmax(300px, 0.85fr);
			align-items: start;
		}

		.sidebar-stack {
			position: sticky;
			top: 7rem;
		}
	}
</style>
