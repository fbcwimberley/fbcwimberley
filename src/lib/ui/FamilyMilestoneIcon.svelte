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
		<circle cx="24" cy="11" r="5"></circle>
		<circle cx="13" cy="17" r="4"></circle>
		<circle cx="35" cy="17" r="4"></circle>
		<path d="M17 35c0-5 3-8.5 7-8.5s7 3.5 7 8.5"></path>
		<path d="M7.5 35c0-4.8 3-8 7-8"></path>
		<path d="M33.5 27c4 0 7 3.2 7 8"></path>
		<path d="M24 18v6.5"></path>
	{:else if icon === 'bible'}
		<path d="M9 10c0-2 1.6-3.5 3.6-3.5H24v32H12.6C10.6 38.5 9 40 9 42"></path>
		<path d="M24 6.5h11.4C37.4 6.5 39 8 39 10v32c0-2-1.6-3.5-3.6-3.5H24"></path>
		<path d="M24 11v27.5"></path>
		<path d="M18 16v10"></path>
		<path d="M13 21h10"></path>
	{:else if icon === 'sprout'}
		<path d="M24 39V24"></path>
		<path d="M24 25c-7.5-.7-12.5-5.4-13-12.5C18.4 12.8 23.2 17.4 24 25Z"></path>
		<path d="M24 25c7.5-.7 12.5-5.4 13-12.5C29.6 12.8 24.8 17.4 24 25Z"></path>
		<path d="M17 39h14"></path>
	{:else if icon === 'fingerprint'}
		<path d="M24 5.6c8.8 0 15.5 6.7 15.5 15.7 0 8.3-2.7 14.7-7.5 19.8"></path>
		<path d="M19.4 40.8c-5.8-5.2-9-12.2-9-19.8 0-8.8 5.9-15.4 13.6-15.4"></path>
		<path d="M24 9.2c6.8 0 11.9 5.1 11.9 12.1 0 7.1-2.2 12.6-6.2 16.9"></path>
		<path d="M16.2 37.5c-3.8-4.6-5.8-10.1-5.8-16.1"></path>
		<path d="M24 12.7c4.9 0 8.6 3.7 8.6 8.8 0 6.1-1.8 10.9-5 14.6"></path>
		<path d="M18.9 34.7c-2.8-3.9-4.2-8.4-4.2-13.2 0-5.1 3.8-8.8 9.3-8.8"></path>
		<path d="M24 16.2c3.1 0 5.3 2.3 5.3 5.5 0 5.1-1.4 9.1-3.9 12.5"></path>
		<path d="M21.3 32.6c-2.1-3.2-3.1-6.8-3.1-10.9 0-3.2 2.3-5.5 5.8-5.5"></path>
		<path d="M24 19.8c1.2 0 2 .9 2 2.2 0 3.8-1 7-2.8 9.7"></path>
		<path d="M22.1 28.3c-.5-2-.8-4.1-.8-6.4 0-1.2.9-2.1 2.7-2.1"></path>
		<path d="M13.4 16.9c1.8-4.1 5.7-6.7 10.6-6.7"></path>
		<path d="M11.3 25.9c-.3-1.5-.5-3.1-.5-4.7"></path>
		<path d="M15.4 12.6c2.2-2.1 5.1-3.3 8.6-3.3"></path>
		<path d="M34.8 13.6c2 2.3 3.1 5.1 3.1 8.3"></path>
		<path d="M35.6 25c-.4 4.9-2 9.3-4.8 13.3"></path>
		<path d="M32.4 29.1c-.8 3.2-2.1 6-4 8.4"></path>
		<path d="M30.1 32.8c-.8 1.9-1.8 3.7-3 5.2"></path>
		<path d="M16.6 28.4c-.5-2.1-.8-4.3-.8-6.7"></path>
	{:else if icon === 'signpost'}
		<path d="M24 7v34"></path>
		<path d="M24 9h13l-4 4.5 4 4.5H24"></path>
		<path d="M24 18H10l4 4.5-4 4.5h14"></path>
		<path d="M24 30h12l-3.5 4 3.5 4H24"></path>
	{:else if icon === 'globe'}
		<circle cx="24" cy="24" r="17"></circle>
		<path d="M7.5 24h33"></path>
		<path d="M24 7c5 4.6 7.8 10.4 7.8 17S29 36.4 24 41"></path>
		<path d="M24 7c-5 4.6-7.8 10.4-7.8 17S19 36.4 24 41"></path>
		<path d="M11.5 14.5c3.8 1.8 8 2.7 12.5 2.7s8.7-.9 12.5-2.7"></path>
		<path d="M11.5 33.5c3.8-1.8 8-2.7 12.5-2.7s8.7.9 12.5 2.7"></path>
	{:else}
		<path d="M8.5 37 14 13.5 24 24l10-10.5L39.5 37h-31Z"></path>
		<path d="M16.5 31.5 24 24.5l7.5 7"></path>
		<path d="M18.5 13.5 24 7.5l5.5 6"></path>
	{/if}
</svg>
