# Mailchimp Newsletter Troubleshooting

The homepage newsletter form posts to `/api/newsletter`, which upserts a member through Mailchimp's list-member endpoint and applies the `Weekly Contact (God Time/Shoutout)` tag.

## Known failure behavior

The production endpoint was reachable and Mailchimp returned structured error JSON for an invalid probe, but the route replaced that detail with `Mailchimp subscription failed.` The homepage then displayed only the generic message. The route now extracts Mailchimp's `detail` or `title`, returns it through the existing `error` field, validates email syntax before the upstream request, and handles network failures with a 502 response. It logs status and sanitized error text without logging subscriber data.

## Configuration checks

If a valid address still fails after deployment, use the surfaced Mailchimp message to determine the correction. Check the Vercel **Production** environment variables:

- `MAILCHIMP_API_KEY`: active Marketing API key with its `-usXX` data-center suffix
- `MAILCHIMP_AUDIENCE_ID` (or legacy `MAILCHIMP_LIST_ID`): ID of the target Mailchimp audience

After changing Vercel environment variables, redeploy. Mailchimp API keys stay server-side; never move them into browser code or commit them.
