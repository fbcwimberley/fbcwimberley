import type { PageServerLoad } from './$types';
import { getFamilyLifeWeekendEvent } from '$lib/server/planningCenter';

export const load: PageServerLoad = async () => {
	const event = await getFamilyLifeWeekendEvent();

	return {
		event
	};
};
