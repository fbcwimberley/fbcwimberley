<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	const FAMILY_LIFE_WEEKEND_BANNER_KEY = 'family-life-weekend-banner-dismissed';
	const FAMILY_LIFE_WEEKEND_REGISTRATION_URL = 'https://fbcwimberley.churchcenter.com/registrations';
	const FAMILY_LIFE_WEEKEND_TARGET = new Date('2026-03-27T18:00:00-05:00').getTime();
	const FAMILY_LIFE_WEEKEND_DISMISS_DURATION_MS = 60 * 60 * 1000;
	const FAMILY_LIFE_WEEKEND_COOKIE_ATTRIBUTES = '; Path=/; Max-Age=3600; SameSite=Lax';

	let { showFamilyLifeWeekendBanner: initialShowFamilyLifeWeekendBanner } = $props<{
		showFamilyLifeWeekendBanner: boolean;
	}>();

	let mobileMenuOpen = $state(false);
	let ministriesOpen = $state(false);
	let familyLifeOpen = $state(false);
	let familyLifeDesktopOpen = $state(false);
	let serveOpen = $state(false);
	let scrolled = $state(false);
	let bannerVisibilityOverride = $state<'default' | 'hidden' | 'visible'>('default');
	let countdown = $state(getCountdownParts());

	const shouldShowFamilyLifeWeekendBanner = $derived(
		page.url.pathname === '/'
			&& !scrolled
			&& (bannerVisibilityOverride === 'visible' || (bannerVisibilityOverride === 'default' && initialShowFamilyLifeWeekendBanner))
	);

	let ministriesTimer: ReturnType<typeof setTimeout> | undefined;
	let serveTimer: ReturnType<typeof setTimeout> | undefined;
	let familyLifeTimer: ReturnType<typeof setTimeout> | undefined;
	let countdownTimer: ReturnType<typeof setInterval> | undefined;
	let bannerResetTimer: ReturnType<typeof setTimeout> | undefined;

	function getCountdownParts() {
		const distance = Math.max(FAMILY_LIFE_WEEKEND_TARGET - Date.now(), 0);
		const totalSeconds = Math.floor(distance / 1000);

		return {
			days: Math.floor(totalSeconds / 86400),
			hours: Math.floor((totalSeconds % 86400) / 3600),
			minutes: Math.floor((totalSeconds % 3600) / 60),
			seconds: totalSeconds % 60,
			isComplete: distance === 0
		};
	}

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}

	function clearBannerResetTimer() {
		if (bannerResetTimer) {
			clearTimeout(bannerResetTimer);
			bannerResetTimer = undefined;
		}
	}

	function getBannerHideUntilFromCookie() {
		const cookie = document.cookie
			.split('; ')
			.find((entry) => entry.startsWith(`${FAMILY_LIFE_WEEKEND_BANNER_KEY}=`));
		const value = cookie?.split('=')[1];
		const hideUntil = value ? Number(decodeURIComponent(value)) : 0;

		return Number.isFinite(hideUntil) ? hideUntil : 0;
	}

	function setBannerHideUntilCookie(hideUntil: number) {
		document.cookie = `${FAMILY_LIFE_WEEKEND_BANNER_KEY}=${encodeURIComponent(hideUntil.toString())}${FAMILY_LIFE_WEEKEND_COOKIE_ATTRIBUTES}`;
	}

	function clearBannerHideUntilCookie() {
		document.cookie = `${FAMILY_LIFE_WEEKEND_BANNER_KEY}=; Path=/; Max-Age=0; SameSite=Lax`;
	}

	function showFamilyLifeWeekendBannerNow() {
		bannerVisibilityOverride = 'visible';
		clearBannerHideUntilCookie();
		clearBannerResetTimer();
	}

	function scheduleBannerReset(delayMs: number) {
		clearBannerResetTimer();
		bannerResetTimer = setTimeout(() => {
			showFamilyLifeWeekendBannerNow();
		}, delayMs);
	}

	function syncBannerDismissState() {
		const hideUntil = getBannerHideUntilFromCookie();

		if (hideUntil > Date.now()) {
			bannerVisibilityOverride = 'hidden';
			scheduleBannerReset(hideUntil - Date.now());
			return;
		}

		showFamilyLifeWeekendBannerNow();
	}

	function dismissFamilyLifeWeekendBanner() {
		const hideUntil = Date.now() + FAMILY_LIFE_WEEKEND_DISMISS_DURATION_MS;
		bannerVisibilityOverride = 'hidden';
		setBannerHideUntilCookie(hideUntil);
		scheduleBannerReset(FAMILY_LIFE_WEEKEND_DISMISS_DURATION_MS);
	}

	function closeMobile() {
		mobileMenuOpen = false;
		ministriesOpen = false;
		familyLifeOpen = false;
		serveOpen = false;
	}

	onMount(() => {
		handleScroll();
		syncBannerDismissState();
		countdown = getCountdownParts();
		countdownTimer = setInterval(() => {
			countdown = getCountdownParts();
		}, 1000);

		return () => {
			if (countdownTimer) clearInterval(countdownTimer);
			clearBannerResetTimer();
		};
	});

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			ministriesOpen = false;
			serveOpen = false;
			familyLifeDesktopOpen = false;
			if (mobileMenuOpen) closeMobile();
		}
	}

	function ministriesEnter() { clearTimeout(ministriesTimer); ministriesOpen = true; }
	function ministriesLeave() { ministriesTimer = setTimeout(() => { ministriesOpen = false; }, 150); }
	function serveEnter() { clearTimeout(serveTimer); serveOpen = true; }
	function serveLeave() { serveTimer = setTimeout(() => { serveOpen = false; }, 150); }
	function familyLifeEnter() { clearTimeout(familyLifeTimer); familyLifeDesktopOpen = true; }
	function familyLifeLeave() { familyLifeTimer = setTimeout(() => { familyLifeDesktopOpen = false; }, 150); }
</script>

<svelte:window onscroll={handleScroll} onkeydown={handleKeydown} />

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

		<nav class="hidden lg:block" aria-label="Main navigation">
			<ul class="flex items-center gap-1">
				<li><a href="/about-us" class="nav-item inline-flex items-center gap-1 py-2 px-3.5 text-[0.9rem] font-medium text-white rounded-[var(--radius-sm)] transition-all duration-200 hover:text-(--color-accent)">About Us</a></li>
				<li><a href="/connect" class="nav-item inline-flex items-center gap-1 py-2 px-3.5 text-[0.9rem] font-medium text-white rounded-[var(--radius-sm)] transition-all duration-200 hover:text-(--color-accent)">Connect</a></li>
				<li
					class="has-dropdown relative"
					onmouseenter={ministriesEnter}
					onmouseleave={ministriesLeave}
					onfocusout={(e) => { if (!(e.currentTarget as HTMLElement).contains(e.relatedTarget as Node)) ministriesOpen = false; }}
				>
					<button
						class="nav-item inline-flex items-center gap-1 py-2 px-3.5 text-[0.9rem] font-medium text-white rounded-[var(--radius-sm)] transition-all duration-200 hover:text-(--color-accent)"
						onclick={() => ministriesOpen = !ministriesOpen}
						aria-expanded={ministriesOpen}
						aria-controls="ministries-dropdown"
					>
						Ministries
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</button>
					<ul
						id="ministries-dropdown"
						class="dropdown absolute top-full left-0 min-w-[220px] bg-(--color-bg-card) border border-(--color-border) rounded-[var(--radius-md)] shadow-(--shadow-lg) p-2 z-50"
						class:hidden={!ministriesOpen}
					>
						<li><a href="/ministries/womens-ministry" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Women's Ministry</a></li>
						<li><a href="https://fbcwimberley.churchcenter.com/groups/ministries-fbcw/widows-ministry" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Widows Ministry</a></li>
						<li><a href="https://fbcwimberley.churchcenter.com/groups/ministries-fbcw/men-s-ministry" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Men's Ministry</a></li>
						<li><a href="/ministries/care" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Care</a></li>
						<li><a href="/ministries/missions" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Missions</a></li>
						<li
							class="has-subdropdown relative"
							onmouseenter={familyLifeEnter}
							onmouseleave={familyLifeLeave}
							onfocusout={(e) => { if (!(e.currentTarget as HTMLElement).contains(e.relatedTarget as Node)) familyLifeDesktopOpen = false; }}
						>
							<button
								class="flex w-full items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] font-medium transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)"
								onclick={() => familyLifeDesktopOpen = !familyLifeDesktopOpen}
								aria-expanded={familyLifeDesktopOpen}
								aria-controls="family-life-dropdown"
							>
								Family Life
								<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
							</button>
							<ul
								id="family-life-dropdown"
								class="subdropdown absolute top-0 left-full min-w-[200px] bg-(--color-bg-card) border border-(--color-border) rounded-[var(--radius-md)] shadow-(--shadow-lg) p-2"
								class:hidden={!familyLifeDesktopOpen}
							>
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
				<li
					class="has-dropdown relative"
					onmouseenter={serveEnter}
					onmouseleave={serveLeave}
					onfocusout={(e) => { if (!(e.currentTarget as HTMLElement).contains(e.relatedTarget as Node)) serveOpen = false; }}
				>
					<button
						class="nav-item inline-flex items-center gap-1 py-2 px-3.5 text-[0.9rem] font-medium text-white rounded-[var(--radius-sm)] transition-all duration-200 hover:text-(--color-accent)"
						onclick={() => serveOpen = !serveOpen}
						aria-expanded={serveOpen}
						aria-controls="serve-dropdown"
					>
						Serve
						<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</button>
					<ul
						id="serve-dropdown"
						class="dropdown absolute top-full left-0 min-w-[220px] bg-(--color-bg-card) border border-(--color-border) rounded-[var(--radius-md)] shadow-(--shadow-lg) p-2 z-50"
						class:hidden={!serveOpen}
					>
						<li><a href="/serve-the-church" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Serve The Church</a></li>
						<li><a href="/serve-the-community" class="dropdown-link flex items-center justify-between py-2.5 px-3.5 text-[0.875rem] text-(--color-text) rounded-[var(--radius-sm)] transition-all duration-200 hover:bg-(--color-primary-light) hover:text-(--color-primary)">Serve The Community</a></li>
					</ul>
				</li>
				<li><a href="https://fbcwimberley.churchcenter.com/registrations" class="nav-item inline-flex items-center gap-1 py-2 px-3.5 text-[0.9rem] font-medium text-white rounded-[var(--radius-sm)] transition-all duration-200 hover:text-(--color-accent)">Events</a></li>
				<li>
					<a href="https://onrealm.org/fbcwimberley/give/now" target="_blank" rel="noopener noreferrer" class="btn btn-accent hover:btn-accent-hover py-2 px-6 text-[0.85rem]">Give</a>
				</li>
			</ul>
		</nav>

		<div class="flex items-center gap-3">
			<ThemeToggle />
			<button
				class="mobile-toggle flex items-center justify-center w-11 h-11 text-white rounded-[var(--radius-sm)] transition-all duration-200 lg:hidden"
				onclick={() => mobileMenuOpen = !mobileMenuOpen}
				aria-label="Toggle menu"
				aria-expanded={mobileMenuOpen}
				aria-controls="mobile-nav"
			>
				{#if mobileMenuOpen}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
				{/if}
			</button>
		</div>
	</div>

	{#if shouldShowFamilyLifeWeekendBanner}
		<div class="relative border-t border-white/10 bg-[rgba(26,18,13,0.78)] text-white backdrop-blur-sm">
			<div class="container px-12 py-3 sm:px-14">
				<div class="flex flex-col items-center justify-center gap-3 text-center lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-6 lg:text-left">
					<p class="text-sm font-medium tracking-[0.08em] uppercase sm:text-[0.95rem]">
						Are you ready for Family Life Weekend 2026?
					</p>
					<div class="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
						{#if countdown.isComplete}
							<span class="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold tracking-[0.08em] uppercase">
								Happening now
							</span>
						{:else}
							{#each [
								{ label: 'Days', value: countdown.days },
								{ label: 'Hours', value: countdown.hours },
								{ label: 'Minutes', value: countdown.minutes },
								{ label: 'Seconds', value: countdown.seconds }
							] as part}
								<div class="min-w-16 rounded-[var(--radius-sm)] border border-white/20 bg-white/8 px-3 py-2 text-center">
									<div class="text-lg font-semibold tabular-nums sm:text-xl">{part.value.toString().padStart(2, '0')}</div>
									<div class="text-[0.65rem] tracking-[0.18em] uppercase text-white/70 sm:text-[0.7rem]">{part.label}</div>
								</div>
							{/each}
						{/if}
					</div>
					<div class="flex justify-center lg:justify-end">
						<a
							href={FAMILY_LIFE_WEEKEND_REGISTRATION_URL}
							target="_blank"
							rel="noopener noreferrer"
							class="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm font-medium tracking-[0.08em] uppercase transition hover:bg-white hover:text-[rgba(26,18,13,0.92)] sm:text-[0.95rem]"
						>
							Register under Events
						</a>
					</div>
				</div>
			</div>
			<button
				type="button"
				class="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-red-400 transition hover:text-red-300 sm:right-6"
				onclick={dismissFamilyLifeWeekendBanner}
				aria-label="Dismiss Family Life Weekend banner"
			>
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
					<line x1="18" y1="6" x2="6" y2="18"></line>
					<line x1="6" y1="6" x2="18" y2="18"></line>
				</svg>
			</button>
		</div>
	{/if}

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="fixed inset-0 bg-black/50 z-90" onclick={closeMobile} role="presentation"></div>
		<nav id="mobile-nav" class="fixed top-0 right-0 bottom-0 w-[min(320px,85vw)] bg-(--color-bg) z-95 pt-12 px-6 pb-8 overflow-y-auto shadow-(--shadow-lg)" aria-label="Main navigation">
			<a href="/" class="block font-serif text-xl font-bold text-(--color-heading) pb-4 mb-2 border-b-2 border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>First Baptist Church</a>
			<ul>
				<li><a href="/about-us" class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) transition-colors duration-200" onclick={closeMobile}>About Us</a></li>
				<li><a href="/connect" class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) transition-colors duration-200" onclick={closeMobile}>Connect</a></li>
				<li>
					<button class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) text-left" onclick={() => ministriesOpen = !ministriesOpen} aria-expanded={ministriesOpen}>
						Ministries
						<svg class:rotated={ministriesOpen} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</button>
					{#if ministriesOpen}
						<ul class="pl-4">
							<li><a href="/ministries/womens-ministry" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Women's Ministry</a></li>
							<li><a href="https://fbcwimberley.churchcenter.com/groups/ministries-fbcw/widows-ministry" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Widows Ministry</a></li>
							<li><a href="https://fbcwimberley.churchcenter.com/groups/ministries-fbcw/men-s-ministry" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Men's Ministry</a></li>
							<li><a href="/ministries/care" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Care</a></li>
							<li><a href="/ministries/missions" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Missions</a></li>
							<li>
								<button class="flex items-center justify-between w-full py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) text-left" onclick={() => familyLifeOpen = !familyLifeOpen} aria-expanded={familyLifeOpen}>
									Family Life
									<svg class:rotated={familyLifeOpen} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
								</button>
								{#if familyLifeOpen}
									<ul class="pl-3">
										<li><a href="/ministries/preschool" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Preschool</a></li>
										<li><a href="/ministries/elementary" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Elementary</a></li>
										<li><a href="/ministries/junior-high" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Junior High</a></li>
										<li><a href="/ministries/high-school" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>High School</a></li>
										<li><a href="/ministries/kids-day-out" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Kids Day Out</a></li>
									</ul>
								{/if}
							</li>
						</ul>
					{/if}
				</li>
				<li><a href="https://fbcwimberley.churchcenter.com/groups/" class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) transition-colors duration-200" onclick={closeMobile}>Groups</a></li>
				<li>
					<button class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) text-left" onclick={() => serveOpen = !serveOpen} aria-expanded={serveOpen}>
						Serve
						<svg class:rotated={serveOpen} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</button>
					{#if serveOpen}
						<ul class="pl-4">
							<li><a href="/serve-the-church" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Serve The Church</a></li>
							<li><a href="/serve-the-community" class="block py-3.5 text-[0.9rem] text-(--color-text-muted) border-b border-(--color-border-light) hover:text-(--color-primary)" onclick={closeMobile}>Serve The Community</a></li>
						</ul>
					{/if}
				</li>
				<li><a href="https://fbcwimberley.churchcenter.com/registrations" class="flex items-center justify-between w-full py-3.5 text-base font-medium text-(--color-text) border-b border-(--color-border-light) transition-colors duration-200" onclick={closeMobile}>Events</a></li>
				<li class="pt-4">
					<a href="https://onrealm.org/fbcwimberley/give/now" target="_blank" rel="noopener noreferrer" class="btn btn-accent hover:btn-accent-hover w-full justify-center" onclick={closeMobile}>Give</a>
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

	/* Chevron rotation handled by global .rotated utility */
</style>
