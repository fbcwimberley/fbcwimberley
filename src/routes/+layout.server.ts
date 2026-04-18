import type { LayoutServerLoad } from './$types';

const FAMILY_LIFE_WEEKEND_BANNER_KEY = 'family-life-weekend-banner-dismissed';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const rawHideUntil = cookies.get(FAMILY_LIFE_WEEKEND_BANNER_KEY);

	if (rawHideUntil) {
		cookies.delete(FAMILY_LIFE_WEEKEND_BANNER_KEY, { path: '/' });
	}

	return {
		showFamilyLifeWeekendBanner: false
	};
};
