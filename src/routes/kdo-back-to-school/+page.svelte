<script lang="ts">
	type InfoBlock = {
		label: string;
		title: string;
		body: string[];
		action?: {
			href: string;
			text: string;
		};
		dates?: {
			label: string;
			value: string;
			detail: string;
		}[];
	};

	const videoSrc = '/videos/kdo-back-to-school-welcome.mp4';
	const scheduleHref = '/documents/kdo-back-to-school/sample-2-year-schedule.pdf';

	const actionLinks = {
		handbook: 'https://drive.google.com/file/d/1Jf3lEhVdBXKrSs0SXjjSUNf_pFul0NM9/view?usp=sharing',
		admission:
			'https://www.cognitoforms.com/FirstBaptistChurchWimberley/AdmissionPaperwork20262027',
		questionnaire: 'https://forms.gle/52c9UscFf9J3oxtT9'
	};

	const paperworkSteps = [
		{
			number: '1',
			title: 'Review the Parent Handbook',
			body: 'The Parent Handbook has all policies and procedures outlined. It is important to read and understand as you will acknowledge your agreement to the handbook in the following Admission Form.',
			href: actionLinks.handbook,
			buttonText: 'Parent Handbook'
		},
		{
			number: '2',
			title: 'Please Complete the Admission Form',
			body: 'Before starting, ensure you have the following to upload to the form.',
			href: actionLinks.admission,
			buttonText: 'Admission Form',
			items: [
				'Immunization Records or Exemption (Exemptions are good for 2 years)',
				"Healthcare Professional Statement from your child's pediatrician (NEW STUDENTS ONLY)",
				'Hearing/Vision Screening (4 YEAR OLDS ONLY)'
			]
		},
		{
			number: '3',
			title: 'Please Complete the Parent Questionnaire',
			body: 'We value getting to know you and your child better before the school year starts. Please take a few minutes to answer some questions about your child. This questionnaire will help us make class lists for the upcoming school year.',
			note: 'If you have more than one child enrolled in the program, please complete a questionnaire for both children.',
			href: actionLinks.questionnaire,
			buttonText: 'Parent Questionnaire'
		}
	];

	const startHereItems = [
		'Watch the welcome video',
		'Review the Parent Handbook',
		'Complete the Admission Form',
		'Complete the Parent Questionnaire'
	];

	const infoBlocks: InfoBlock[] = [
		{
			label: 'Procare',
			title: 'Procare',
			body: [
				"Procare is an app used to communicate with parents, pay tuition, and more. You will soon receive an email from Procare with details on how to create an account and sync your child's profile.",
				'If you have any issues creating an account, please let us know.'
			]
		},
		{
			label: 'Transitions',
			title: 'Transitions, Schedules, & Potty Training',
			body: [
				"We know that transitions are hard for children, so we want to be open about our daily schedule and routines here at Kid's Day Out. Please look over the schedule and see how you can help make the transition smoother. It may be by adjusting your child's nap or meal times.",
				'Children must be potty trained to enter our 3 year old class in August. Fully potty trained means that they can communicate their potty needs to an adult, independently use the restroom, clean themselves, and pull their pants on. A child having 1 or more accidents a week is not potty trained.'
			],
			action: {
				href: scheduleHref,
				text: 'View Sample Schedule'
			}
		},
		{
			label: 'Dates',
			title: 'Save the Date!',
			body: [
				"Meet the Teacher Night is on Tue, Aug 11th from 5:30-7:00pm. This is a come and go event that is designed to meet your child's teacher while giving your child an opportunity to get a feel for the classroom.",
				'The First Day of School is on Tue, Aug 18th.'
			],
			dates: [
				{
					label: 'Meet the Teacher',
					value: 'Tue, Aug 11',
					detail: '5:30-7:00pm'
				},
				{
					label: 'First Day of School',
					value: 'Tue, Aug 18',
					detail: 'Welcome back to KDO'
				}
			]
		},
		{
			label: 'Tuition',
			title: 'Tuition',
			body: [
				'The tuition for August will be prorated to reflect the two weeks of care from Aug 18-27. The first semester supply fee is also due in August.',
				'You will receive an invoice via Procare later in August and these payments are due by the first day of school, Aug 18. You may set up online payments through Procare or pay by cash or check.'
			]
		},
		{
			label: 'Policy',
			title: 'August Withdrawal Policy',
			body: [
				'In keeping with our commitment to faithful planning and stewardship, we begin preparing for the school year way in advance. Families who withdraw their child on or after August 1 will be responsible for 50% of the August tuition.',
				'If you are on the fence about your child starting school in August, please reach out sooner rather than later.'
			]
		}
	];
</script>

<svelte:head>
	<title>KDO Back to School - First Baptist Church Wimberley</title>
	<meta
		name="description"
		content="Hidden direct-link back-to-school information page for First Baptist Church Wimberley Kids Day Out families."
	/>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Fredoka:wght@500;600;700&family=Nunito:wght@500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<section class="kdo-page" aria-labelledby="kdo-title">
	<div class="paper-noise" aria-hidden="true"></div>
	<div class="page-shell">
		<header class="hero">
			<div class="hero-copy">
				<img
					class="kdo-logo"
					src="/images/kdo-back-to-school/kdo-logo.png"
					alt="Kid's Day Out, First Baptist Church Wimberley"
				/>
				<p class="school-year">2026-2027 School Year</p>
				<h1 id="kdo-title">Back to School</h1>
				<p class="intro">
					We are so excited to have you and your family be a part of KDO for the 2026-2027 school
					year! Please watch the video below for important information that will help you complete
					the back to school paperwork.
				</p>
				<div class="hero-actions" aria-label="Primary paperwork links">
					<a href={actionLinks.handbook} target="_blank" rel="noreferrer">Parent Handbook</a>
					<a href={actionLinks.admission} target="_blank" rel="noreferrer">Admission Form</a>
					<a href={actionLinks.questionnaire} target="_blank" rel="noreferrer">Questionnaire</a>
				</div>
			</div>

			<div class="hero-card" aria-label="Back to school needs overview">
				<p class="card-kicker">Start Here</p>
				<ol class="needs-list">
					{#each startHereItems as item}
						<li>{item}</li>
					{/each}
				</ol>
			</div>
		</header>

		<section class="video-block" aria-labelledby="video-title">
			<div>
				<p class="section-kicker">Start Here</p>
				<h2 id="video-title">Watch the welcome video</h2>
			</div>
			<div class="video-frame">
				<!-- svelte-ignore a11y_media_has_caption (source video did not include captions) -->
				<video src={videoSrc} controls playsinline preload="metadata">
					<a href={videoSrc}>Watch the welcome video</a>
				</video>
			</div>
		</section>

		<section class="paperwork-section" aria-labelledby="paperwork-title">
			<div class="section-heading">
				<p class="section-kicker">Step by Step</p>
				<h2 id="paperwork-title">Complete these three items first</h2>
			</div>

			<div class="step-stack">
				{#each paperworkSteps as step}
					<article class="kdo-box step-box">
						<div class="number-dot" aria-hidden="true">{step.number}</div>
						<div>
							<h3>{step.title}</h3>
							<p>{step.body}</p>
							{#if step.items}
								<ul>
									{#each step.items as item}
										<li>{item}</li>
									{/each}
								</ul>
							{/if}
							{#if step.note}
								<p class="note">{step.note}</p>
							{/if}
							<a class="button-link" href={step.href} target="_blank" rel="noreferrer">
								{step.buttonText}
							</a>
						</div>
					</article>
				{/each}
			</div>
		</section>

		<section class="info-grid" aria-label="KDO back to school details">
			{#each infoBlocks as block}
				<article class="kdo-box info-box">
					<p class="mini-label">{block.label}</p>
					<h2>{block.title}</h2>
					{#each block.body as paragraph}
						<p>{paragraph}</p>
					{/each}
					{#if block.action}
						<a class="button-link" href={block.action.href} target="_blank" rel="noreferrer">
							{block.action.text}
						</a>
					{/if}
					{#if block.dates}
						<div class="date-panel" aria-label="Important KDO back to school dates">
							{#each block.dates as date}
								<div>
									<p class="date-label">{date.label}</p>
									<p class="date-value">{date.value}</p>
									<p class="date-detail">{date.detail}</p>
								</div>
							{/each}
						</div>
					{/if}
				</article>
			{/each}
		</section>

		<section class="questions-box" aria-labelledby="questions-title">
			<div>
				<p class="section-kicker">Questions?</p>
				<h2 id="questions-title">Reach out to Shelby</h2>
				<p>If you have any questions regarding any of the above information, please reach out.</p>
			</div>
			<a href="mailto:Shelby@FBCWimberley.com">Shelby@FBCWimberley.com</a>
		</section>
	</div>
</section>

<style>
	:global(body) {
		background: oklch(90% 0.006 230);
	}

	:global(body:has(.kdo-page) .header:not(.scrolled)) {
		background: oklch(96% 0.007 225 / 0.82);
		backdrop-filter: blur(14px);
	}

	:global(body:has(.kdo-page) .header:not(.scrolled) .logo-light) {
		display: block;
	}

	:global(body:has(.kdo-page) .header:not(.scrolled) .logo-dark) {
		display: none;
	}

	:global(body:has(.kdo-page) .header:not(.scrolled) .nav-item),
	:global(body:has(.kdo-page) .header:not(.scrolled) .mobile-toggle) {
		color: var(--kdo-ink);
	}

	.kdo-page {
		--kdo-cyan: oklch(69% 0.15 219);
		--kdo-cyan-deep: oklch(52% 0.13 222);
		--kdo-yellow: oklch(82% 0.16 83);
		--kdo-paper: oklch(88% 0.007 230);
		--kdo-paper-light: oklch(96% 0.007 225);
		--kdo-ink: oklch(19% 0.018 235);
		--kdo-muted: oklch(39% 0.014 235);
		--kdo-border: oklch(50% 0.008 235);
		--kdo-white: oklch(98% 0.004 225);
		--kdo-radius: clamp(2rem, 5vw, 4rem);
		position: relative;
		isolation: isolate;
		min-height: 100vh;
		padding: clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem) clamp(4rem, 8vw, 7rem);
		overflow: hidden;
		background:
			radial-gradient(circle at 9% 8%, oklch(82% 0.16 83 / 0.46), transparent 13rem),
			radial-gradient(circle at 96% 4%, oklch(69% 0.15 219 / 0.22), transparent 18rem),
			linear-gradient(180deg, var(--kdo-paper-light) 0%, var(--kdo-paper) 100%);
		color: var(--kdo-ink);
		font-family: 'Nunito', system-ui, sans-serif;
	}

	.paper-noise {
		position: absolute;
		inset: 0;
		z-index: -1;
		opacity: 0.42;
		background-image:
			linear-gradient(oklch(19% 0.018 235 / 0.05) 1px, transparent 1px),
			linear-gradient(90deg, oklch(19% 0.018 235 / 0.04) 1px, transparent 1px);
		background-size: 42px 42px;
		mask-image: linear-gradient(
			180deg,
			transparent,
			oklch(0% 0 0) 10%,
			oklch(0% 0 0) 88%,
			transparent
		);
	}

	.page-shell {
		width: min(1180px, 100%);
		margin: 0 auto;
	}

	.hero {
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		gap: clamp(2rem, 4vw, 4rem);
		align-items: center;
		min-height: min(760px, calc(100vh - 8rem));
	}

	.hero-copy {
		position: relative;
	}

	.hero-copy::after {
		content: '';
		position: absolute;
		right: clamp(0rem, 6vw, 5rem);
		bottom: -2rem;
		width: clamp(4rem, 10vw, 8rem);
		aspect-ratio: 1;
		border-radius: 44% 56% 54% 46%;
		background: var(--kdo-yellow);
		transform: rotate(-17deg);
		z-index: -1;
	}

	.kdo-logo {
		width: min(430px, 86vw);
		margin-bottom: clamp(1.25rem, 3vw, 2.5rem);
		filter: drop-shadow(0 1rem 1.8rem oklch(19% 0.018 235 / 0.12));
	}

	.school-year,
	.section-kicker,
	.mini-label {
		margin: 0 0 0.7rem;
		color: var(--kdo-cyan-deep);
		font-family: 'Fredoka', system-ui, sans-serif;
		font-size: 0.85rem;
		font-weight: 700;
		letter-spacing: 0.09em;
		text-transform: uppercase;
	}

	h1,
	h2,
	h3,
	p {
		margin-top: 0;
	}

	h1,
	h2,
	h3 {
		font-family: 'Fredoka', system-ui, sans-serif;
		color: var(--kdo-ink);
		letter-spacing: 0;
	}

	h1 {
		max-width: 9ch;
		margin-bottom: 1.2rem;
		font-size: clamp(4.2rem, 13vw, 9.5rem);
		line-height: 0.82;
		color: var(--kdo-cyan);
		text-shadow: 0.06em 0.06em 0 var(--kdo-yellow);
	}

	h2 {
		font-size: clamp(2rem, 5vw, 4rem);
		line-height: 0.95;
	}

	h3 {
		margin-bottom: 0.85rem;
		font-size: clamp(1.55rem, 3vw, 2.35rem);
		line-height: 1.02;
		text-decoration: underline;
		text-decoration-thickness: 0.08em;
		text-underline-offset: 0.13em;
	}

	p,
	li {
		font-size: clamp(1rem, 1.6vw, 1.18rem);
		line-height: 1.55;
		color: var(--kdo-muted);
	}

	.intro {
		max-width: 66ch;
		margin-bottom: 1.5rem;
		font-size: clamp(1.1rem, 1.7vw, 1.35rem);
		font-weight: 800;
		color: var(--kdo-ink);
	}

	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
	}

	.hero-actions a,
	.button-link,
	.questions-box a {
		display: inline-flex;
		width: fit-content;
		align-items: center;
		justify-content: center;
		border: 0.18rem solid var(--kdo-border);
		border-radius: 999px;
		background: var(--kdo-yellow);
		box-shadow: 0 0.42rem 0 var(--kdo-border);
		color: var(--kdo-ink);
		font-family: 'Fredoka', system-ui, sans-serif;
		font-weight: 700;
		line-height: 1;
		text-decoration: none;
		transition:
			transform 180ms cubic-bezier(0.22, 1, 0.36, 1),
			box-shadow 180ms cubic-bezier(0.22, 1, 0.36, 1);
	}

	.hero-actions a,
	.button-link {
		padding: 0.9rem 1.1rem;
	}

	.hero-actions a:hover,
	.button-link:hover,
	.questions-box a:hover {
		transform: translateY(0.18rem);
		box-shadow: 0 0.24rem 0 var(--kdo-border);
	}

	.hero-card {
		justify-self: center;
		width: min(420px, 100%);
		border: 0.42rem solid var(--kdo-border);
		border-radius: var(--kdo-radius);
		background:
			radial-gradient(circle at 88% 12%, var(--kdo-yellow) 0 3.8rem, transparent 3.9rem),
			linear-gradient(145deg, var(--kdo-white), oklch(93% 0.014 220));
		padding: clamp(1.4rem, 4vw, 2.4rem);
		box-shadow: 0 0.8rem 0 oklch(50% 0.008 235 / 0.45);
		transform: rotate(2.5deg);
	}

	.card-kicker {
		margin: 0 0 1.1rem;
		color: var(--kdo-cyan-deep);
		font-family: 'Fredoka', system-ui, sans-serif;
		font-size: clamp(1.35rem, 3vw, 2rem);
		font-weight: 800;
		line-height: 1;
	}

	.needs-list {
		display: grid;
		gap: 0.85rem;
		margin: 0;
		padding: 0;
		counter-reset: needs;
		list-style: none;
	}

	.needs-list li {
		display: grid;
		grid-template-columns: 2.4rem minmax(0, 1fr);
		gap: 0.75rem;
		align-items: center;
		color: var(--kdo-ink);
		font-family: 'Fredoka', system-ui, sans-serif;
		font-size: clamp(1.15rem, 2.4vw, 1.6rem);
		font-weight: 700;
		line-height: 1.1;
		counter-increment: needs;
	}

	.needs-list li::before {
		content: counter(needs);
		display: grid;
		aspect-ratio: 1;
		place-items: center;
		border: 0.16rem solid var(--kdo-border);
		border-radius: 999px;
		background: var(--kdo-cyan);
		color: var(--kdo-white);
		box-shadow: 0 0.2rem 0 var(--kdo-border);
	}

	.video-block,
	.paperwork-section,
	.questions-box {
		margin-top: clamp(3rem, 7vw, 6rem);
	}

	.video-block {
		display: grid;
		gap: 1.4rem;
	}

	.video-frame {
		overflow: hidden;
		border: 0.55rem solid var(--kdo-border);
		border-radius: var(--kdo-radius);
		background: var(--kdo-cyan);
		box-shadow: 0 1rem 0 oklch(50% 0.008 235 / 0.35);
	}

	.video-frame video {
		display: block;
		width: 100%;
		aspect-ratio: 16 / 9;
		border: 0;
		background: oklch(17% 0.018 235);
		object-fit: contain;
	}

	.section-heading {
		max-width: 760px;
		margin-bottom: clamp(1.4rem, 3vw, 2.5rem);
	}

	.step-stack,
	.info-grid {
		display: grid;
		gap: clamp(1rem, 2.2vw, 1.6rem);
	}

	.kdo-box {
		border: 0.42rem solid var(--kdo-border);
		border-radius: var(--kdo-radius);
		background: var(--kdo-cyan);
		box-shadow: 0 0.8rem 0 oklch(50% 0.008 235 / 0.55);
		color: var(--kdo-white);
	}

	.kdo-box p,
	.kdo-box li,
	.kdo-box h2,
	.kdo-box h3 {
		color: var(--kdo-white);
	}

	.step-box {
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		gap: clamp(1rem, 2.5vw, 2rem);
		align-items: start;
		padding: clamp(1.25rem, 4vw, 3rem);
	}

	.number-dot {
		display: grid;
		width: clamp(3.7rem, 8vw, 5.7rem);
		aspect-ratio: 1;
		place-items: center;
		border-radius: 999px;
		background: var(--kdo-paper);
		color: var(--kdo-cyan);
		font-family: 'Fredoka', system-ui, sans-serif;
		font-size: clamp(2rem, 5vw, 3.2rem);
		font-weight: 700;
		line-height: 1;
	}

	.step-box ul {
		margin: 1rem 0 0;
		padding-left: 1.25rem;
	}

	.note {
		margin-top: 1.3rem;
		font-style: italic;
	}

	.button-link {
		margin-top: 1.35rem;
	}

	.info-grid {
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 310px), 1fr));
		margin-top: clamp(3rem, 7vw, 6rem);
	}

	.info-box {
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	.info-box:nth-child(2n) {
		background: var(--kdo-yellow);
	}

	.info-box:nth-child(2n) p,
	.info-box:nth-child(2n) h2 {
		color: var(--kdo-ink);
	}

	.info-box:nth-child(2n) .mini-label {
		color: var(--kdo-cyan-deep);
	}

	.info-box h2 {
		margin-bottom: 1rem;
		font-size: clamp(2rem, 3.5vw, 3rem);
	}

	.mini-label {
		color: oklch(98% 0.004 225 / 0.88);
	}

	.date-panel {
		display: grid;
		gap: 0.8rem;
		margin-top: 1.35rem;
	}

	.date-panel > div {
		border: 0.18rem solid var(--kdo-border);
		border-radius: 1.2rem;
		background: oklch(98% 0.004 225 / 0.24);
		padding: 1rem;
	}

	.info-box:nth-child(2n) .date-panel > div {
		background: oklch(98% 0.004 225 / 0.5);
	}

	.date-label,
	.date-value,
	.date-detail {
		margin: 0;
	}

	.date-label {
		font-family: 'Fredoka', system-ui, sans-serif;
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.date-value {
		font-family: 'Fredoka', system-ui, sans-serif;
		font-size: clamp(1.6rem, 4vw, 2.25rem);
		font-weight: 800;
		line-height: 1;
	}

	.date-detail {
		font-weight: 800;
	}

	.questions-box {
		display: grid;
		gap: 1.4rem;
		align-items: center;
		border: 0.42rem solid var(--kdo-border);
		border-radius: var(--kdo-radius);
		background: var(--kdo-white);
		padding: clamp(1.5rem, 4vw, 3rem);
		box-shadow: 0 0.8rem 0 oklch(50% 0.008 235 / 0.35);
	}

	.questions-box p {
		max-width: 58ch;
	}

	.questions-box a {
		padding: 1rem 1.2rem;
	}

	@media (min-width: 880px) {
		.hero {
			grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.75fr);
		}

		.questions-box {
			grid-template-columns: minmax(0, 1fr) auto;
		}
	}

	@media (max-width: 620px) {
		.kdo-page {
			padding-top: 1.2rem;
		}

		.step-box {
			grid-template-columns: 1fr;
		}

		.number-dot {
			width: 4rem;
		}

		.hero-actions a,
		.button-link,
		.questions-box a {
			width: 100%;
		}
	}
</style>
