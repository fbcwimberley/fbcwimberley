export type FamilyMilestoneIcon =
	| 'family'
	| 'bible'
	| 'backpack'
	| 'fingerprint'
	| 'signpost'
	| 'globe'
	| 'crown';

export type FamilyMilestoneEvent = {
	label: 'Church Event' | 'Family Event';
	value: string;
};

export type FamilyMilestone = {
	number: number;
	title: string;
	ministryDepartment: string;
	targetAudience: string;
	events: FamilyMilestoneEvent[];
	parentTraining: string[];
	accent: string;
	surface: string;
	icon: FamilyMilestoneIcon;
};

export const familyMilestoneRoute = '/ministries/family-milestones';

export const familyMilestones: FamilyMilestone[] = [
	{
		number: 1,
		title: 'Family Dedication',
		ministryDepartment: 'Kids Ministry',
		targetAudience: 'Birth - 4 year olds',
		events: [{ label: 'Church Event', value: 'Family Dedication' }],
		parentTraining: [
			'Milestone 1 training introduces you to the Milestone Pathway. We discuss what it means to be the Primary Faith Trainer (PFT) in your home. We also cover topics such as the Blessing Cards, Core Values, Faith Talks and God Moments. This training will help equip parents to intentionally and spontaneously talk about the things of God and disciple the next generation in their homes, raising them in the way they should go.'
		],
		accent: '#3b8f5b',
		surface: 'rgba(59, 143, 91, 0.12)',
		icon: 'family'
	},
	{
		number: 2,
		title: 'Gospel Foundations',
		ministryDepartment: 'Kids Ministry',
		targetAudience: '2 year olds - 5th Grade',
		events: [{ label: 'Church Event', value: 'Kindergarten Bible' }],
		parentTraining: [
			'Milestone 2 training focuses on the season of life when parents are laying the groundwork to help their children understand who Jesus is and why salvation matters. We\'ll discuss common questions and pressures parents face: How do we recognize genuine faith in our children? What is the difference between childlike faith and saving faith? How do we avoid giving false assurance while still encouraging real belief? As primary faith trainers, parents are called to lay a strong foundation and trust God to build faith in their children\'s hearts (Psalm 127:1).',
			'Another part of milestone two is welcoming Kindergarteners into the worship gathering with their family. The summer before a child begins Kindergarten, we have a training for parents to be equipped with helping their child to learn and experience God through worshipping in church as a family. After the training, during a Sunday Morning Gathering, we give each entering Kindergartener a Bible!'
		],
		accent: '#4d92ca',
		surface: 'rgba(77, 146, 202, 0.12)',
		icon: 'bible'
	},
	{
		number: 3,
		title: 'Preparing for Adolescence',
		ministryDepartment: 'Kids Ministry',
		targetAudience: '3rd and 5th Graders',
		events: [{ label: 'Family Event', value: 'Purity Weekend Roadtrip' }],
		parentTraining: [
			'The Milestone 3 training helps parents prepare to lead their child through the upcoming spiritual, emotional, physical, and social changes that come with pre-teen and teen years. At its core, Christian purity is motivated by seeking to keep Jesus in the first place in your heart. We provide guidance on how and when to have multiple conversations known as "the talk" with your child as well as help equip you for the teenage years ahead.'
		],
		accent: '#d4a63c',
		surface: 'rgba(212, 166, 60, 0.12)',
		icon: 'backpack'
	},
	{
		number: 4,
		title: 'Identity Formation',
		ministryDepartment: 'Student Ministry',
		targetAudience: '6th - 9th Grade',
		events: [{ label: 'Family Event', value: '13th Birthday Blessing Letter' }],
		parentTraining: [
			'Having an identity that is rooted in who God says that you are, rather than the world, is a foundation that influences every aspect of your teenager\'s life. The Primary Faith Trainer (PFT) plays a pivotal role in reinforcing that their teen\'s identity is not rooted in the things that they do, but rather in what the Bible says about their place in this world. This training will equip you to have conversations with your teenager about friendships, purity, and faith, all with the distinct purpose of helping your teenager firmly establish their identity in Christ.'
		],
		accent: '#8b63bf',
		surface: 'rgba(139, 99, 191, 0.12)',
		icon: 'fingerprint'
	},
	{
		number: 5,
		title: 'Passage to Adulthood',
		ministryDepartment: 'Student Ministry',
		targetAudience: '10th - 12th Grade',
		events: [{ label: 'Family Event', value: 'Rite of Passage Ceremony' }],
		parentTraining: [
			'Getting your driver\'s license is a big deal. With this new found freedom also comes a new level of independence, as well as significant changes in the social life of your teen. We will discuss tips on how to empower your students, and how to stay connected and invested in their lives while giving them space to grow as an adult. Our desire is to equip you to have adult conversations with your teen about standing for truth and living on mission. The goal is for the Primary Faith Trainer (PFT) to identify and inform that their teenager is now ready to live as an adult in their home. This can be formalized by a \'Rite of Passage Ceremony\' that is celebrated as a family.'
		],
		accent: '#d97a4a',
		surface: 'rgba(217, 122, 74, 0.12)',
		icon: 'signpost'
	},
	{
		number: 6,
		title: 'Launch into the World',
		ministryDepartment: 'Student Ministry',
		targetAudience: '12th Grade',
		events: [
			{ label: 'Church Event', value: 'Grad Sunday' },
			{ label: 'Family Event', value: 'Written Blessing Letter Ceremony' }
		],
		parentTraining: [
			'High School graduation is a momentous occasion in the life of every person\'s life. It marks the end of one chapter, as well as the beginning of the next. We celebrate on Sunday by recognizing graduates during our worship gathering, as well as a lunch after the service. It is during this lunch that you will present your graduate with a hand written blessing letter. In this letter, you affirm unique aspects of their lives where God has grown them and how you are excited to see them make a difference for His glory in the world.'
		],
		accent: '#3da7a5',
		surface: 'rgba(61, 167, 165, 0.12)',
		icon: 'globe'
	},
	{
		number: 7,
		title: 'Life in Christ',
		ministryDepartment: 'Adult Ministry',
		targetAudience: 'All Church Family',
		events: [{ label: 'Church Event', value: 'Family Life Weekend' }],
		parentTraining: [
			'Walking with Jesus is a lifelong journey filled with ups and downs. We must learn to submit and surrender to Jesus in all areas of our lives, including our family, finances, careers, and ministry assignments. We partner with a local church both in mission and in ministry as we magnify Christ and share the Gospel. We set an example of obedience to the next generation.'
		],
		accent: '#5e9d54',
		surface: 'rgba(94, 157, 84, 0.12)',
		icon: 'crown'
	}
];

export function pickFamilyMilestones(numbers: number[]) {
	const wanted = new Set(numbers);

	return familyMilestones.filter((milestone) => wanted.has(milestone.number));
}
