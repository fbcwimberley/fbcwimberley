import { canonicalUrl, sitemapRoutes, siteLastModified } from '$lib/seo';

function escapeXml(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

export function GET() {
	const urls = sitemapRoutes
		.map(
			(route) => `	<url>
		<loc>${escapeXml(canonicalUrl(route.path))}</loc>
		<lastmod>${siteLastModified}</lastmod>
		<changefreq>weekly</changefreq>
		<priority>${route.priority}</priority>
	</url>`
		)
		.join('\n');

	return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=0, must-revalidate'
		}
	});
}
