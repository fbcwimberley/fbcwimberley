<svelte:head>
	<title>Watch Online - First Baptist Church Wimberley</title>
</svelte:head>

<section class="watch-page">
	<div class="watch-embed-shell">
		<iframe
			src="https://First-Baptist-Church-Wimberley.livecontrol.tv/embed?&page=profile"
			title="First Baptist Church Wimberley Live Stream"
			allow="autoplay; fullscreen; picture-in-picture"
			allowfullscreen
		></iframe>
	</div>
</section>

<style>
	.watch-page {
		padding-top: 96px;
		padding-bottom: 24px;
		background: var(--color-bg-alt);
		min-height: 100svh;
	}

	.watch-embed-shell {
		width: min(1400px, 100%);
		margin: 0 auto;
		padding: 0 12px;
	}

	.watch-embed-shell :global(iframe) {
		width: 100%;
		height: calc(100svh - 120px);
		min-height: 680px;
		display: block;
		border: 0;
		border-radius: 14px;
	}

	@media (max-width: 768px) {
		.watch-page {
			padding-top: 84px;
			padding-bottom: 16px;
		}

		.watch-embed-shell {
			padding: 0;
		}

		.watch-embed-shell :global(iframe) {
			height: calc(100svh - 84px);
			min-height: 520px;
			border-radius: 0;
		}
	}
</style>
