<script lang="ts">
	import { faqs } from '../aboutData';

	let openFaq = $state<number | null>(null);

	function toggleFaq(i: number) {
		openFaq = openFaq === i ? null : i;
	}
</script>

<svelte:head>
	<title>Our Story - First Baptist Church Wimberley</title>
	<meta name="description" content="Learn the story of First Baptist Church Wimberley, plan your visit, and find answers to common Sunday questions." />
</svelte:head>

<section class="py-20">
	<div class="container max-w-[800px] text-center">
		<p class="section-label">Est. 1884</p>
		<h2 class="mb-6 text-[clamp(1.75rem,4vw,2.5rem)]">Our Story</h2>
		<p class="text-[1.05rem] leading-[1.8] text-(--color-text-muted)">
			The history of FBC Wimberley spans back to 1884 when a faithful group of people followed God's call to establish a mission at Jacob's Well. The story of our church, like the story of every person's life, is filled with the marks of God's grace, presence, and calling. Along the way FBC Wimberley has been on mission to be a church FOR our community and our world. FBC Wimberley has had the opportunity to reach our next door neighbors and the nations with the love of Jesus. Join us each Sunday at 9:30AM and 11:00AM to see how God could be writing the next chapter of our story with you!
		</p>
	</div>
</section>

<section class="relative overflow-hidden py-24">
	<div class="absolute inset-0 bg-cover bg-center lg:bg-fixed" style="background-image: url('/images/remote/fbcwimberley.com-102A6470-scaled-9eb00dbc08-1600.webp')">
		<div class="dark-overlay"></div>
	</div>
	<div class="container relative z-1 max-w-[800px] text-center">
		<p class="section-label">We'd Love To See You</p>
		<h2 class="mb-8 text-[clamp(1.75rem,4vw,2.5rem)] text-white">Plan Your Visit</h2>
		<div class="glass-card p-6 md:p-10 lg:p-12">
			<p class="text-[1.05rem] leading-[1.8] text-white/80">
				Whether you're a young or senior adult, single, or married with kids, you'll feel encouraged by the community we have at FBC Wimberley. You can visit as many times as you want without any obligations or pressure. And who knows&mdash;you just might decide to make FBCW your new church home!
			</p>
		</div>
	</div>
</section>

<section class="py-20">
	<div class="container max-w-[800px] text-center">
		<p class="section-label">Got Questions?</p>
		<h2 class="mb-10 text-[clamp(1.75rem,4vw,2.5rem)]">FAQs</h2>

		<div class="flex flex-col gap-3 text-left">
			{#each faqs as faq, i}
				<button class="faq-item w-full cursor-pointer rounded-[var(--radius-md)] border border-(--color-border-light) bg-(--color-bg-card) px-6 py-5 text-left transition-all duration-300 hover:border-(--color-border)" class:open={openFaq === i} onclick={() => toggleFaq(i)} aria-expanded={openFaq === i}>
					<div class="flex items-center justify-between gap-4">
						<span class="font-sans text-[0.95rem] font-semibold text-(--color-heading)">{faq.question}</span>
						<svg class:rotated={openFaq === i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0 text-(--color-text-muted) transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if openFaq === i}
						<div class="mt-4 border-t border-(--color-border-light) pt-4">
							<p class="text-[0.95rem] leading-[1.7] text-(--color-text-muted)">
								{faq.answer}
								{#if faq.link}
									<a href={faq.link.href} target="_blank" rel="noopener noreferrer" class="font-semibold" onclick={(e) => e.stopPropagation()}>{faq.link.text}</a>
								{/if}
							</p>
						</div>
					{/if}
				</button>
			{/each}
		</div>
	</div>
</section>

<style>
	.faq-item.open {
		border-color: var(--color-primary);
		box-shadow: var(--shadow-sm);
	}
</style>
