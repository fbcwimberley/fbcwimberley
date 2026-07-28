<script lang="ts">
	import { onMount } from 'svelte';

	const HERO_IMAGE_SIZES = '100vw';

	const images = [
		{
			src: '/images/remote/fbcwimberley.com-102A6470-scaled-9eb00dbc08-1600.webp',
			srcset:
				'/images/remote/fbcwimberley.com-102A6470-scaled-9eb00dbc08-768.webp 768w, /images/remote/fbcwimberley.com-102A6470-scaled-9eb00dbc08-960.webp 960w, /images/remote/fbcwimberley.com-102A6470-scaled-9eb00dbc08-1280.webp 1280w, /images/remote/fbcwimberley.com-102A6470-scaled-9eb00dbc08-1600.webp 1600w',
			portraitSrcset:
				'/images/remote/fbcwimberley.com-102A6470-scaled-9eb00dbc08-portrait-480.webp 480w, /images/remote/fbcwimberley.com-102A6470-scaled-9eb00dbc08-portrait-768.webp 768w, /images/remote/fbcwimberley.com-102A6470-scaled-9eb00dbc08-portrait-854.webp 854w'
		},
		{
			src: '/images/remote/fbcwimberley.com-102A6447-scaled-ea6e616800-1600.webp',
			srcset:
				'/images/remote/fbcwimberley.com-102A6447-scaled-ea6e616800-768.webp 768w, /images/remote/fbcwimberley.com-102A6447-scaled-ea6e616800-960.webp 960w, /images/remote/fbcwimberley.com-102A6447-scaled-ea6e616800-1280.webp 1280w, /images/remote/fbcwimberley.com-102A6447-scaled-ea6e616800-1600.webp 1600w',
			portraitSrcset:
				'/images/remote/fbcwimberley.com-102A6447-scaled-ea6e616800-portrait-480.webp 480w, /images/remote/fbcwimberley.com-102A6447-scaled-ea6e616800-portrait-768.webp 768w, /images/remote/fbcwimberley.com-102A6447-scaled-ea6e616800-portrait-854.webp 854w'
		},
		{
			src: '/images/remote/fbcwimberley.com-102A5443-scaled-9aa360e309-1600.webp',
			srcset:
				'/images/remote/fbcwimberley.com-102A5443-scaled-9aa360e309-768.webp 768w, /images/remote/fbcwimberley.com-102A5443-scaled-9aa360e309-960.webp 960w, /images/remote/fbcwimberley.com-102A5443-scaled-9aa360e309-1280.webp 1280w, /images/remote/fbcwimberley.com-102A5443-scaled-9aa360e309-1600.webp 1600w',
			portraitSrcset:
				'/images/remote/fbcwimberley.com-102A5443-scaled-9aa360e309-portrait-480.webp 480w, /images/remote/fbcwimberley.com-102A5443-scaled-9aa360e309-portrait-768.webp 768w, /images/remote/fbcwimberley.com-102A5443-scaled-9aa360e309-portrait-854.webp 854w'
		}
	];

	let currentSlide = $state(0);

	$effect(() => {
		const interval = setInterval(() => {
			currentSlide = (currentSlide + 1) % images.length;
		}, 5000);
		return () => clearInterval(interval);
	});

	onMount(() => {
		// Delay non-LCP image fetches so the first hero paint happens sooner.
		const preloadTimer = window.setTimeout(() => {
			for (const image of images.slice(1)) {
				const img = new Image();
				img.srcset = window.matchMedia('(orientation: portrait)').matches
					? image.portraitSrcset
					: image.srcset;
				img.sizes = HERO_IMAGE_SIZES;
				img.fetchPriority = 'low';
				img.src = image.src;
				img.decoding = 'async';
			}
		}, 2500);

		return () => window.clearTimeout(preloadTimer);
	});
</script>

<svelte:head>
	<link rel="preload" as="image" href={images[0].src} imagesrcset={images[0].portraitSrcset} imagesizes={HERO_IMAGE_SIZES} media="(orientation: portrait)" fetchpriority="high" />
	<link rel="preload" as="image" href={images[0].src} imagesrcset={images[0].srcset} imagesizes={HERO_IMAGE_SIZES} media="(orientation: landscape)" fetchpriority="high" />
</svelte:head>

<section class="relative min-h-screen flex items-end justify-center overflow-hidden">
	{#each images as image, i}
		{#if i === 0 || i === currentSlide}
			<picture
				class="hero-slide absolute inset-0 w-full h-full will-change-[opacity] transition-opacity duration-1000 ease-in-out"
				class:opacity-100={currentSlide === i}
				class:opacity-0={currentSlide !== i}
			>
				<source media="(orientation: portrait)" srcset={image.portraitSrcset} sizes={HERO_IMAGE_SIZES} />
				<img
					src={image.src}
					srcset={image.srcset}
					sizes={HERO_IMAGE_SIZES}
					alt=""
					aria-hidden="true"
					class="w-full h-full object-cover"
					loading={i === 0 ? 'eager' : 'lazy'}
					fetchpriority={i === 0 ? 'high' : 'low'}
					decoding="async"
				/>
			</picture>
		{/if}
	{/each}
	<div class="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.15)] z-1"></div>

	<div class="container relative z-2 text-center pb-24">
		<h1 class="font-serif text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-4 drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] tracking-tight">Magnify Christ<br />And Share the Gospel</h1>
		<p class="text-[clamp(1rem,2vw,1.35rem)] text-white/90 mb-3 font-normal tracking-[0.05em]">First Baptist Church Wimberley gathers Sundays at 9:30AM and 11:00AM.</p>
		<p class="text-base md:text-lg text-white/80 mb-8 max-w-[620px] mx-auto leading-relaxed">Find worship, groups, ministries, events, and next steps for your family in Wimberley, Texas.</p>
		<div class="flex flex-wrap justify-center gap-3">
			<a href="/connect" class="btn btn-accent hover:btn-accent-hover">Plan Your Visit</a>
			<a href="/watch" class="btn btn-outline hover:btn-outline-hover">Watch Now</a>
		</div>
	</div>
</section>
