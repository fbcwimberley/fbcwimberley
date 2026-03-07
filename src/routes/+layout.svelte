<script lang="ts">
	import '../app.css';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { initThemeListener } from '$lib/stores/theme';
	import { onMount } from 'svelte';

	let { children } = $props();

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
	<title>First Baptist Church Wimberley</title>
	<meta name="description" content="To truly know Jesus and to make His truth known. Join us Sundays at 9:30AM and 11:00AM in Wimberley, Texas." />
</svelte:head>

<Header />
<main>
	{@render children()}
</main>
<Footer />
