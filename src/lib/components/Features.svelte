<script lang="ts">
	import Card from '$lib/ui/Card.svelte';

	const features = [
		{
			icon: 'tv',
			title: 'Watch Online',
			description: 'Join us each Sunday for a live stream of our 9:30AM worship gathering or on-demand any time of the week!',
			href: '/watch'
		},
		{
			icon: 'calendar',
			title: 'Upcoming Events',
			description: "There's always something happening in the life of our church. Check out all the upcoming events and registrations.",
			href: '/events'
		},
		{
			icon: 'users',
			title: 'Join A Group',
			description: 'Life is not meant to be lived alone! Find people who can help you grow in your desire to know Jesus.',
			href: 'https://fbcwimberley.churchcenter.com/groups'
		}
	];
</script>

<section class="py-20 md:py-28 bg-(--color-bg-alt)">
	<div class="relative z-1 max-w-[1200px] mx-auto px-6 text-center">
		<p class="section-label">Get Connected</p>
		<h2 class="text-[clamp(1.75rem,4vw,2.75rem)] text-(--color-heading) mb-12">There's a place for you here.</h2>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
			{#each features as feature}
				<Card
					href={feature.href}
					hover={false}
					class="feature-card group flex flex-col items-center text-center gap-4 py-10 px-8 lg:py-12 lg:px-8 no-underline transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
					target={feature.href.startsWith('https://fbcwimberley.com') ? undefined : '_blank'}
				>
					<div class="flex items-center justify-center w-16 h-16 bg-[rgba(200,145,90,0.15)] text-(--color-accent) rounded-full border border-[rgba(200,145,90,0.25)]">
						{#if feature.icon === 'tv'}
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
						{:else if feature.icon === 'calendar'}
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
						{/if}
					</div>
					<h3 class="font-serif text-[1.3rem] font-semibold text-(--color-heading)">{feature.title}</h3>
					<p class="text-[0.95rem] text-(--color-text-muted) leading-[1.65] max-w-[320px]">{feature.description}</p>
					<span class="feature-link inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-(--color-accent) tracking-[0.03em] opacity-0 translate-y-1.5 transition-all duration-300 mt-1">
						Learn more
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-300"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
					</span>
				</Card>
			{/each}
		</div>
	</div>
</section>
