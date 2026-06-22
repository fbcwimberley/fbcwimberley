export const homepageQuestions = [
	{
		question: 'What time are Sunday services at First Baptist Church Wimberley?',
		answer: 'First Baptist Church Wimberley gathers for Sunday worship at 9:30 AM and 11:00 AM.'
	},
	{
		question: 'Where is First Baptist Church Wimberley located?',
		answer: 'First Baptist Church Wimberley is located at 15951 Winters Mill Parkway in Wimberley, Texas 78676.'
	},
	{
		question: "What is the best next step if I'm new?",
		answer: 'Start with Plan Your Visit, watch a Sunday service online, or use the Connect page so the church team can help you find groups, ministries, and events.'
	}
] as const;

export const visitorActions = [
	{
		action: 'Plan a Visit',
		bestFor: 'First-time guests and families',
		nextStep: 'See service times, directions, and connection options',
		href: '/connect'
	},
	{
		action: 'Watch Online',
		bestFor: 'Remote worship or previewing a service',
		nextStep: 'Join the Sunday livestream or watch on demand',
		href: '/watch'
	},
	{
		action: 'Join a Group',
		bestFor: 'Adults looking for community',
		nextStep: 'Find a Church Center group',
		href: 'https://fbcwimberley.churchcenter.com/groups'
	},
	{
		action: 'Attend an Event',
		bestFor: 'Families and churchwide gatherings',
		nextStep: 'Browse upcoming events and registrations',
		href: '/events'
	},
	{
		action: 'Take a Next Step',
		bestFor: 'People ready to get connected',
		nextStep: 'Share what you are looking for',
		href: '/connect'
	}
] as const;
