import type { LayoutServerLoad } from './$types';

const HOME_PROMO_BANNER_KEY = 'vbs-banner-dismissed';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
	const rawHideUntil = cookies.get(HOME_PROMO_BANNER_KEY);
	const hideUntil = rawHideUntil ? Number(decodeURIComponent(rawHideUntil)) : 0;
	const bannerDismissed = Number.isFinite(hideUntil) && hideUntil > Date.now();

	if (rawHideUntil && !bannerDismissed) {
		cookies.delete(HOME_PROMO_BANNER_KEY, { path: '/' });
	}

	return {
		showHomePromoBanner: url.pathname === '/' && !bannerDismissed
	};
};
