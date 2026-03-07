<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';

	let mobileMenuOpen = $state(false);
	let ministriesOpen = $state(false);
	let familyLifeOpen = $state(false);
	let serveOpen = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}

	function closeMobile() {
		mobileMenuOpen = false;
		ministriesOpen = false;
		familyLifeOpen = false;
		serveOpen = false;
	}
</script>

<svelte:window onscroll={handleScroll} />

<header class="header fixed top-0 left-0 right-0 z-100 bg-transparent transition-all duration-300" class:scrolled>
	<div class="container flex items-center justify-between py-4">
		<a href="/" class="shrink-0">
			<img
				src="/images/remote/fbcwimberley.com-First-Baptist-Church-of-wimberley-Wordmark-black-17cf094f99-320.webp"
				alt="First Baptist Church Wimberley"
				width="320"
				height="112"
				decoding="async"
				class="logo-light h-10 w-auto hidden"
			/>
			<img
				src="/images/remote/fbcwimberley.com-First-Baptist-Church-of-wimberley-Wordmark-white-2-29ef5e03e3-320.webp"
				alt="First Baptist Church Wimberley"
				width="320"
				height="112"
				decoding="async"
				class="logo-dark h-10 w-auto block"
			/>
		</a>

		<nav class="hidden lg:block">
			<ul class="flex items-center gap-1">
				<li><a href="/about-us" class="nav-item inline-flex items-center gap-1 py-2 px-3.5 text-[0.9rem] font-medium text-white rounded-[var(--radius-sm)] transition-all duration-200 hover:text-(--color-accent)">About Us</a></li>
				<li><a href="/connect" class="nav-item inline-flex items-center gap-1 py-2 px-3.5 text-[0.9rem] font-medium text-white rounded-[var(--radius-sm)] transition-all duration-200 hover:text-(--color-accent)">Connect</a></li>
				<li class="has-dropdown relative">
					<button class="nav-item inline-flex items-center gap-1 py-2 px-3.5 text-[0.9rem] font-medium text-white rounded-[var(--radius-sm)] transition-all duration-200 hover:text-(--color-accent)" onclick={() => ministriesOpen = !ministriesOpen}>
						Ministries
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</button>
					<ul class="dropdown hidden absolute top-full left-0 min-w-[220px] bg-(--color-bg-card) border border-(--color-border) rounded-[var(--radius-md)] shadow-(--shadow-lg) p-2 z-50">
						<li><a href="/ministries/womens-ministry" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Women's Ministry</a></li>
						<li><a href="https://fbcwimberley.churchcenter.com/groups/ministries-fbcw/widows-ministry" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Widows Ministry</a></li>
						<li><a href="https://fbcwimberley.churchcenter.com/groups/ministries-fbcw/men-s-ministry" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Men's Ministry</a></li>
						<li><a href="/ministries/care" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Care</a></li>
						<li><a href="/ministries/missions" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Missions</a></li>
						<li class="has-subdropdown relative">
							<span class="flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] cursor-default font-medium">
								Family Life
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
							</span>
							<ul class="subdropdown hidden absolute top-0 left-full min-w-[200px] bg-(--color-bg-card) border border-(--color-border) rounded-[var(--radius-md)] shadow-(--shadow-lg) p-2">
								<li><a href="/ministries/preschool" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Preschool</a></li>
								<li><a href="/ministries/elementary" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Elementary</a></li>
								<li><a href="/ministries/junior-high" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Junior High</a></li>
								<li><a href="/ministries/high-school" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">High School</a></li>
								<li><a href="/ministries/kids-day-out" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Kids Day Out</a></li>
							</ul>
						</li>
					</ul>
				</li>
				<li><a href="https://fbcwimberley.churchcenter.com/groups/" class="nav-item inline-flex items-center gap-1 py-2 px-3.5 text-[0.9rem] font-medium text-white rounded-[var(--radius-sm)] transition-all duration-200 hover:text-(--color-accent)">Groups</a></li>
				<li class="has-dropdown relative">
					<button class="nav-item inline-flex items-center gap-1 py-2 px-3.5 text-[0.9rem] font-medium text-white rounded-[var(--radius-sm)] transition-all duration-200 hover:text-(--color-accent)" onclick={() => serveOpen = !serveOpen}>
						Serve
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</button>
					<ul class="dropdown hidden absolute top-full left-0 min-w-[220px] bg-(--color-bg-card) border border-(--color-border) rounded-[var(--radius-md)] shadow-(--shadow-lg) p-2 z-50">
						<li><a href="/serve-the-church" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Serve The Church</a></li>
						<li><a href="/serve-the-community" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Serve The Community</a></li>
					</ul>
				</li>
				<li><a href="https://fbcwimberley.churchcenter.com/registrations" class="nav-item inline-flex items-center gap-1 py-2 px-3.5 text-[0.9rem] font-medium text-white rounded-[var(--radius-sm)] transition-all duration-200 hover:text-(--color-accent)">Events</a></li>
				<li>
					<a href="https://onrealm.org/fbcwimberley/give/now" target="_blank" class="btn btn-accent hover:btn-accent-hover py-2 px-6 text-[0.85rem]">Give</a>
				</li>
			</ul>
		</nav>

		<div class="flex items-center gap-3">
			<ThemeToggle />
			<button
				class="mobile-toggle flex items-center justify-center w-10 h-10 text-white rounded-[var(--radius-sm)] transition-all duration-200 lg:hidden"
				onclick={() => mobileMenuOpen = !mobileMenuOpen}
				aria-label="Toggle menu"
				aria-expanded={mobileMenuOpen}
			>
				{#if mobileMenuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="fixed inset-0 bg-black/50 z-90" onclick={closeMobile} role="presentation"></div>
		<nav class="fixed top-0 right-0 bottom-0 w-[min(320px,85vw)] bg-(--color-bg) z-95 pt-12 px-6 pb-8 overflow-y-auto shadow-(--shadow-lg)">
			<a href="/" class="block font-serif text-xl font-bold text-(--color-heading) pb-4 mb-2 border-b-2 border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>First Baptist Church</a>
			<ul>
				<li><a href="/about-us" class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) transition-colors duration-200" onclick={closeMobile}>About Us</a></li>
				<li><a href="/connect" class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) transition-colors duration-200" onclick={closeMobile}>Connect</a></li>
				<li>
					<button class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) text-left" onclick={() => ministriesOpen = !ministriesOpen}>
						Ministries
						<svg class:rotated={ministriesOpen} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</button>
					{#if ministriesOpen}
						<ul class="pl-4">
							<li><a href="/ministries/womens-ministry" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Women's Ministry</a></li>
							<li><a href="https://fbcwimberley.churchcenter.com/groups/ministries-fbcw/widows-ministry" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Widows Ministry</a></li>
							<li><a href="https://fbcwimberley.churchcenter.com/groups/ministries-fbcw/men-s-ministry" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Men's Ministry</a></li>
							<li><a href="/ministries/care" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Care</a></li>
							<li><a href="/ministries/missions" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Missions</a></li>
							<li>
								<button class="flex items-center justify-between w-full py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) text-left" onclick={() => familyLifeOpen = !familyLifeOpen}>
									Family Life
									<svg class:rotated={familyLifeOpen} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
								</button>
								{#if familyLifeOpen}
									<ul class="pl-3">
										<li><a href="/ministries/preschool" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Preschool</a></li>
										<li><a href="/ministries/elementary" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Elementary</a></li>
										<li><a href="/ministries/junior-high" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Junior High</a></li>
										<li><a href="/ministries/high-school" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>High School</a></li>
										<li><a href="/ministries/kids-day-out" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Kids Day Out</a></li>
									</ul>
								{/if}
							</li>
						</ul>
					{/if}
				</li>
				<li><a href="https://fbcwimberley.churchcenter.com/groups/" class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) transition-colors duration-200" onclick={closeMobile}>Groups</a></li>
				<li>
					<button class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) text-left" onclick={() => serveOpen = !serveOpen}>
						Serve
						<svg class:rotated={serveOpen} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</button>
					{#if serveOpen}
						<ul class="pl-4">
							<li><a href="/serve-the-church" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Serve The Church</a></li>
							<li><a href="/serve-the-community" class="block py-2.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Serve The Community</a></li>
						</ul>
					{/if}
				</li>
				<li><a href="https://fbcwimberley.churchcenter.com/registrations" class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) transition-colors duration-200" onclick={closeMobile}>Events</a></li>
				<li class="pt-4">
					<a href="https://onrealm.org/fbcwimberley/give/now" target="_blank" class="btn btn-accent hover:btn-accent-hover w-full justify-center" onclick={closeMobile}>Give</a>
				</li>
			</ul>
		</nav>
	{/if}
</header>

<style>
	/* Logo switching: show white logo normally, dark logo when scrolled */
	.header.scrolled .logo-light {
		display: block;
	}
	.header.scrolled .logo-dark {
		display: none;
	}

	/* In dark mode, always show white logo */
	:global(.dark) .logo-light {
		display: none !important;
	}
	:global(.dark) .logo-dark {
		display: block !important;
	}

	.header.scrolled {
		background: var(--color-bg);
		box-shadow: var(--shadow-md);
	}

	/* Nav items switch color when scrolled */
	.header.scrolled .nav-item {
		color: var(--color-nav-text);
	}

	/* Mobile toggle switch color when scrolled */
	.header.scrolled .mobile-toggle {
		color: var(--color-nav-text);
	}

	:global(.dark) .mobile-toggle {
		color: var(--color-nav-text);
	}

	/* Desktop dropdown hover display */
	.has-dropdown:hover .dropdown {
		display: block;
	}

	.has-subdropdown:hover .subdropdown {
		display: block;
	}

	/* Chevron rotation handled by global .rotated utility */
</style>
