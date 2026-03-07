<script lang="ts">
	const ministries = [
		{ name: "Women's Ministry", href: '/ministries/womens-ministry' },
		{ name: 'Widows Ministry', href: 'https://fbcwimberley.churchcenter.com/groups/ministries-fbcw/widows-ministry' },
		{ name: "Men's Ministry", href: 'https://fbcwimberley.churchcenter.com/groups/ministries-fbcw/men-s-ministry' },
		{ name: 'Care', href: '/ministries/care' },
		{ name: 'Missions', href: '/ministries/missions' },
		{ name: 'Preschool', href: '/ministries/preschool' },
		{ name: 'Elementary', href: '/ministries/elementary' },
		{ name: 'Junior High', href: '/ministries/junior-high' },
		{ name: 'High School', href: '/ministries/high-school' },
		{ name: 'Kids Day Out', href: '/ministries/kids-day-out' }
	];
</script>

<svelte:head>
	<title>Ministries - First Baptist Church Wimberley</title>
</svelte:head>

<section class="pt-32 pb-20">
	<div class="container max-w-[900px]">
		<p class="section-label text-center">Ministries</p>
		<h1 class="text-[clamp(2rem,4vw,3rem)] text-center mb-4">Current Ministries</h1>
		<p class="text-center text-(--color-text-muted) text-[1.02rem] leading-[1.75] mb-10">
			This page is available for direct URL access and lists our current ministry areas.
		</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
			{#each ministries as ministry}
				<a href={ministry.href} target={ministry.href.startsWith('http') ? '_blank' : undefined} rel={ministry.href.startsWith('http') ? 'noopener' : undefined} class="ministry-link rounded-[var(--radius-md)] border border-(--color-border-light) bg-(--color-bg-card) px-5 py-4 flex items-center justify-between">
					<span class="font-medium text-(--color-heading)">{ministry.name}</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
				</a>
			{/each}
		</div>
	</div>
</section>

<style>
	.ministry-link {
		transition: transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease;
	}

	.ministry-link:hover {
		transform: translateY(-2px);
		border-color: var(--color-border);
		box-shadow: var(--shadow-sm);
	}
</style>
