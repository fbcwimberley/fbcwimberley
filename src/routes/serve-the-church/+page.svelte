<script lang="ts">
	const serveCards = [
		{
			title: 'Greeting Team',
			image: '/images/remote/fbcwimberley.com-website-hero-updated-627-HD-1080p-mov-image-079f4b4483.webp',
			href: 'https://fbcwimberley.com/greeting-team/'
		},
		{
			title: 'Technical Arts',
			image: '/images/remote/fbcwimberley.com-IMG_5086-scaled-2a72837c06.webp',
			href: 'https://fbcwimberley.com/technical-arts/'
		},
		{
			title: 'Security Team',
			image: '/images/remote/fbcwimberley.com-israel-fuentes-wvddOt5dot0-unsplash-scaled-83aee5e4e8.webp',
			href: 'https://fbcwimberley.com/security-team/'
		},
		{
			title: 'Kids Ministry',
			image: '/images/remote/fbcwimberley.com-preschool_first_baptist_wimberley-ab0dfc5303.webp',
			href: 'https://fbcwimberley.com/security-team-2/'
		}
	];
</script>

<svelte:head>
	<title>Serve The Church - First Baptist Church Wimberley</title>
</svelte:head>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f2135]">
	<div class="absolute inset-0 flex items-center justify-center">
		<img
			src="/images/remote/fbcwimberley.com-wimberley_church_serve-ae435911b2.webp"
			alt="Serving at church"
			loading="lazy"
			class="h-full w-auto object-contain"
		/>
	</div>
	<div class="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,29,55,0.62),rgba(67,133,243,0.28))]"></div>
	<div class="relative z-1 text-center px-6 max-w-[900px]">
		<p class="section-label text-white/85">Serve</p>
		<h1 class="text-[clamp(2.4rem,6vw,4.4rem)] text-white leading-[1.02] mb-4">Serve</h1>
		<p class="text-[clamp(1.05rem,2.4vw,1.55rem)] leading-[1.5] text-white/90">
			Find Out How You Can Make A Difference
			<br />
			Serving at FBC Wimberley
		</p>
	</div>
</section>

<section class="py-18 md:py-22">
	<div class="container max-w-[1180px]">
		<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
			{#each serveCards as card}
				<article class="rounded-[var(--radius-lg)] overflow-hidden border border-(--color-border-light) bg-(--color-bg-card) shadow-(--shadow-sm)">
					<a href={card.href} target="_blank" rel="noopener">
						<img src={card.image} alt={card.title} loading="lazy" class="w-full h-[220px] md:h-[240px] object-cover" />
					</a>
					<div class="p-6">
						<h3 class="text-[1.35rem] mb-3">{card.title}</h3>
						<a href={card.href} target="_blank" rel="noopener" class="font-semibold text-(--color-primary) hover:text-(--color-primary-hover)">
							Find Out More
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
