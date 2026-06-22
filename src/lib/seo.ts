export const siteUrl = 'https://fbcwimberley.com';
export const siteName = 'First Baptist Church Wimberley';
export const siteDescription =
	'First Baptist Church Wimberley is a church in Wimberley, Texas with Sunday worship at 9:30 and 11:00 AM, groups, ministries, events, and next steps for families.';
export const siteLastModified = '2026-06-22';

export const churchInfo = {
	name: siteName,
	url: siteUrl,
	logo: `${siteUrl}/favicon.png`,
	telephone: '+15128479035',
	email: 'office@fbcwimberley.com',
	streetAddress: '15951 Winters Mill Parkway',
	addressLocality: 'Wimberley',
	addressRegion: 'TX',
	postalCode: '78676',
	addressCountry: 'US',
	sameAs: [
		'https://twitter.com/fbc_wimberley',
		'https://www.facebook.com/firstwimberley',
		'https://www.youtube.com/channel/UCBR1Vcq5wc2L6QFa9U2FTJw',
		'https://www.instagram.com/fbc_wimberley/'
	]
};

export const sitemapRoutes = [
	{ path: '/', priority: '1.0' },
	{ path: '/about-us/our-story', priority: '0.8' },
	{ path: '/about-us/mission-vision-values', priority: '0.7' },
	{ path: '/about-us/our-team', priority: '0.7' },
	{ path: '/connect', priority: '0.9' },
	{ path: '/watch', priority: '0.8' },
	{ path: '/events', priority: '0.9' },
	{ path: '/events/family-life-weekend', priority: '0.7' },
	{ path: '/ministries', priority: '0.8' },
	{ path: '/ministries/family-milestones', priority: '0.7' },
	{ path: '/ministries/kids-day-out', priority: '0.7' },
	{ path: '/ministries/kids-ministry', priority: '0.7' },
	{ path: '/ministries/student-ministry', priority: '0.7' },
	{ path: '/ministries/womens-ministry', priority: '0.7' },
	{ path: '/ministries/care', priority: '0.7' },
	{ path: '/ministries/missions', priority: '0.7' },
	{ path: '/serve-the-church', priority: '0.7' },
	{ path: '/serve-the-community', priority: '0.7' },
	{ path: '/chairqr', priority: '0.5' },
	{ path: '/kdo-back-to-school', priority: '0.5' }
] as const;

export function canonicalUrl(pathname: string) {
	const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
	return `${siteUrl}${normalizedPath === '/' ? '/' : normalizedPath}`;
}
