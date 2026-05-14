<script lang="ts">
	let { children } = $props();
</script>

<section class="relative flex min-h-[50vh] items-end justify-center overflow-hidden md:min-h-[55vh]">
	<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/remote/fbcwimberley.com-img-18-1-2fb22432d7.webp')"></div>
	<div class="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.25)]"></div>
	<div class="relative z-1 pb-16 text-center">
		<p class="section-label">Welcome Home</p>
		<h1 class="text-[clamp(2.5rem,6vw,4rem)] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">Who We Are</h1>
	</div>
</section>

{@render children()}
