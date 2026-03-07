<script lang="ts">
	import { goto } from '$app/navigation';

	async function goToConnect(event: MouseEvent) {
		event.preventDefault();
		await goto('/connect', { noScroll: false });
		window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
	}
</script>

<section class="relative py-20 md:py-28 bg-(--color-bg-alt) overflow-hidden">
	<div class="relative z-1 max-w-[900px] mx-auto px-6 text-center">
		<p class="section-label">Your Journey</p>
		<h2 class="text-[clamp(2rem,4vw,3rem)] text-(--color-heading) mb-5">Take Your Next Step.</h2>
		<p class="text-[1.05rem] text-(--color-text-muted) leading-[1.7] max-w-[680px] mx-auto mb-12">
			Whether you're new to FBCW and are ready to surrender your life to Jesus or you've been around a while and are looking to get more connected &mdash; we want to help you take your next step to discover and deepen a relationship with Jesus.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-10">
			<div class="nextstep-image-wrap rounded-[var(--radius-lg)] overflow-hidden relative group">
				<img
					src="/images/remote/fbcwimberley.com-102A0963-scaled-283b05ccc9-960.webp"
					srcset="/images/remote/fbcwimberley.com-102A0963-scaled-283b05ccc9-640.webp 640w, /images/remote/fbcwimberley.com-102A0963-scaled-283b05ccc9-960.webp 960w"
					sizes="(min-width: 768px) 45vw, 100vw"
					alt="Church community"
					loading="lazy"
					class="w-full h-[260px] md:h-[340px] object-cover image-zoom-hover"
				/>
			</div>
			<div class="nextstep-image-wrap rounded-[var(--radius-lg)] overflow-hidden relative group">
				<img
					src="/images/remote/fbcwimberley.com-102A6400-1-scaled-2a1dd8d246-960.webp"
					srcset="/images/remote/fbcwimberley.com-102A6400-1-scaled-2a1dd8d246-640.webp 640w, /images/remote/fbcwimberley.com-102A6400-1-scaled-2a1dd8d246-960.webp 960w"
					sizes="(min-width: 768px) 45vw, 100vw"
					alt="Church fellowship"
					loading="lazy"
					class="w-full h-[260px] md:h-[340px] object-cover image-zoom-hover"
				/>
			</div>
		</div>

		<a
			href="/connect"
			onclick={goToConnect}
			class="arrow-slide-hover inline-flex items-center gap-2 py-3.5 px-10 rounded-full bg-(--color-primary) text-white font-semibold text-[0.95rem] tracking-[0.02em] transition-all duration-300 hover:bg-(--color-primary-hover) hover:text-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(44,95,124,0.3)]"
		>
			Take Your Next Step
			<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
		</a>
	</div>
</section>

<style>
	.nextstep-image-wrap::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(to top, rgba(26, 26, 46, 0.2) 0%, transparent 50%);
		pointer-events: none;
		transition: opacity 400ms ease;
	}

	.nextstep-image-wrap:hover::after {
		opacity: 0;
	}
</style>
