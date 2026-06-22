<script lang="ts">
	import '../app.css';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import { page } from '$app/state';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { canonicalUrl, siteDescription, siteName } from '$lib/seo';
	import { initThemeListener } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let { children, data } = $props();
	const canonical = $derived(canonicalUrl(page.url.pathname));

	onMount(() => {
		initThemeListener();
	});

	afterNavigate(({ from, to }) => {
		if (!to || to.url.hash) {
			return;
		}

		const routeChanged = !from || from.url.pathname !== to.url.pathname || from.url.search !== to.url.search;
		if (!routeChanged) {
			return;
		}

		disableScrollHandling();
		requestAnimationFrame(() => {
			window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
		});
	});
</script>

<svelte:head>
	<title>{siteName}</title>
	<meta name="description" content={siteDescription} />
	<link rel="canonical" href={canonical} />
</svelte:head>

<a href="#main-content" class="skip-link">Skip to main content</a>
<Header showHomePromoBanner={data.showHomePromoBanner} />
<main id="main-content">
	{@render children()}
</main>
<Footer />

<style>
	:global(.skip-link) {
		position: absolute;
		left: -9999px;
		top: 0;
		z-index: 200;
		padding: 0.625rem 1.25rem;
		background: var(--color-bg);
		color: var(--color-primary);
		font-weight: 600;
		font-size: 0.9rem;
		border-radius: var(--radius-sm);
		text-decoration: none;
		box-shadow: var(--shadow-lg);
		border: 2px solid var(--color-primary);
	}
	:global(.skip-link:focus) {
		left: 1rem;
		top: 1rem;
	}
</style>
