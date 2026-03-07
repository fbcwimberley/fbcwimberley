import { writable } from 'svelte/store';
import { browser } from '$app/environment';

type Theme = 'light' | 'dark' | 'system';

function getInitialTheme(): Theme {
	if (browser) {
		return (localStorage.getItem('theme') as Theme) || 'system';
	}
	return 'system';
}

function getEffectiveTheme(theme: Theme): 'light' | 'dark' {
	if (theme === 'system' && browser) {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	return theme === 'dark' ? 'dark' : 'light';
}

export const themePreference = writable<Theme>(getInitialTheme());

export function applyTheme(theme: Theme) {
	if (!browser) return;

	const effective = getEffectiveTheme(theme);

	if (effective === 'dark') {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.remove('dark');
	}

	if (theme === 'system') {
		localStorage.removeItem('theme');
	} else {
		localStorage.setItem('theme', theme);
	}
}

export function toggleTheme() {
	themePreference.update((current) => {
		const effective = getEffectiveTheme(current);
		const next: Theme = effective === 'dark' ? 'light' : 'dark';
		applyTheme(next);
		return next;
	});
}

export function initThemeListener() {
	if (!browser) return;

	const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
	mediaQuery.addEventListener('change', () => {
		const stored = localStorage.getItem('theme') as Theme | null;
		if (!stored) {
			applyTheme('system');
		}
	});

	// Apply on init
	const initial = getInitialTheme();
	applyTheme(initial);
}
