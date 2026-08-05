export const HOME_PROMO_BANNER_KEY = 'one-gathering-banner-dismissed';
export const HOME_PROMO_MESSAGE = 'One Gathering Begins August 23 — 10:30 AM';
export const HOME_PROMO_STARTS_AT = '2026-08-23T10:30:00-05:00';
export const HOME_PROMO_STARTS_AT_MS = Date.parse(HOME_PROMO_STARTS_AT);

export type HomePromoCountdown = {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
};

export function getHomePromoCountdown(nowMs: number): HomePromoCountdown {
	const totalSeconds = Math.max(0, Math.ceil((HOME_PROMO_STARTS_AT_MS - nowMs) / 1000));

	return {
		days: Math.floor(totalSeconds / 86_400),
		hours: Math.floor((totalSeconds % 86_400) / 3_600),
		minutes: Math.floor((totalSeconds % 3_600) / 60),
		seconds: totalSeconds % 60
	};
}
