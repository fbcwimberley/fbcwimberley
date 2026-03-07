<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	type Props = {
		variant?: 'glass' | 'light';
		label?: string;
		error?: string;
		id?: string;
		value?: string | number;
	} & Omit<HTMLInputAttributes, 'value' | 'id'>;

	let { variant = 'light', label, error, id, value = $bindable(''), class: className = '', ...rest }: Props = $props();

	const inputId = $derived(id ?? (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined));
	const inputClass = $derived(
		`input-field ${variant === 'glass' ? 'input-glass' : 'input-light'} ${error ? 'input-error-state' : ''} ${className}`.trim()
	);
</script>

<div class="input-wrapper">
	{#if label}
		<label for={inputId} class="input-label">{label}</label>
	{/if}
	<input
		id={inputId}
		class={inputClass}
		bind:value
		aria-invalid={error ? 'true' : undefined}
		aria-describedby={error && inputId ? `${inputId}-error` : undefined}
		{...rest}
	/>
	{#if error}
		<p id={inputId ? `${inputId}-error` : undefined} class="input-error-msg">{error}</p>
	{/if}
</div>

<style>
	.input-wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}

	.input-label {
		font-size: 0.8rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: rgba(255, 255, 255, 0.6);
	}

	:global(.input-glass) {
		width: 100%;
		min-width: 0;
		padding: 0.875rem 1rem;
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: var(--radius-sm);
		background: rgba(255, 255, 255, 0.08);
		color: #ffffff;
		font-size: 1rem;
		font-family: inherit;
		transition: all 200ms ease;
		appearance: none;
	}

	:global(.input-glass::placeholder) {
		color: rgba(255, 255, 255, 0.35);
	}

	:global(.input-glass:focus) {
		outline: none;
		border-color: var(--color-accent);
		background: rgba(255, 255, 255, 0.12);
		box-shadow: 0 0 0 3px var(--color-accent-bg);
	}

	:global(.input-light) {
		width: 100%;
		min-width: 0;
		padding: 0.875rem 1rem;
		border: 1px solid var(--color-input-border);
		border-radius: var(--radius-sm);
		background: var(--color-input-bg);
		color: var(--color-text);
		font-size: 1rem;
		font-family: inherit;
		transition: all 200ms ease;
		appearance: none;
	}

	:global(.input-light::placeholder) {
		color: var(--color-text-muted);
	}

	:global(.input-light:focus) {
		outline: none;
		border-color: var(--color-primary);
		box-shadow: 0 0 0 3px var(--color-primary-light);
	}

	:global(.input-error-state) {
		border-color: var(--color-error-border) !important;
	}

	.input-error-msg {
		font-size: 0.8rem;
		color: var(--color-error-text);
	}
</style>
