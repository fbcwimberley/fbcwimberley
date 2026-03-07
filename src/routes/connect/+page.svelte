<script lang="ts">
	import Card from '$lib/ui/Card.svelte';

	const nextStepFormUrl = 'https://fbcwimberley.churchcenter.com/people/forms/40958';
</script>

<svelte:head>
	<title>Connect - First Baptist Church Wimberley</title>
</svelte:head>

<section class="relative min-h-[52vh] md:min-h-[58vh] flex items-end justify-center overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/remote/fbcwimberley.com-102A5443-scaled-9aa360e309-1600.webp')"></div>
	<div class="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.72)] to-[rgba(0,0,0,0.25)]"></div>
	<div class="relative z-1 text-center pb-16 px-6">
		<p class="section-label">Get Connected</p>
		<h1 class="text-[clamp(2.4rem,6vw,4rem)] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">Connect</h1>
		<p class="text-white/85 text-[1.02rem] max-w-[720px] mt-4">
			Wherever you are in your faith journey, we want to help you take your next step.
		</p>
	</div>
</section>

<section class="py-20 bg-(--color-bg-alt)">
	<div class="container">
		<div class="text-center mb-12">
			<p class="section-label">Start Here</p>
			<h2 class="text-[clamp(1.75rem,4vw,2.5rem)] mb-4">Ways To Connect</h2>
			<p class="text-(--color-text-muted) text-[1.02rem] leading-[1.75] max-w-[760px] mx-auto">
				New to FBC Wimberley? Looking for community? Ready to support what God is doing here? Use these quick links to jump in.
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-5">
			<Card href="/about-us" hover={false} class="connect-card p-7 arrow-slide-hover">
				<p class="section-label mb-3">New Here?</p>
				<h3 class="text-[1.25rem] mb-2">Sunday Mornings</h3>
				<p class="text-(--color-text-muted) leading-[1.7] mb-5">Join us in person at 9:30AM and 11:00AM. We would love to meet you.</p>
				<span class="inline-flex items-center gap-2 font-semibold text-(--color-primary)">
					Plan Your Visit
					<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
				</span>
			</Card>

			<Card href="https://fbcwimberley.churchcenter.com/groups/" target="_blank" rel="noopener" hover={false} class="connect-card p-7 arrow-slide-hover">
				<p class="section-label mb-3">Get Plugged In</p>
				<h3 class="text-[1.25rem] mb-2">Join A Group</h3>
				<p class="text-(--color-text-muted) leading-[1.7] mb-5">Find people to grow with through Bible studies, classes, and ministry groups.</p>
				<span class="inline-flex items-center gap-2 font-semibold text-(--color-primary)">
					Browse Groups
					<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
				</span>
			</Card>

			<Card href="https://onrealm.org/fbcwimberley/give/now" target="_blank" rel="noopener" hover={false} class="connect-card p-7 arrow-slide-hover">
				<p class="section-label mb-3">Support The Mission</p>
				<h3 class="text-[1.25rem] mb-2">Give Online</h3>
				<p class="text-(--color-text-muted) leading-[1.7] mb-5">Would you like to give to what God is doing at FBCW? Give securely online.</p>
				<span class="inline-flex items-center gap-2 font-semibold text-(--color-primary)">
					Give Now
					<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
				</span>
			</Card>
		</div>
	</div>
</section>

<section class="relative py-24 md:py-28 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-center bg-fixed" style="background-image: url('/images/remote/fbcwimberley.com-102A6400-1-scaled-2a1dd8d246-960.webp')">
		<div class="dark-overlay"></div>
	</div>

	<div class="relative z-1 container max-w-[900px] text-center">
		<p class="section-label">Take Your Next Step</p>
		<h2 class="text-[clamp(1.8rem,4vw,2.7rem)] text-white mb-4">Take Your Next Step!</h2>
		<p class="text-white/78 text-[1.02rem] leading-[1.75] max-w-[760px] mx-auto mb-10">
			If you want to get baptized, follow Jesus, or become a member, use the button below and we will help you take that next step.
		</p>

		<div class="next-step-card rounded-[var(--radius-md)] border border-white/14 bg-white/6 p-6 md:p-8 text-left">
			<p class="section-label mb-3">Church Center Form</p>
			<h3 class="text-[1.45rem] text-white mb-3">Tell Us About Your Next Step</h3>
			<p class="text-white/78 leading-[1.75] mb-6">
				Click below to open our secure Church Center form for baptism, following Jesus, or church membership.
			</p>

			<div class="flex flex-wrap gap-2.5 mb-6">
				<span class="option-badge">Get Baptized</span>
				<span class="option-badge">Follow Jesus</span>
				<span class="option-badge">Become A Member</span>
			</div>

			<a
				href={nextStepFormUrl}
				target="_blank"
				rel="noopener"
				class="nextstep-submit inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-full bg-(--color-accent) text-white font-semibold text-[0.95rem] tracking-[0.02em] transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-(--color-accent-hover) hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,145,90,0.3)]"
			>
				Open Next Step Form
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-300"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
			</a>
		</div>
	</div>
</section>

<section class="py-20">
	<div class="container max-w-[760px] text-center">
		<p class="section-label">Need Help?</p>
		<h2 class="text-[clamp(1.75rem,4vw,2.4rem)] mb-4">Want To Ask More Questions? Let's Connect.</h2>
		<p class="text-(--color-text-muted) text-[1.02rem] leading-[1.75] mb-8">
			If you would rather talk with someone directly, our team is ready to help.
		</p>

		<div class="flex flex-wrap justify-center gap-3.5 mb-6">
			<a href="mailto:office@fbcwimberley.com" class="btn btn-outline-dark hover:btn-outline-dark-hover">Email Us</a>
			<a href="tel:+15128479035" class="btn btn-outline-dark hover:btn-outline-dark-hover">Call 512-847-9035</a>
		</div>

		<div class="flex flex-wrap items-center justify-center gap-3">
			<a href="https://www.facebook.com/firstwimberley" target="_blank" rel="noopener" class="social-pill">Facebook</a>
			<a href="https://www.instagram.com/fbc_wimberley/" target="_blank" rel="noopener" class="social-pill">Instagram</a>
			<a href="https://www.youtube.com/channel/UCBR1Vcq5wc2L6QFa9U2FTJw" target="_blank" rel="noopener" class="social-pill">YouTube</a>
		</div>
	</div>
</section>

<style>
	.next-step-card {
		backdrop-filter: blur(10px);
	}

	.option-badge {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		padding: 0.42rem 0.78rem;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.24);
		background: rgba(255, 255, 255, 0.12);
		color: rgba(255, 255, 255, 0.92);
		font-size: 0.78rem;
		font-weight: 700;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		line-height: 1;
	}

	.option-badge::before {
		content: '';
		width: 0.42rem;
		height: 0.42rem;
		border-radius: 999px;
		background: var(--color-accent);
		box-shadow: 0 0 0 2px rgba(200, 145, 90, 0.22);
	}

	.nextstep-submit:hover svg {
		transform: translateX(4px);
	}

	.social-pill {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem 1rem;
		border-radius: var(--radius-full);
		border: 1px solid var(--color-border);
		background: var(--color-bg-card);
		color: var(--color-text-muted);
		font-size: 0.9rem;
		transition: all 200ms ease;
	}

	.social-pill:hover {
		color: var(--color-primary);
		border-color: var(--color-primary);
		transform: translateY(-1px);
	}
</style>
