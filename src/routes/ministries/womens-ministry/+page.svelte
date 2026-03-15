<script lang="ts">
	const ajaxEndpoint = 'https://fbcwimberley.com/wp-admin/admin-ajax.php';
	const womenFormConfig = {
		action: 'elementor_pro_forms_send_form',
		postId: '4102',
		formId: '933537a',
		refererTitle: "Women’s Ministry",
		queriedId: '4102',
		referrer: 'https://fbcwimberley.com/womens-ministry/'
	};

	const weeklyGroups = [
		{
			title: 'Sunday - On Campus',
			items: [
				'9:30am, Women Armed, Rm. 101, All Ages, Contact: Judy Brizendine, 512-913-0231',
				'11:00am, Rm. 108, All Ages, Contact: Ann McDorman, 817-991-4002, txam@live.com'
			]
		},
		{
			title: 'Monday - Off Campus',
			items: ['6:00pm, Galloway\'s Group, Contact: Janet Galloway, 512-940-8352, barknet12712@gmail.com']
		},
		{
			title: 'Tuesday - Off Campus',
			items: ['9:30am, Rm 103, Kovach\'s Group, Contact: Becky Kovach, 214-354-4605, kwoofranch@yahoo.com']
		}
	];

	const opportunities = [
		{
			title: 'Widows',
			details: 'Tuesday, 1:00pm in Student Bldg. Contact: Jeanne Worrell, 512-940-8321, jworrell18@gmail.com'
		},
		{
			title: 'His Hands & Feet',
			details:
				'Wednesday, 10:00am. Women fellowship together while they cook for people in need of a home-cooked meal. Contact: Pam Wood, 254-931-1871, woodjp@sbcglobal.net'
		},
		{
			title: 'Community Bible Study',
			details: 'Wednesday, 10:00am at First Christian Church, 3105 RR12, San Marcos. Register at sanmarcos.cbsclass.org. Children welcome.'
		},
		{
			title: 'Bible Study Fellowship',
			details: 'Thursday, 9:30am, Sanctuary. Contact: Marilee Mayhew, 512-753-6348. Register at joinbsf.com.'
		},
		{
			title: 'Creating for Christ',
			details:
				'Thursday, 10:00am in Student Bldg. Fellowship and craft ministry for the church family with Bible study. Contact: Kim Tomlin, 512-656-0973, kktomlin@hotmail.com'
		},
		{
			title: 'Precepts',
			details:
				'Wednesday, 2:00pm via Zoom or Thursday, 9:30am, Room 106. Contact: Loretta Robinson, 512-212-6104, lorettakayrobinson@gmail.com'
		},
		{
			title: 'Women on Mission',
			details:
				'Meets on the first Wednesday of each month in the Student Building. Contact: Barbara Stevens, 512-925-2213, mstev@austin.rr.com',
			href: 'https://fbcwimberley.churchcenter.com/groups/ministries-fbcw/women-on-mission'
		}
	];

	let name = $state('');
	let email = $state('');
	let message = $state('');
	let submitting = $state(false);
	let submitted = $state(false);
	let submitError = $state('');
	const showContactSection = false;

	async function handleContactSubmit(e: SubmitEvent) {
		e.preventDefault();
		if (submitting) return;

		submitError = '';
		submitting = true;

		const formData = new FormData();
		formData.append('post_id', womenFormConfig.postId);
		formData.append('form_id', womenFormConfig.formId);
		formData.append('referer_title', womenFormConfig.refererTitle);
		formData.append('queried_id', womenFormConfig.queriedId);
		formData.append('form_fields[name]', name);
		formData.append('form_fields[email]', email);
		formData.append('form_fields[message]', message);
		formData.append('action', womenFormConfig.action);
		formData.append('referrer', womenFormConfig.referrer);

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
	<title>Women's Ministry - First Baptist Church Wimberley</title>
</svelte:head>

<section class="relative min-h-[50vh] md:min-h-[56vh] flex items-end justify-center overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/remote/fbcwimberley.com-MG_6048-scaled-3ab2eebb7c.webp')"></div>
	<div class="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.72)] to-[rgba(0,0,0,0.28)]"></div>
	<div class="relative z-1 text-center pb-16 px-6">
		<p class="section-label">Ministries</p>
		<h1 class="text-[clamp(2.3rem,6vw,3.9rem)] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">Women's Ministry</h1>
		<p class="text-white/85 text-[1.02rem] max-w-[760px] mt-4">Knowing HIM &amp; making HIM be Known</p>
	</div>
</section>

<section class="py-20">
	<div class="container max-w-[920px] text-center">
		<p class="text-(--color-text-muted) text-[1.04rem] leading-[1.85] max-w-[840px] mx-auto mb-6">
			The Women's Ministry at First Baptist Church of Wimberley is a community of women striving to know Jesus and make Him be known by others. We'd love for you to join us! Check out our opportunities to get involved.
		</p>
		<blockquote class="mx-auto max-w-[760px] border-l-3 border-(--color-accent) pl-5 text-left font-serif italic text-[1.06rem] text-(--color-text-muted)">
			I made known to them your name, and I will continue to make it known, that the love with which you have loved me may be in them, and I in them.
			<cite class="block mt-2 text-[0.88rem] font-sans not-italic font-semibold text-(--color-accent)">John 17:26</cite>
		</blockquote>

		<div class="flex justify-center gap-3 mt-9">
			<a href="https://www.instagram.com/fbcwomen_at_first/" target="_blank" rel="noopener noreferrer" class="social-pill">Instagram</a>
			<a href="https://www.facebook.com/groups/fbcwomenatfirst" target="_blank" rel="noopener noreferrer" class="social-pill">Facebook</a>
			<a href="mailto:women@fbcwimberley.com" class="social-pill">Email</a>
		</div>
	</div>
</section>

<section class="py-20 bg-(--color-bg-alt)">
	<div class="container max-w-[1000px]">
		<div class="text-center mb-10">
			<p class="section-label">Women's Groups</p>
			<h2 class="text-[clamp(1.75rem,4vw,2.5rem)] mb-4">Weekly Group Options</h2>
			<p class="text-(--color-text-muted)">Looking for a way to get connected and grow in your faith? Groups are the perfect setting to be known and know others.</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
			{#each weeklyGroups as group}
				<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-6">
					<h3 class="text-[1.15rem] mb-3">{group.title}</h3>
					<ul class="space-y-3">
						{#each group.items as item}
							<li class="text-(--color-text-muted) text-[0.96rem] leading-[1.7]">{item}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>

		<p class="text-center text-(--color-text-muted) mt-8">Got other questions? Email us at <a href="mailto:women@fbcwimberley.com" class="font-semibold">women@fbcwimberley.com</a>.</p>
	</div>
</section>

<section class="py-20">
	<div class="container max-w-[1000px]">
		<div class="text-center mb-10">
			<p class="section-label">Opportunities</p>
			<h2 class="text-[clamp(1.75rem,4vw,2.5rem)] mb-4">Opportunities To Get Connected</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
			{#each opportunities as opportunity}
				<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-6">
					<h3 class="text-[1.15rem] mb-3">{opportunity.title}</h3>
					<p class="text-(--color-text-muted) leading-[1.75]">{opportunity.details}</p>
					{#if opportunity.href}
						<a href={opportunity.href} target="_blank" rel="noopener noreferrer" class="inline-flex mt-4 font-semibold">Register Here</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="relative py-24 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-center lg:bg-fixed" style="background-image: url('/images/remote/fbcwimberley.com-MG_6048-scaled-3ab2eebb7c.webp')">
		<div class="dark-overlay"></div>
	</div>
	<div class="container relative z-1 max-w-[860px] text-center">
		<p class="section-label">Support &amp; Events</p>
		<h2 class="text-[clamp(1.8rem,4vw,2.7rem)] text-white mb-4">Support and Service Groups</h2>
		<p class="text-white/80 text-[1.04rem] leading-[1.8] max-w-[760px] mx-auto mb-6">
			Life throws challenges at every woman. Sometimes it can feel exhausting to carry the burden alone. The support and service groups of FBCW Women's Ministry provide opportunities to connect with other women in times of need and to serve others in difficult seasons.
		</p>
		<p class="text-white/75 max-w-[740px] mx-auto mb-8">Whether it's conferences, coffee meetups, or service opportunities, there's always something going on for women at FBCW.</p>
		<a href="/events" class="btn btn-accent hover:btn-accent-hover">View Events</a>
	</div>
</section>

{#if showContactSection}
	<section class="py-20 bg-(--color-bg-alt)">
		<div class="container max-w-[900px]">
			<div class="text-center mb-9">
				<p class="section-label">Contact</p>
				<h2 class="text-[clamp(1.75rem,4vw,2.5rem)] mb-3">Got Questions? Find Out More.</h2>
			</div>

			<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-7 md:p-9">
				<form class="flex flex-col gap-4.5" onsubmit={handleContactSubmit}>
					{#if submitted}
						<div class="rounded-[var(--radius-md)] border border-(--color-success-border) bg-(--color-success-bg) text-(--color-success-text-on-light) p-4">
							Thanks for contacting us. We will reach out soon.
						</div>
					{:else}
						<div class="flex flex-col gap-1.5">
							<label for="women-name" class="text-[0.84rem] font-medium uppercase tracking-[0.06em] text-(--color-text-muted)">Name</label>
							<input id="women-name" type="text" bind:value={name} placeholder="Name" class="women-input" />
						</div>
						<div class="flex flex-col gap-1.5">
							<label for="women-email" class="text-[0.84rem] font-medium uppercase tracking-[0.06em] text-(--color-text-muted)">Email</label>
							<input id="women-email" type="email" bind:value={email} required placeholder="Email" class="women-input" />
						</div>
						<div class="flex flex-col gap-1.5">
							<label for="women-message" class="text-[0.84rem] font-medium uppercase tracking-[0.06em] text-(--color-text-muted)">Message</label>
							<textarea id="women-message" bind:value={message} rows="4" placeholder="Message" class="women-input resize-y min-h-[120px]"></textarea>
						</div>
						<div>
							<button type="submit" class="btn btn-primary hover:btn-primary-hover disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none" disabled={submitting}>
								{submitting ? 'Sending...' : 'Contact Us'}
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
{/if}

<style>
	.social-pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1rem;
		border-radius: var(--radius-full);
		border: 1px solid var(--color-border);
		background: var(--color-bg-card);
		color: var(--color-text-muted);
		font-size: 0.9rem;
		transition: all 200ms ease;
	}

	.social-pill:hover {
		color: var(--color-primary);
		border-color: var(--color-primary);
		transform: translateY(-1px);
	}

	.women-input {
		width: 100%;
		min-width: 0;
		padding: 0.8rem 0.95rem;
		border: 1px solid var(--color-input-border);
		border-radius: var(--radius-sm);
		background: var(--color-input-bg);
		color: var(--color-text);
		font-size: 1rem;
		transition: all 200ms ease;
		appearance: none;
	}

	.women-input:focus {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 16%, transparent);
	}
</style>
