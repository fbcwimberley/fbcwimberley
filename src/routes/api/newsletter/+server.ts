import { env } from '$env/dynamic/private';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const NEWSLETTER_TAG = 'Weekly Contact (God Time/Shoutout)';

type MailchimpErrorResponse = {
	detail?: unknown;
	errors?: unknown;
	title?: unknown;
};

async function toSubscriberHash(email: string): Promise<string> {
	// @ts-expect-error Node built-in types are not installed in this project.
	const { createHash } = await import('node:crypto');
	return createHash('md5').update(email.trim().toLowerCase()).digest('hex');
}

function getMailchimpErrorMessage(responseText: string): string {
	try {
		const response = JSON.parse(responseText) as MailchimpErrorResponse;
		if (typeof response.detail === 'string' && response.detail.trim()) {
			return response.detail.trim();
		}
		if (Array.isArray(response.errors)) {
			const messages = response.errors
				.map((error) => (typeof error === 'object' && error !== null && 'message' in error ? error.message : null))
				.filter((message): message is string => typeof message === 'string' && message.trim().length > 0)
				.map((message) => message.trim());
			if (messages.length > 0) {
				return messages.join(' ');
			}
		}
		if (typeof response.title === 'string' && response.title.trim()) {
			return response.title.trim();
		}
	} catch {
		// Mailchimp may return a non-JSON response for an upstream failure.
	}

	return 'Mailchimp returned an unexpected error.';
}

export const POST: RequestHandler = async ({ request, fetch }) => {
	const apiKey = env.MAILCHIMP_API_KEY?.trim();
	const audienceId = (env.MAILCHIMP_AUDIENCE_ID ?? env.MAILCHIMP_LIST_ID)?.trim();

	if (!apiKey || !audienceId) {
		const missing = [
			!apiKey ? 'MAILCHIMP_API_KEY' : null,
			!audienceId ? 'MAILCHIMP_AUDIENCE_ID (or MAILCHIMP_LIST_ID)' : null
		].filter((name): name is string => name !== null);

		return json(
			{
				error: `Newsletter configuration is missing: ${missing.join(' and ')}.`
			},
			{ status: 500 }
		);
	}

	const dataCenter = apiKey.slice(apiKey.lastIndexOf('-') + 1);
	if (!dataCenter || dataCenter === apiKey) {
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
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return json({ error: 'Please provide a valid email address.' }, { status: 400 });
	}

	const subscriberHash = await toSubscriberHash(email);
	const mailchimpUrl = `https://${dataCenter}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

	try {
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
			const errorMessage = getMailchimpErrorMessage(await upstream.text());
			console.error(
				`Mailchimp newsletter request failed (${upstream.status}): ${errorMessage.replaceAll(email, '[redacted email]')}`
			);
			return json(
				{
					error: `Mailchimp could not subscribe this address: ${errorMessage}`
				},
				{ status: upstream.status >= 400 && upstream.status < 600 ? upstream.status : 502 }
			);
		}
	} catch (error) {
		console.error('Mailchimp newsletter request could not be completed:', error);
		return json({ error: 'Unable to reach Mailchimp right now. Please try again later.' }, { status: 502 });
	}

	return json({ ok: true });
};
