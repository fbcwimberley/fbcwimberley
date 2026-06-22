<script lang="ts">
	import Hero from '$lib/components/Hero.svelte';
	import VisitAnswers from '$lib/components/VisitAnswers.svelte';
	import Features from '$lib/components/Features.svelte';
	import Newsletter from '$lib/components/Newsletter.svelte';
	import NextStep from '$lib/components/NextStep.svelte';
	import { homepageQuestions } from '$lib/homepageContent';
	import { canonicalUrl, churchInfo, siteDescription, siteLastModified, siteName, siteUrl } from '$lib/seo';

	const homeUrl = canonicalUrl('/');
	const structuredData = JSON.stringify({
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Church',
				'@id': `${siteUrl}/#church`,
				name: churchInfo.name,
				url: churchInfo.url,
				logo: churchInfo.logo,
				telephone: churchInfo.telephone,
				email: churchInfo.email,
				address: {
					'@type': 'PostalAddress',
					streetAddress: churchInfo.streetAddress,
					addressLocality: churchInfo.addressLocality,
					addressRegion: churchInfo.addressRegion,
					postalCode: churchInfo.postalCode,
					addressCountry: churchInfo.addressCountry
				},
				sameAs: churchInfo.sameAs
			},
			{
				'@type': 'WebSite',
				'@id': `${siteUrl}/#website`,
				name: siteName,
				url: siteUrl,
				publisher: {
					'@id': `${siteUrl}/#church`
				}
			},
			{
				'@type': 'WebPage',
				'@id': `${homeUrl}#webpage`,
				name: siteName,
				description: siteDescription,
				url: homeUrl,
				dateModified: siteLastModified,
				isPartOf: {
					'@id': `${siteUrl}/#website`
				},
				publisher: {
					'@id': `${siteUrl}/#church`
				}
			},
			{
				'@type': 'FAQPage',
				'@id': `${homeUrl}#faq`,
				mainEntity: homepageQuestions.map((item) => ({
					'@type': 'Question',
					name: item.question,
					acceptedAnswer: {
						'@type': 'Answer',
						text: item.answer
					}
				}))
			}
		]
	}).replace(/</g, '\\u003c');
</script>

<svelte:head>
	{@html `<script type="application/ld+json">${structuredData}</script>`}
</svelte:head>

<Hero />
<VisitAnswers />
<Features />
<Newsletter />
<NextStep />
