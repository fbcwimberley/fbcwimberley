<script lang="ts">
	import { pickFamilyMilestones } from '$lib/familyMilestones';
	import FamilyMilestonePreview from '$lib/ui/FamilyMilestonePreview.svelte';

	const studentMilestones = pickFamilyMilestones([4, 5, 6]);
</script>

<svelte:head>
	<title>Student Ministry - First Baptist Church Wimberley</title>
	<meta
		name="description"
		content="Student Ministry at FBC Wimberley helping 6th-12th graders build a faith of their own. Sundays 9:30AM and Wednesdays 6:15-8:00PM."
	/>
</svelte:head>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<div
		class="absolute inset-0 bg-cover bg-center"
		style="background-image: url('/images/remote/fbcwimberley.com-High-school-girls-camp-8cfba82b6b.webp')"
	></div>
	<div class="absolute inset-0 bg-(--color-kids-hero-overlay)"></div>
	<div class="relative z-1 text-center px-6">
		<p class="section-label text-white/85">Family Life</p>
		<h1 class="text-[clamp(2.4rem,6vw,4rem)] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.28)]">Student Ministry</h1>
	</div>
</section>

<section class="py-10 md:py-14 bg-(--color-kids-bg)">
	<div class="container max-w-none px-4 md:px-6">
		<div class="grid grid-cols-1">
			<div class="w-full max-w-[760px] mx-auto p-8 md:p-12 lg:p-16 flex flex-col justify-center text-center text-black dark:text-white bg-(--color-bg-alt) rounded-[var(--radius-lg)] border border-(--color-border-light) shadow-[0_16px_40px_rgba(0,0,0,0.14)]">
				<h2 class="text-[clamp(1.5rem,3vw,2.2rem)] mb-4">Helping 6th-12th graders build a faith of their own.</h2>
				<p class="leading-[1.75] mb-6">Many opportunities for students to grow in their faith and build Godly relationships with other students.</p>

				<p class="font-semibold mb-1">Sunday Morning - Student Building</p>
				<p class="mb-4">9:30 am</p>

				<p class="font-semibold mb-1">Wednesday</p>
				<p>6:15 - 8:00 pm</p>
			</div>
		</div>
	</div>
</section>

<FamilyMilestonePreview
	title="Student Ministry carries key Family Milestones"
	intro="Student Ministry supports families through Identity Formation, Passage to Adulthood, and Launch into the World."
	milestones={studentMilestones}
/>

<section class="py-16 md:py-20">
	<div class="container max-w-[1100px]">
		<h2 class="text-[clamp(1.7rem,3.3vw,2.5rem)] text-center mb-8">Check out how our students have been practicing discipleship!</h2>

		<div class="rounded-[var(--radius-lg)] overflow-hidden border border-(--color-border-light) mb-8">
			<div class="relative w-full pt-[56.25%]">
				<iframe
					title="FBCW Students on Mission 2025"
					src="https://www.youtube.com/embed/1okMb20wdP0"
					loading="lazy"
					allowfullscreen
					referrerpolicy="strict-origin-when-cross-origin"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					class="absolute inset-0 w-full h-full border-0"
				></iframe>
			</div>
		</div>

		<div class="h-[2px] w-full bg-(--color-accent)"></div>
	</div>
</section>

<section class="py-12 md:py-16">
	<div class="container max-w-[1280px] px-4 md:px-6">
		<div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
			<div class="lg:col-span-2 overflow-hidden rounded-[var(--radius-lg)] border border-(--color-border-light)">
				<img
					src="/images/remote/fbcwimberley.com-IMG_4772-e1601412891475-ebf5d42605.webp"
					alt="High school students worshipping together"
					loading="lazy"
					class="w-full h-full max-h-[720px] object-cover"
				/>
			</div>
			<div class="overflow-hidden rounded-[var(--radius-lg)] border border-(--color-border-light)">
				<img
					src="/images/remote/fbcwimberley.com-Jr-Hight-girls-dc482c7b18.webp"
					alt="Junior High students together"
					loading="lazy"
					class="w-full h-full min-h-[320px] object-cover"
				/>
			</div>
			<div class="overflow-hidden rounded-[var(--radius-lg)] border border-(--color-border-light)">
				<img
					src="/images/remote/fbcwimberley.com-Jr-high-camp-7af3aaa3a4.webp"
					alt="Junior High students at camp"
					loading="lazy"
					class="w-full h-full min-h-[320px] object-cover"
				/>
			</div>
		</div>
	</div>
</section>
