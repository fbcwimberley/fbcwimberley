export type StaffMember = {
	name: string;
	title: string;
	email?: string;
	image: string;
	bio?: string;
	group: 'elders' | 'team';
	sortOrder?: number;
};

export type Faq = {
	question: string;
	answer: string;
	link?: {
		text: string;
		href: string;
	};
};

const staff: StaffMember[] = [
	{
		name: 'Dr. Aaron T. Colyer',
		title: 'Lead Pastor, Elder',
		email: 'pastoraaron@fbcwimberley.com',
		image: '/images/remote/fbcwimberley.com-Aaron-Colyer-1024x683-1074cb0cd4.webp',
		bio: 'Aaron and his sweet bride Krista married in 2006. They have three amazing kids. He has a passion for equipping the saints for the work of ministry and a desire to see all believers take the gospel to the ends of the earth. This includes a focus on family discipleship and making Christ the center of every home. Born and raised in Texas, he received a B.S. in Communications from the University of Texas in Austin, his M.Div. and Doctorate in Leadership from The Southern Baptist Theological Seminary. Outside of ministry you can find Aaron enjoying family time and spending as much time as possible outdoors.',
		group: 'elders',
		sortOrder: 1
	},
	{
		name: 'Mike Gibbons',
		title: 'Executive Pastor, Elder',
		email: 'mike@fbcwimberley.com',
		image: '/images/remote/fbcwimberley.com-Mike-Gibbons-1024x683-2f1c6e26df.webp',
		group: 'elders',
		sortOrder: 2
	},
	{
		name: 'Isak Morehous',
		title: 'Minister to Students and Families',
		email: 'isak@fbcwimberley.com',
		image: '/images/remote/fbcwimberley.com-Isak-Morehous-1024x683-ee783f0330.webp',
		group: 'team'
	},
	{
		name: 'Dan Stephens',
		title: 'Minister to Senior Adults',
		email: 'dan@fbcwimberley.com',
		image: '/images/remote/fbcwimberley.com-Dan-Stephens-1024x683-a9e78e5ea3.webp',
		group: 'team'
	},
	{
		name: 'Melinda Tyler',
		title: 'Ministry Director to Kids and Families',
		email: 'melinda@fbcwimberley.com',
		image: '/images/remote/fbcwimberley.com-Melinda-Tyler-1024x683-7a941d1419.webp',
		group: 'team'
	},
	{
		name: 'Nancy Williams',
		title: 'Life Coach and Consultant',
		email: 'nancy@fbcwimberley.com',
		image: '/images/remote/fbcwimberley.com-Nancy-Williams-1024x683-b1aa2041fe.webp',
		group: 'team'
	},
	{
		name: 'Jake Kral',
		title: 'Minister Of Music and Creative Arts',
		email: 'music@fbcwimberley.com',
		image: '/images/remote/fbcwimberley.com-Jake-Kral-1024x683-46b52e12fe.webp',
		group: 'team'
	},
	{
		name: 'Marty Beard',
		title: 'Church Administrative Professional',
		email: 'marty@fbcwimberley.com',
		image: '/images/remote/fbcwimberley.com-Marty-Beard-1024x683-87f60b485d.webp',
		group: 'team'
	},
	{
		name: 'Steve Youngblood',
		title: 'Facilities Assistant',
		email: 'office@fbcwimberley.com',
		image: '/images/remote/fbcwimberley.com-Steve-Youngblood-1024x683-02a37e5c5d.webp',
		group: 'team'
	},
	{
		name: 'Shelby Hubbard',
		title: "Kid's Day Out Director",
		email: 'shelby@fbcwimberley.com',
		image: '/images/remote/fbcwimberley.com-Shelby-Hubbard-1024x683-f8483bfe86.webp',
		group: 'team'
	},
	{
		name: 'Shannon Tyson',
		title: 'Finance',
		email: 'financial@fbcwimberley.com',
		image: '/images/remote/fbcwimberley.com-Your-paragraph-text-2-1024x683-81878c9601.webp',
		group: 'team'
	},
	{
		name: 'John Dunn',
		title: 'Non-Staff Pastor, Elder',
		image: '/images/remote/fbcwimberley.com-John-Dunn-1024x683-7d658997a3.webp',
		group: 'elders',
		sortOrder: 3
	},
	{
		name: 'Mike Stevens',
		title: 'Non-Staff Pastor, Elder',
		image: '/images/remote/fbcwimberley.com-Mike-Stephens-1024x683-135df65071.webp',
		group: 'elders',
		sortOrder: 4
	}
];

function getLastName(name: string) {
	return name.trim().split(/\s+/).at(-1) ?? name;
}

export const elders = staff
	.filter((member) => member.group === 'elders')
	.sort((a, b) => (a.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.sortOrder ?? Number.MAX_SAFE_INTEGER));

export const team = staff
	.filter((member) => member.group === 'team')
	.sort((a, b) => getLastName(a.name).localeCompare(getLastName(b.name)));

export const faqs: Faq[] = [
	{
		question: 'Where Do I Park?',
		answer: "Parking at FBC Wimberley is easy. We've got tons of paved parking just out front of our Worship Center."
	},
	{
		question: 'What Is Available For Kids?',
		answer: 'The kids and student ministry at FBC Wimberley is an incredible opportunity for your kids to have fun and learn about Jesus in a safe environment each Sunday! All of our volunteers are trained and background checked. We also offer easy and secure check-in to make drop off a breeze.'
	},
	{
		question: 'What Is A Typical Gathering Like?',
		answer: "Our gatherings are created to provide an environment where you can encounter God whether you've been a believer for decades or have never even heard of Jesus. A typical worship gathering will include three to four songs, a practical teaching time that lasts about thirty minutes, and multiple times of prayer."
	},
	{
		question: 'What Should I Wear?',
		answer: "You'll see everything from suits to T-shirts and shorts. Wear what makes you feel comfortable-you're among family here!"
	},
	{
		question: 'What Times Are Your Sunday Gatherings?',
		answer: 'You can join us each Sunday at 9:30AM and 11:00AM for our worship gatherings. Childcare is provided during both gatherings.'
	},
	{
		question: 'What Do You Believe?',
		answer: 'FBC Wimberley is a Bible-based, Jesus loving church who is committed to the doctrines and theology as laid out in the Baptist Faith and Message of 2000.',
		link: { text: 'Read that document here', href: 'https://bfm.sbc.net/bfm2000/' }
	},
	{
		question: 'How Can I Get More Involved?',
		answer: 'Great question. There are lots of ways to plug in here at FBC Wimberley. The best way is to either visit the "Ministries" or "Groups" section of our website. Or if you\'d like to have a conversation you can email dan@fbcwimberley.com to meet with one of our Pastors.'
	},
	{
		question: 'How Do I Join A Group?',
		answer: 'Groups are the heartbeat of FBC Wimberley because we believe God did not mean for life to be lived alone.',
		link: { text: 'See all of our available groups', href: 'https://fbcwimberley.churchcenter.com/groups' }
	}
];
