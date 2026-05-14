<script lang="ts">
	import { elders, team } from '../aboutData';

	let expandedStaff = $state<string | null>(null);

	function toggleStaff(name: string) {
		expandedStaff = expandedStaff === name ? null : name;
	}
</script>

<svelte:head>
	<title>Our Team - First Baptist Church Wimberley</title>
	<meta name="description" content="Meet the pastors, elders, and ministry team at First Baptist Church Wimberley and get in touch with our church office." />
</svelte:head>

<section class="bg-(--color-bg-alt) py-20">
	<div class="container text-center">
		<h2 class="mb-10 text-[clamp(2.1rem,5vw,3.25rem)]">Meet Our Team</h2>

		<div class="mb-12 overflow-hidden rounded-[var(--radius-lg)]">
			<img
				src="/images/remote/fbcwimberley.com-Staff-1024x683-bfe874733d.webp"
				alt="FBC Wimberley Staff"
				loading="lazy"
				class="h-auto w-full object-cover"
			/>
		</div>

		<div class="mb-14">
			<h3 class="mb-6 text-[clamp(1.5rem,3vw,2rem)]">Elders</h3>
			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each elders as member}
					<button class="staff-card flex w-full cursor-pointer flex-col items-center rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-6 text-center transition-all duration-300 hover:border-(--color-border) hover:shadow-(--shadow-sm)" class:expanded={expandedStaff === member.name} onclick={() => toggleStaff(member.name)} aria-expanded={expandedStaff === member.name}>
						<div class="mb-4 h-[120px] w-[120px] overflow-hidden rounded-full border-3 border-(--color-border-light)">
							<img src={member.image} alt={member.name} loading="lazy" class="h-full w-full object-cover" />
						</div>
						<h4 class="mb-1 font-sans text-base font-semibold text-(--color-heading)">{member.name}</h4>
						<p class="mb-2 text-[0.85rem] text-(--color-text-muted)">{member.title}</p>
						{#if member.email}
							<a href="mailto:{member.email}" class="inline-flex items-center gap-1.5 text-[0.8rem] text-(--color-primary) transition-colors duration-200 hover:text-(--color-primary-hover)" onclick={(e) => e.stopPropagation()}>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
								{member.email}
							</a>
						{/if}
						{#if member.bio && expandedStaff === member.name}
							<p class="mt-4 text-left text-[0.9rem] leading-[1.7] text-(--color-text-muted)">{member.bio}</p>
						{/if}
						{#if member.bio}
							<span class="mt-3 inline-flex items-center gap-1 text-[0.8rem] font-semibold text-(--color-accent)">
								{expandedStaff === member.name ? 'Less' : 'Read more'}
								<svg class:rotated={expandedStaff === member.name} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
							</span>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<div>
			<h3 class="mb-6 text-[clamp(1.5rem,3vw,2rem)]">Our Team</h3>
			<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{#each team as member}
					<button class="staff-card flex w-full cursor-pointer flex-col items-center rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-6 text-center transition-all duration-300 hover:border-(--color-border) hover:shadow-(--shadow-sm)" class:expanded={expandedStaff === member.name} onclick={() => toggleStaff(member.name)} aria-expanded={expandedStaff === member.name}>
						<div class="mb-4 h-[120px] w-[120px] overflow-hidden rounded-full border-3 border-(--color-border-light)">
							<img src={member.image} alt={member.name} loading="lazy" class="h-full w-full object-cover" />
						</div>
						<h4 class="mb-1 font-sans text-base font-semibold text-(--color-heading)">{member.name}</h4>
						<p class="mb-2 text-[0.85rem] text-(--color-text-muted)">{member.title}</p>
						{#if member.email}
							<a href="mailto:{member.email}" class="inline-flex items-center gap-1.5 text-[0.8rem] text-(--color-primary) transition-colors duration-200 hover:text-(--color-primary-hover)" onclick={(e) => e.stopPropagation()}>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
								{member.email}
							</a>
						{/if}
						{#if member.bio && expandedStaff === member.name}
							<p class="mt-4 text-left text-[0.9rem] leading-[1.7] text-(--color-text-muted)">{member.bio}</p>
						{/if}
						{#if member.bio}
							<span class="mt-3 inline-flex items-center gap-1 text-[0.8rem] font-semibold text-(--color-accent)">
								{expandedStaff === member.name ? 'Less' : 'Read more'}
								<svg class:rotated={expandedStaff === member.name} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
							</span>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="py-20">
	<div class="container max-w-[900px] text-center">
		<p class="section-label">Get In Touch</p>
		<h2 class="mb-10 text-[clamp(1.75rem,4vw,2.5rem)]">Contact Us</h2>

		<div class="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
			<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-8 px-6 transition-all duration-300 hover:border-(--color-primary) hover:shadow-(--shadow-sm)">
				<div class="icon-circle mx-auto mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
				</div>
				<h3 class="mb-2 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-(--color-heading)">Address</h3>
				<p class="text-[0.95rem] leading-relaxed text-(--color-text-muted)">15951 Winters Mill Parkway<br />Wimberley, Texas 78676</p>
			</div>
			<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-8 px-6 transition-all duration-300 hover:border-(--color-primary) hover:shadow-(--shadow-sm)">
				<div class="icon-circle mx-auto mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
				</div>
				<h3 class="mb-2 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-(--color-heading)">Email</h3>
				<p class="text-[0.95rem] leading-relaxed text-(--color-text-muted)"><a href="mailto:office@fbcwimberley.com" class="font-medium text-(--color-primary)">office@fbcwimberley.com</a></p>
			</div>
			<div class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-8 px-6 transition-all duration-300 hover:border-(--color-primary) hover:shadow-(--shadow-sm)">
				<div class="icon-circle mx-auto mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
				</div>
				<h3 class="mb-2 font-sans text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-(--color-heading)">Phone</h3>
				<p class="text-[0.95rem] leading-relaxed text-(--color-text-muted)"><a href="tel:5128479035" class="font-medium text-(--color-primary)">512-847-9035</a></p>
			</div>
		</div>

		<div class="overflow-hidden rounded-[var(--radius-lg)] border border-(--color-border-light)">
			<iframe
				title="First Baptist Church of Wimberley"
				src="https://maps.google.com/maps?q=First%20Baptist%20Church%20of%20Wimberley&t=m&z=10&output=embed&iwloc=near"
				loading="lazy"
				allowfullscreen
				class="block h-[350px] w-full border-0 md:h-[450px]"
			></iframe>
		</div>
	</div>
</section>
