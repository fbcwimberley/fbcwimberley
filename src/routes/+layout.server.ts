import type { LayoutServerLoad } from './$types';

const FAMILY_LIFE_WEEKEND_BANNER_KEY = 'family-life-weekend-banner-dismissed';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const rawHideUntil = cookies.get(FAMILY_LIFE_WEEKEND_BANNER_KEY);
	const hideUntil = rawHideUntil ? Number(rawHideUntil) : 0;
	const now = Date.now();

	if (!Number.isFinite(hideUntil) || hideUntil <= now) {
		if (rawHideUntil) {
			cookies.delete(FAMILY_LIFE_WEEKEND_BANNER_KEY, { path: '/' });
		}

		return {
			showFamilyLifeWeekendBanner: true
		};
	}

	return {
		showFamilyLifeWeekendBanner: false
	};
};
