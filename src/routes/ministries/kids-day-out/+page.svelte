<script lang="ts">
	import { onMount } from 'svelte';

	const registerUrl = 'https://schools.procareconnect.com/register/e14a3225-928b-4d0a-a39c-69376116ac46';
	const ajaxEndpoint = 'https://fbcwimberley.com/wp-admin/admin-ajax.php';
	const kdoFormConfig = {
		action: 'elementor_pro_forms_send_form',
		postId: '3721',
		formId: '8f2a5f4',
		refererTitle: 'KIDS DAY OUT',
		queriedId: '3721',
		referrer: 'https://fbcwimberley.com/kids-day-out/'
	};

	const featureImages = [
		'/images/remote/fbcwimberley.com-1-1-78216c6fbe.webp',
		'/images/remote/fbcwimberley.com-2-1-7f004098ba.webp',
		'/images/remote/fbcwimberley.com-3-1-e4b6ede451.webp',
		'/images/remote/fbcwimberley.com-4-1-8dddaca65b.webp',
		'/images/remote/fbcwimberley.com-5-1-2922d89259.webp',
		'/images/remote/fbcwimberley.com-6-27a81a5c7f.webp',
		'/images/remote/fbcwimberley.com-7-8561f53ec6.webp',
		'/images/remote/fbcwimberley.com-8-d57f7ec52e.webp'
	];

	const staffLead = [
		{ name: 'Shelby Hubbard', role: 'Director', image: '/images/remote/fbcwimberley.com-Shelby-Hubbard-4bea81a076.webp' },
		{ name: 'Sarah Raquet', role: 'Assistant Director', image: '/images/remote/fbcwimberley.com-Sarah-Raquet-4b4c875c36.webp' }
	];

	const ageOneTeachers = [
		{ name: 'Evonne Dingman', image: '/images/remote/fbcwimberley.com-Evonne-Dingman-9eced58b45.webp' },
		{ name: 'Abigail Morehous', image: '/images/remote/fbcwimberley.com-Abigail-Morehous-2136d9df80.webp' },
		{ name: 'Brianna Pietrowski', image: '/images/remote/fbcwimberley.com-Brianna-Pietrowski-8fe2752759.webp' },
		{ name: 'Lisa Vrana', image: '/images/remote/fbcwimberley.com-Lisa-Vrana-4b4ac522de.webp' }
	];

	const ageTwoTeachers = [
		{ name: 'Shannon Atkins', image: '/images/remote/fbcwimberley.com-Shannon-Atkins-ae5256c66a.webp' },
		{ name: 'Jenna Dysart', image: '/images/remote/fbcwimberley.com-Jenna-Dysart-4333c767c9.webp' },
		{ name: 'Kristin Knipp', image: '/images/remote/fbcwimberley.com-Kristin-Knipp-9612a1fe67.webp' },
		{ name: 'Rebekah Presley', image: '/images/remote/fbcwimberley.com-Rebekah-Presley-3ef803f787.webp' }
	];

	const ageThreeTeachers = [
		{ name: 'Lauren Badillo', image: '/images/remote/fbcwimberley.com-Lauren-Badillo-ce17e801f4.webp' },
		{ name: 'Joyce Hurt', image: '/images/remote/fbcwimberley.com-Joyce-Hurt-75848d562d.webp' },
		{ name: 'Michelle Robinson', image: '/images/remote/fbcwimberley.com-Michelle-Robinson-23001d70cb.webp' }
	];

	const ageFourTeachers = [
		{ name: 'Barbara Scherff', image: '/images/remote/fbcwimberley.com-Barbara-Scherff-2026.jpg' },
		{ name: 'Caitlyn Scrogin', image: '/images/remote/fbcwimberley.com-Caitlyn-Scrogin-0861dd56dd.webp' }
	];

	const supportTeachers = [{ name: 'Sara Richart', image: '/images/remote/fbcwimberley.com-Sara-Richart-b6723d1ecd.webp' }];

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitting = $state(false);
	let submitted = $state(false);
	let submitError = $state('');

	let videoLoaded = $state(false);

	onMount(() => {
		const id = setTimeout(() => {
			videoLoaded = true;
		}, 800);
		return () => clearTimeout(id);
	});

	async function handleContactSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (submitting) return;

		submitError = '';
		submitting = true;

		const formData = new FormData();
		formData.append('post_id', kdoFormConfig.postId);
		formData.append('form_id', kdoFormConfig.formId);
		formData.append('referer_title', kdoFormConfig.refererTitle);
		formData.append('queried_id', kdoFormConfig.queriedId);
		formData.append('form_fields[name]', name);
		formData.append('form_fields[email]', email);
		formData.append('form_fields[message]', message);
		formData.append('action', kdoFormConfig.action);
		formData.append('referrer', kdoFormConfig.referrer);

		try {
			const response = await fetch(ajaxEndpoint, {
				method: 'POST',
				body: formData,
				mode: 'no-cors'
			});

			if (response.type === 'opaque' || response.ok) {
				submitted = true;
				setTimeout(() => {
					submitted = false;
					name = '';
					email = '';
					message = '';
				}, 3500);
			} else {
				submitError = 'We could not send your message. Please try again.';
			}
		} catch {
			submitError = 'We could not send your message. Please try again.';
		} finally {
			submitting = false;
		}
	}
</script>

<svelte:head>
	<title>KIDS DAY OUT - First Baptist Church Wimberley</title>
</svelte:head>

<section class="relative min-h-screen overflow-hidden">
	<div class="absolute inset-0">
		<img
			src="/images/remote/fbcwimberley.com-1-1-78216c6fbe.webp"
			alt=""
			aria-hidden="true"
			fetchpriority="high"
			class="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
			class:opacity-0={videoLoaded}
		/>
		{#if videoLoaded}
			<iframe
				title="KDO Website Header"
				src="https://www.youtube.com/embed/6JmqGqhaJnk?autoplay=1&mute=1&controls=0&loop=1&playlist=6JmqGqhaJnk&playsinline=1"
				allow="autoplay; encrypted-media; picture-in-picture"
				class="absolute inset-0 w-full h-full pointer-events-none scale-130"
			></iframe>
		{/if}
	</div>
	<div class="absolute inset-0 bg-[rgba(0,0,0,0.36)]"></div>
	<div class="relative z-1 min-h-screen container max-w-[1200px] flex items-end pb-18 md:pb-24">
		<div class="w-full lg:w-1/2 lg:ml-auto text-center lg:text-left px-6">
			<h1 class="text-[clamp(2.2rem,6vw,4.3rem)] text-white">KID&apos;S DAY OUT</h1>
		</div>
	</div>
</section>

<section class="py-16 md:py-20">
	<div class="container max-w-[980px] text-center">
		<h3 class="text-[clamp(1.2rem,2.4vw,1.7rem)] leading-[1.7] text-(--color-text) font-medium">
			Kid&rsquo;s Day Out is a Christian preschool focused on nurturing the whole child in a loving, faith-filled environment. We offer strong academic foundations, quality childcare, and small class sizes that allow for personalized attention. Our caring teachers create a safe, supportive space where children grow academically, socially, and spiritually.
		</h3>
	</div>
</section>

<section class="py-2">
	<div class="container max-w-[980px]">
		<img src="/images/remote/fbcwimberley.com-9-37c1e213ce.webp" alt="Kids Day Out highlight" loading="lazy" class="w-full h-auto object-cover rounded-[var(--radius-lg)]" />
	</div>
</section>

<section class="py-8 md:py-10">
	<div class="container max-w-[1100px]">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
			{#each featureImages as imageUrl}
				<img src={imageUrl} alt="Kids Day Out classroom" loading="lazy" class="w-full h-auto object-cover rounded-[var(--radius-lg)]" />
			{/each}
		</div>
	</div>
</section>

<section class="py-8">
	<div class="container text-center">
		<a href={registerUrl} target="_blank" rel="noopener noreferrer" class="btn btn-primary hover:btn-primary-hover">Register Now</a>
	</div>
</section>

<section class="py-12 md:py-16">
	<div class="container max-w-[1100px]">
		<div class="text-center mb-8">
			<h2 class="text-[clamp(1.7rem,4vw,2.6rem)]">Meet Our Staff</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
			{#each staffLead as person}
				<div class="text-center">
					<img src={person.image} alt={person.name} loading="lazy" class="w-full max-w-[420px] mx-auto h-auto object-cover rounded-[var(--radius-lg)]" />
					<p class="mt-3 text-(--color-text)"><strong>{person.name}</strong> - {person.role}</p>
				</div>
			{/each}
		</div>

		<div class="staff-group">
			<h3>1 Year Old Teachers</h3>
			<div class="staff-grid">
				{#each ageOneTeachers as person}
					<div class="staff-card">
						<img src={person.image} alt={person.name} loading="lazy" />
						<p><strong>{person.name}</strong></p>
					</div>
				{/each}
			</div>
		</div>

		<div class="staff-group">
			<h3>2 Year Old Teachers</h3>
			<div class="staff-grid">
				{#each ageTwoTeachers as person}
					<div class="staff-card">
						<img src={person.image} alt={person.name} loading="lazy" />
						<p><strong>{person.name}</strong></p>
					</div>
				{/each}
			</div>
		</div>

		<div class="staff-group">
			<h3>3 Year Old Teachers</h3>
			<div class="staff-grid">
				{#each ageThreeTeachers as person}
					<div class="staff-card">
						<img src={person.image} alt={person.name} loading="lazy" />
						<p><strong>{person.name}</strong></p>
					</div>
				{/each}
			</div>
		</div>

		<div class="staff-group">
			<h3>4 Year Old Teachers</h3>
			<div class="staff-grid">
				{#each ageFourTeachers as person}
					<div class="staff-card">
						<img src={person.image} alt={person.name} loading="lazy" />
						<p><strong>{person.name}</strong></p>
					</div>
				{/each}
			</div>
		</div>

		<div class="staff-group">
			<h3>Specials &amp; Support Teachers</h3>
			<div class="staff-grid">
				{#each supportTeachers as person}
					<div class="staff-card">
						<img src={person.image} alt={person.name} loading="lazy" />
						<p><strong>{person.name}</strong></p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="py-8">
	<div class="container text-center">
		<a href={registerUrl} target="_blank" rel="noopener noreferrer" class="btn btn-primary hover:btn-primary-hover">Register Now</a>
	</div>
</section>

<section class="py-16 border-t border-(--color-border-light)">
	<div class="container max-w-[900px] text-center">
		<h2 class="text-[clamp(1.6rem,4vw,2.3rem)] mb-4">Get In Touch!</h2>
		<p class="text-(--color-text-muted) leading-[1.8]">
			With questions about our program, to inquire about space in a classroom, or schedule a tour please reach out to
			<a href="mailto:Shelby@FBCWimberley.com" class="font-semibold">Shelby@FBCWimberley.com</a>
			or complete the contact form below.
		</p>
	</div>
</section>

<section class="py-0">
	<div class="container max-w-[900px]">
		<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-7 md:p-9">
			<form class="flex flex-col gap-4.5" onsubmit={handleContactSubmit}>
				{#if submitted}
					<div class="rounded-[var(--radius-md)] border border-(--color-success-border) bg-(--color-success-bg) text-(--color-success-text-on-light) p-4">
						Thanks for contacting us. We will reach out soon.
					</div>
				{:else}
					<div class="flex flex-col gap-1.5">
						<label for="kdo-name" class="text-[0.84rem] font-medium uppercase tracking-[0.06em] text-(--color-text-muted)">Name</label>
						<input id="kdo-name" type="text" bind:value={name} placeholder="Name" class="kdo-input" />
					</div>
					<div class="flex flex-col gap-1.5">
						<label for="kdo-email" class="text-[0.84rem] font-medium uppercase tracking-[0.06em] text-(--color-text-muted)">Email</label>
						<input id="kdo-email" type="email" bind:value={email} required placeholder="Email" class="kdo-input" />
					</div>
					<div class="flex flex-col gap-1.5">
						<label for="kdo-message" class="text-[0.84rem] font-medium uppercase tracking-[0.06em] text-(--color-text-muted)">Message</label>
						<textarea id="kdo-message" bind:value={message} rows="4" placeholder="Message" class="kdo-input resize-y min-h-[120px]"></textarea>
					</div>
					<div>
						<button type="submit" class="btn btn-primary hover:btn-primary-hover disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none" disabled={submitting}>
							{submitting ? 'Sending...' : 'Send'}
						</button>
					</div>
					{#if submitError}
						<p class="text-(--color-error-text-on-light) text-[0.9rem]">{submitError}</p>
					{/if}
				{/if}
			</form>
		</div>
	</div>
</section>

<section class="py-10 md:py-14">
	<div class="container text-center">
		<a href={registerUrl} target="_blank" rel="noopener noreferrer" class="btn btn-primary hover:btn-primary-hover">Register Now</a>
	</div>
</section>

<style>
	.kdo-input {
		width: 100%;
		padding: 0.78rem 0.95rem;
		border-radius: var(--radius-md);
		border: 1px solid var(--color-border);
		background: var(--color-bg-card);
		color: var(--color-text);
	}

	.kdo-input:focus {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 15%, transparent);
	}

	.staff-group {
		margin-top: 2.2rem;
	}

	.staff-group h3 {
		font-size: clamp(1.2rem, 2.4vw, 1.6rem);
		text-align: center;
		margin-bottom: 1.1rem;
	}

	.staff-grid {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1.25rem;
	}

	.staff-card {
		text-align: center;
	}

	.staff-card img {
		width: 100%;
		height: auto;
		object-fit: cover;
		border-radius: var(--radius-lg);
	}

	.staff-card p {
		margin-top: 0.65rem;
		color: var(--color-text);
	}

	@media (min-width: 640px) {
		.staff-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1024px) {
		.staff-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
