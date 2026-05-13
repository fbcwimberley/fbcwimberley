<script lang="ts">
	import { pickFamilyMilestones } from '$lib/familyMilestones';
	import FamilyMilestonePreview from '$lib/ui/FamilyMilestonePreview.svelte';

	const kidsMilestones = pickFamilyMilestones([1, 2, 3]);
</script>

<svelte:head>
	<title>Kids Ministry - First Baptist Church Wimberley</title>
	<meta
		name="description"
		content="Kids Ministry at FBC Wimberley for babies through 5th grade, including First Look preschool, 252 Kids elementary, AWANA, and Family Milestones."
	/>
</svelte:head>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/remote/fbcwimberley.com-header_bg_6-5ad6a7f59f.webp')"></div>
	<div class="absolute inset-0 bg-(--color-kids-hero-overlay)"></div>
	<div class="relative z-1 text-center px-6">
		<p class="section-label text-white/85">Family Life</p>
		<h1 class="text-[clamp(2.4rem,6vw,4rem)] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.28)]">Kids Ministry</h1>
	</div>
</section>

<section class="py-20">
	<div class="container max-w-[1100px]">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
			<div class="lg:col-span-5 rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-7 md:p-9">
				<p class="text-[0.86rem] uppercase tracking-[0.1em] font-semibold text-(--color-kids-accent-text) mb-2">First Look</p>
				<h2 class="text-[clamp(1.5rem,3vw,2rem)] mb-4">Preschool</h2>
				<p class="text-(--color-text-muted) leading-[1.78] mb-6">
					An environment designed with kids ages six weeks through Pre-K in mind. Teaching about God in a fun and engaging way. Your preschooler can plan on lots of singing, dancing, and learning every week.
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

			<div class="lg:col-span-7 rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-kids-card-bg) p-7 md:p-9">
				<p class="text-[0.86rem] uppercase tracking-[0.1em] font-semibold text-(--color-kids-accent-text) mb-2">252 Kids</p>
				<h2 class="text-[clamp(1.5rem,3vw,2rem)] mb-4">Elementary</h2>
				<p class="text-(--color-text-muted) leading-[1.78] mb-6">
					An environment designed with your elementary-aged student in mind. Kids learn that we can trust God no matter what, we can make the wise choice, and we can treat others the way we want to be treated.
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
		</div>
	</div>
</section>

<FamilyMilestonePreview
	title="Kids Ministry begins the Family Milestones pathway"
	intro="Kids Ministry supports families from Family Dedication through Gospel Foundations and Preparing for Adolescence."
	milestones={kidsMilestones}
/>

<section class="relative py-20 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-left-top" style="background-image: url('/images/remote/fbcwimberley.com-img-17-5101ecf5e9.webp')"></div>
	<div class="absolute inset-0 bg-white/75"></div>
	<div class="container relative z-1">
		<h2 class="text-[clamp(1.5rem,3.3vw,2.3rem)] max-w-[860px] text-black">God made me. God loves me. Jesus wants to be my friend forever. I can trust God no matter what.</h2>
	</div>
</section>

<section class="py-20">
	<div class="container max-w-[1100px]">
		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-6">
				<h3 class="text-[1.25rem] mb-3">Babies &amp; Crawlers</h3>
				<p class="text-(--color-text-muted) leading-[1.75]">We want your littlest ones to feel safe and at ease, so we do everything we can to ensure that you and your child feel comfortable.</p>
			</div>
			<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-6">
				<h3 class="text-[1.25rem] mb-3">Toddlers &amp; Pre-K</h3>
				<p class="text-(--color-text-muted) leading-[1.75]">Children learn about God in meaningful and developmentally appropriate ways through hands-on activities, Bible story, and worship.</p>
			</div>
			<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-6">
				<h3 class="text-[1.25rem] mb-3">Kindergarten - 5th Grade</h3>
				<p class="text-(--color-text-muted) leading-[1.75]">Elementary kids build faith through Sunday morning environments, Wednesday AWANA, and discipleship moments designed for their age and stage.</p>
			</div>
		</div>
	</div>
</section>

<section class="py-0">
	<div class="container max-w-none px-0">
		<div class="grid grid-cols-1 lg:grid-cols-12">
			<div class="lg:col-span-5 bg-(--color-kids-bg) p-8 md:p-12 lg:p-16 flex flex-col justify-center text-(--color-text)">
				<h3 class="text-[clamp(1.5rem,3vw,2.1rem)] mb-4">AWANA Club</h3>
				<p class="leading-[1.75] mb-5">AWANA Club is a memory-verse, missions-focused night for children to connect with other kids and leaders. AWANA is open for kids 6 weeks through 5th grade. Join any Wednesday night during the school year.</p>
				<p class="font-semibold mb-1">Wednesdays</p>
				<p class="mb-6">6:15 pm</p>
				<a href="https://fbcwimberley.churchcenter.com/registrations/events/1879085" target="_blank" rel="noopener noreferrer" class="btn btn-accent hover:btn-accent-hover">Register For AWANA</a>
			</div>
			<div class="lg:col-span-7">
				<img src="/images/remote/fbcwimberley.com-baptism-kids-wimberley-ba79eca700.webp" alt="Kids ministry baptism" loading="lazy" class="w-full h-full min-h-[320px] object-cover" />
			</div>
		</div>
	</div>
</section>

<section class="py-0">
	<div class="container max-w-none px-0">
		<div class="grid grid-cols-1 lg:grid-cols-12">
			<div class="lg:col-span-7 order-2 lg:order-1">
				<img src="/images/remote/fbcwimberley.com-preschool-4-f85b959474.webp" alt="Kids Day Out classroom" loading="lazy" class="w-full h-full min-h-[320px] object-cover" />
			</div>
			<div class="lg:col-span-5 order-1 lg:order-2 bg-(--color-kids-bg) p-8 md:p-12 lg:p-16 flex flex-col justify-center text-(--color-text)">
				<h3 class="text-[clamp(1.5rem,3vw,2.1rem)] mb-4">Kids Day Out</h3>
				<p class="leading-[1.75] mb-5">Tuesday, Wednesday, and Thursdays from 8:30-2:30 for 1 year olds through Pre-K.</p>
				<p class="font-semibold mb-1">Tuesday, Wednesday, and Thursday</p>
				<p class="mb-6">8:30am - 2:30 pm</p>
				<a href="/ministries/kids-day-out" class="btn btn-accent hover:btn-accent-hover">Learn More</a>
			</div>
		</div>
	</div>
</section>

<section class="relative py-20 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/remote/fbcwimberley.com-Vintage-Paper-2-1-9ee73bcf93.webp')"></div>
	<div class="container relative z-1 max-w-[1100px]">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
			<div class="mx-auto">
				<img src="/images/remote/fbcwimberley.com-Google-Pixel-3424c6cb57.webp" alt="Phone updates" loading="lazy" class="w-[220px] md:w-[280px] h-auto" />
			</div>
			<div>
				<h2 class="text-[clamp(1.6rem,3.5vw,2.4rem)] mb-4 text-black">Be In The Know</h2>
				<p class="text-black leading-[1.75] mb-6">Connect with our church so you can get updates about what is going on with your child and our ministries.</p>
				<a href="https://fbcwimberley.churchcenter.com/" target="_blank" rel="noopener noreferrer" class="btn btn-accent hover:btn-accent-hover">Download</a>
			</div>
		</div>
	</div>
</section>
