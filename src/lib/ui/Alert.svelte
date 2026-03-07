<script lang="ts">
	import type { Snippet } from 'svelte';

	type Props = {
		type: 'success' | 'error';
		children: Snippet;
	};

	let { type, children }: Props = $props();
</script>

<div class={type === 'success' ? 'alert-success' : 'alert-error'} role="alert">
	{@render children()}
</div>
