import type { PageServerLoad } from './$types';
import { getUpcomingEvents } from '$lib/server/planningCenter';

export const load: PageServerLoad = async () => {
	const events = await getUpcomingEvents();

	return {
		events
	};
};
