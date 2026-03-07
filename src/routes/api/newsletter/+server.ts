import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const NEWSLETTER_TAG = 'Weekly Contact (God Time/Shoutout)';

async function toSubscriberHash(email: string): Promise<string> {
	// @ts-expect-error Node built-in types are not installed in this project.
	const { createHash } = await import('node:crypto');
	return createHash('md5').update(email.trim().toLowerCase()).digest('hex');
}

export const POST: RequestHandler = async ({ request, fetch }) => {
	const apiKey = env.MAILCHIMP_API_KEY;
	const audienceId = env.MAILCHIMP_AUDIENCE_ID ?? env.MAILCHIMP_LIST_ID;

	if (!apiKey || !audienceId) {
		return json(
			{
				error: 'Newsletter configuration is missing. Set MAILCHIMP_API_KEY and MAILCHIMP_AUDIENCE_ID (or MAILCHIMP_LIST_ID).'
			},
			{ status: 500 }
		);
	}

	const dataCenter = apiKey.split('-')[1];
	if (!dataCenter) {
		return json({ error: 'MAILCHIMP_API_KEY must include a data center suffix (for example: -us21).' }, { status: 500 });
	}

	let payload: { firstName?: string; lastName?: string; email?: string };
	try {
		payload = await request.json();
	} catch {
		return json({ error: 'Invalid JSON body.' }, { status: 400 });
	}

	const firstName = payload.firstName?.trim();
	const lastName = payload.lastName?.trim();
	const email = payload.email?.trim().toLowerCase();

	if (!firstName || !lastName || !email) {
		return json({ error: 'First name, last name, and email are required.' }, { status: 400 });
	}

	const subscriberHash = await toSubscriberHash(email);
	const mailchimpUrl = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

	const upstream = await fetch(mailchimpUrl, {
		method: 'PUT',
		headers: {
			Authorization: `Basic ${btoa(`anystring:${apiKey}`)}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email_address: email,
			status_if_new: 'subscribed',
			merge_fields: {
				FNAME: firstName,
				LNAME: lastName
			},
			tags: [NEWSLETTER_TAG]
		})
	});

	if (!upstream.ok) {
		const errorText = await upstream.text();
		return json(
			{
				error: 'Mailchimp subscription failed.',
				details: errorText
			},
			{ status: upstream.status }
		);
	}

	return json({ ok: true });
};
