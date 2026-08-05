import type { LayoutServerLoad } from './$types';
import { HOME_PROMO_BANNER_KEY, HOME_PROMO_STARTS_AT_MS } from '$lib/homePromo';

const HOME_PROMO_BANNER_ENABLED = true;

export const load: LayoutServerLoad = async ({ cookies, url }) => {
	const rawHideUntil = cookies.get(HOME_PROMO_BANNER_KEY);
	const hideUntil = rawHideUntil ? Number(decodeURIComponent(rawHideUntil)) : 0;
	const now = Date.now();
	const bannerDismissed = Number.isFinite(hideUntil) && hideUntil > now;
	const bannerIsUpcoming = now < HOME_PROMO_STARTS_AT_MS;

	if (rawHideUntil && !bannerDismissed) {
		cookies.delete(HOME_PROMO_BANNER_KEY, { path: '/' });
	}

	return {
		showHomePromoBanner:
			HOME_PROMO_BANNER_ENABLED && bannerIsUpcoming && url.pathname === '/' && !bannerDismissed
	};
};
