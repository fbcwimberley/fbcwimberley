module.exports = {
	ci: {
		collect: {
			startServerCommand: 'bun run preview --host 127.0.0.1 --port 4173',
			startServerReadyPattern: 'Local:',
			url: [
				'http://127.0.0.1:4173/',
				'http://127.0.0.1:4173/connect',
				'http://127.0.0.1:4173/about-us'
			],
			numberOfRuns: 3
		},
		assert: {
			assertions: {
				'categories:accessibility': [
					'error',
					{
						minScore: 1,
						aggregationMethod: 'pessimistic'
					}
				],
				'color-contrast': 'error',
				'heading-order': 'error',
				'button-name': 'error',
				'link-name': 'error',
				'image-alt': 'error',
				'categories:performance': [
					'warn',
					{
						minScore: 0.9,
						aggregationMethod: 'median'
					}
				],
				'largest-contentful-paint': [
					'warn',
					{
						maxNumericValue: 3000,
						aggregationMethod: 'median'
					}
				],
				'cumulative-layout-shift': [
					'error',
					{
						maxNumericValue: 0.1,
						aggregationMethod: 'pessimistic'
					}
				]
			}
		}
	}
};
