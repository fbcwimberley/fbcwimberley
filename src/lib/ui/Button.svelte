<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Variant = 'primary' | 'accent' | 'outline' | 'outline-dark';

	type Props = {
		variant?: Variant;
		href?: string;
		class?: string;
		children: Snippet;
	} & (HTMLAnchorAttributes | HTMLButtonAttributes);

	let { variant = 'primary', href, class: className = '', children, ...rest }: Props = $props();

	const variantClasses: Record<Variant, string> = {
		primary: 'btn btn-primary hover:btn-primary-hover',
		accent: 'btn btn-accent hover:btn-accent-hover',
		outline: 'btn btn-outline hover:btn-outline-hover',
		'outline-dark': 'btn btn-outline-dark hover:btn-outline-dark-hover'
	};

	const classes = $derived(`${variantClasses[variant]} arrow-slide-hover ${className}`.trim());
</script>

{#if href}
	<a {href} class={classes} {...(rest as HTMLAnchorAttributes)}>
		{@render children()}
	</a>
{:else}
	<button class={classes} {...(rest as HTMLButtonAttributes)}>
		{@render children()}
	</button>
{/if}
