<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	type Props = {
		hover?: boolean;
		glass?: boolean;
		href?: string;
		class?: string;
		children: Snippet;
	} & Omit<HTMLAnchorAttributes, 'href'>;

	let { hover = true, glass = false, href, class: className = '', children, ...rest }: Props = $props();

	const base = $derived(glass ? 'glass-card' : 'card-base');
	const hoverClass = $derived(hover ? (glass ? 'card-hover-glass' : 'card-hover-lift') : '');
	const classes = $derived(`${base} ${hoverClass} ${className}`.trim());
</script>

{#if href}
	<a {href} class={classes} {...rest}>
		{@render children()}
	</a>
{:else}
	<div class={classes}>
		{@render children()}
	</div>
{/if}

<style>
	:global(.card-hover-glass) {
		transition:
			transform 400ms var(--ease-spring),
			background 300ms ease,
			border-color 300ms ease;
	}

	:global(.card-hover-glass:hover) {
		transform: translateY(-4px);
		background: rgba(255, 255, 255, 0.12);
		border-color: rgba(255, 255, 255, 0.25);
	}
</style>
