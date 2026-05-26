<script lang="ts">
	import { pickFamilyMilestones } from '$lib/familyMilestones';
	import FamilyMilestonePreview from '$lib/ui/FamilyMilestonePreview.svelte';

	const elementaryMilestones = pickFamilyMilestones([2, 3]);
</script>

<svelte:head>
	<title>Elementary - First Baptist Church Wimberley</title>
	<meta name="description" content="252 Kids elementary ministry at FBC Wimberley for K–5th grade. Sunday mornings, Wednesday AWANA, and discipleship opportunities for every child." />
</svelte:head>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/remote/fbcwimberley.com-header_bg_6-5ad6a7f59f.webp')"></div>
	<div class="absolute inset-0 bg-(--color-kids-hero-overlay)"></div>
	<div class="relative z-1 text-center px-6">
		<p class="section-label text-white/85">Family Life</p>
		<h1 class="text-[clamp(2.4rem,6vw,4rem)] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.28)]">Elementary</h1>
	</div>
</section>

<section class="py-20">
	<div class="container max-w-[1100px]">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
			<div class="lg:col-span-5 rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-7 md:p-9">
				<h2 class="text-[clamp(1.5rem,3vw,2rem)] mb-4">252 Kids</h2>
				<p class="text-(--color-text-muted) leading-[1.78] mb-6">
					An environment designed with your elementary-aged student in mind. In our 252 Kids, kids will learn that we can trust God no matter what, we can make the wise choice, and we can treat others the way we want to be treated.
				</p>
				<div class="grid grid-cols-2 gap-4">
					<div>
						<p class="font-semibold text-(--color-heading)">Sundays</p>
						<p class="text-(--color-primary) mt-1">9:30 am</p>
						<p class="text-(--color-primary)">11:00 am</p>
					</div>
					<div>
						<p class="font-semibold text-(--color-heading)">Wednesdays</p>
						<p class="text-(--color-primary) mt-1">6:15 pm</p>
					</div>
				</div>
			</div>

			<div class="lg:col-span-7 rounded-[var(--radius-lg)] bg-(--color-kids-card-bg) border border-(--color-border-light) p-7 md:p-9 flex flex-col justify-center">
				<p class="text-[0.86rem] uppercase tracking-[0.1em] font-semibold text-(--color-kids-accent-text) mb-2">Kids At First</p>
				<h2 class="text-[clamp(1.45rem,2.6vw,2rem)] mb-5 text-(--color-heading)">Each week we have an opportunity to help kids experience Jesus on their level.</h2>
				<div>
					<a href="https://fbcwimberley.churchcenter.com/people/forms/40958" target="_blank" rel="noopener noreferrer" class="btn btn-primary hover:btn-primary-hover">Join Our Team</a>
				</div>
			</div>
		</div>
	</div>
</section>

<FamilyMilestonePreview
	title="Elementary families continue the Family Milestones pathway"
	intro="In Elementary, families keep building through Gospel Foundations and Preparing for Adolescence."
	milestones={elementaryMilestones}
/>

<section class="relative py-20 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-left-top" style="background-image: url('/images/remote/fbcwimberley.com-img-17-5101ecf5e9.webp')"></div>
	<div class="absolute inset-0 bg-white/75"></div>
	<div class="container relative z-1">
		<h2 class="text-[clamp(1.5rem,3.3vw,2.3rem)] max-w-[860px] text-black">I can trust God no matter what. I can make the wise choice. I can treat others the way I want to be treated.</h2>
	</div>
</section>

<section class="py-0">
	<div class="container max-w-none px-0">
		<div class="grid grid-cols-1 lg:grid-cols-12">
			<div class="lg:col-span-5 bg-(--color-kids-bg) p-8 md:p-12 lg:p-16 flex flex-col justify-center text-(--color-text)">
				<h3 class="text-[clamp(1.5rem,3vw,2.1rem)] mb-4">AWANA Club</h3>
				<p class="leading-[1.75] mb-6">AWANA Club is our memory-verse, missions focus night for children to connect with other kids and leaders. AWANA is open for kids 6 weeks through 5th grade. Join any Wednesday night during the school year.</p>
				<div class="mb-5">
					<a href="https://fbcwimberley.churchcenter.com/registrations/events/1879085" target="_blank" rel="noopener noreferrer" class="btn btn-accent hover:btn-accent-hover">Register For AWANA</a>
				</div>
				<p class="font-semibold mb-1">Wednesdays</p>
				<p>6:15 pm</p>
			</div>
			<div class="lg:col-span-7">
				<img src="/images/remote/fbcwimberley.com-baptism-kids-wimberley-ba79eca700.webp" alt="Elementary kids baptism" loading="lazy" class="w-full h-full min-h-[320px] object-cover" />
			</div>
		</div>
	</div>
</section>
