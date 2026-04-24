<script lang="ts">
	import type { FamilyMilestoneIcon as IconName } from '$lib/familyMilestones';

	type Props = {
		icon: IconName;
	};

	let { icon }: Props = $props();
</script>

<svg
	viewBox="0 0 48 48"
	fill="none"
	stroke="currentColor"
	stroke-width="2.5"
	stroke-linecap="round"
	stroke-linejoin="round"
	aria-hidden="true"
>
	{#if icon === 'family'}
		<circle cx="24" cy="12.5" r="4.5"></circle>
		<circle cx="14" cy="17.5" r="3.5"></circle>
		<circle cx="34" cy="17.5" r="3.5"></circle>
		<path d="M24 18v12"></path>
		<path d="M18 23h12"></path>
		<path d="M11 31c0-4 2.8-6.5 7-6.5"></path>
		<path d="M30 24.5c4.2 0 7 2.5 7 6.5"></path>
		<path d="M18 37c0-4 2.5-7 6-7s6 3 6 7"></path>
	{:else if icon === 'bible'}
		<path d="M10 11.5c0-2 1.5-3.5 3.5-3.5H24v28H13.5c-2 0-3.5 1.5-3.5 3.5"></path>
		<path d="M24 8h10.5c2 0 3.5 1.5 3.5 3.5V39c0-1.9-1.5-3.5-3.5-3.5H24"></path>
		<path d="M24 12v23"></path>
		<path d="M18.5 16.5v8"></path>
		<path d="M14.5 20.5h8"></path>
	{:else if icon === 'backpack'}
		<path d="M17 18.5v-3.5c0-3.3 2.7-6 6-6h2c3.3 0 6 2.7 6 6v3.5"></path>
		<path d="M14 17.5h20c2.2 0 4 1.8 4 4v14c0 2.2-1.8 4-4 4H14c-2.2 0-4-1.8-4-4v-14c0-2.2 1.8-4 4-4"></path>
		<path d="M16 24h16"></path>
		<path d="M20 24v5"></path>
		<path d="M28 24v5"></path>
		<path d="M18 17.5h12"></path>
	{:else if icon === 'fingerprint'}
		<path d="M24 10.5c6.2 0 11 4.6 11 10.8 0 7.2-3.4 13.2-6.3 16.2"></path>
		<path d="M24 16.5c3.2 0 5.8 2.4 5.8 5.7 0 5-2.3 9.4-4.5 12"></path>
		<path d="M24 22c1.1 0 2 .8 2 2 0 2.8-1.2 5.5-2.4 7.4"></path>
		<path d="M14 37.5c-1.8-2.4-3-5.8-3-10 0-7.8 5.7-14 13-14"></path>
		<path d="M18 38.5c-1.7-2.3-2.8-5.1-2.8-8.7 0-4.9 3.6-8.8 8.3-8.8"></path>
		<path d="M31.5 11.5c2.3 1.2 4.2 3 5.6 5.3"></path>
	{:else if icon === 'signpost'}
		<path d="M24 8v31"></path>
		<path d="M24 10h11l-3.5 4 3.5 4H24"></path>
		<path d="M24 18H12l3.5 4L12 26h12"></path>
		<path d="M24 29h10l-3 3.5 3 3.5H24"></path>
	{:else if icon === 'globe'}
		<circle cx="24" cy="24" r="15"></circle>
		<path d="M9.5 24h29"></path>
		<path d="M24 9c4.5 4 7 9.2 7 15s-2.5 11-7 15"></path>
		<path d="M24 9c-4.5 4-7 9.2-7 15s2.5 11 7 15"></path>
		<path d="M13 15c3.3 1.5 7 2.2 11 2.2S31.7 16.5 35 15"></path>
		<path d="M13 33c3.3-1.5 7-2.2 11-2.2S31.7 31.5 35 33"></path>
	{:else}
		<path d="M10 35.5 14.5 16 24 24l9.5-8 4.5 19.5H10Z"></path>
		<path d="M17.5 31.5 24 25.5l6.5 6"></path>
		<path d="M19 14.5 24 9l5 5.5"></path>
	{/if}
</svg>
