<script lang="ts">
	type StaffMember = {
		name: string;
		title: string;
		email?: string;
		image: string;
		bio?: string;
		group: 'elders' | 'team';
		sortOrder?: number;
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

	const elders = staff
		.filter((member) => member.group === 'elders')
		.sort((a, b) => (a.sortOrder ?? Number.MAX_SAFE_INTEGER) - (b.sortOrder ?? Number.MAX_SAFE_INTEGER));

	const team = staff
		.filter((member) => member.group === 'team')
		.sort((a, b) => getLastName(a.name).localeCompare(getLastName(b.name)));

	const faqs = [
		{
			question: 'Where Do I Park?',
			answer: "Parking at FBC Wimberley is easy. We've got tons of paved parking just out front of our Worship Center."
		},
		{
			question: 'What Is Available For Kids?',
			answer: 'The kids and student ministry at FBC Wimberley is an incredible opportunity for your kids to have fun and learn about Jesus in a safe environment each Sunday! All of our volunteers are trained and background checked. We also offer easy and secure check-in to make drop off a breeze. If your child is in Kindergarten or older, they are welcome in the Worship Center for our gathering.'
		},
		{
			question: 'What Is A Typical Gathering Like?',
			answer: "Our gatherings are created to provide an environment where you can encounter God whether you've been a believer for decades or have never even heard of Jesus. A typical worship gathering will include three to four songs, a practical teaching time that lasts about thirty minutes, and multiple times of prayer."
		},
		{
			question: 'What Should I Wear?',
			answer: "You'll see everything from suits to T-shirts and shorts. Wear what makes you feel comfortable\u2014you're among family here!"
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

	const missionValues = [
		{ word: 'Humbly', desc: 'seek God through prayer and worship.' },
		{ word: 'Boldly', desc: 'teach and preach the truth.' },
		{ word: 'Joyfully', desc: 'love and serve each other, our community and the world.' },
		{ word: 'Faithfully', desc: 'equip disciples.' }
	];

	let openFaq = $state<number | null>(null);
	let expandedStaff = $state<string | null>(null);

	function toggleFaq(i: number) {
		openFaq = openFaq === i ? null : i;
	}

	function toggleStaff(name: string) {
		expandedStaff = expandedStaff === name ? null : name;
	}
</script>

<svelte:head>
	<title>About Us - First Baptist Church Wimberley</title>
	<meta name="description" content="Meet the team at First Baptist Church Wimberley, learn our history since 1884, explore our vision and mission, and plan your visit. Sundays at 9:30AM and 11:00AM." />
</svelte:head>

<!-- Hero -->
<section class="relative min-h-[50vh] md:min-h-[55vh] flex items-end justify-center overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/remote/fbcwimberley.com-img-18-1-2fb22432d7.webp')"></div>
	<div class="absolute inset-0 bg-linear-to-t from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.25)]"></div>
	<div class="relative z-1 text-center pb-16">
		<p class="section-label">Welcome Home</p>
		<h1 class="text-[clamp(2.5rem,6vw,4rem)] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)]">Who We Are</h1>
	</div>
</section>

<!-- Our Story -->
<section class="py-20">
	<div class="container max-w-[800px] text-center">
		<p class="section-label">Est. 1884</p>
		<h2 class="text-[clamp(1.75rem,4vw,2.5rem)] mb-6">Our Story</h2>
		<p class="text-[1.05rem] leading-[1.8] text-(--color-text-muted)">
			The history of FBC Wimberley spans back to 1884 when a faithful group of people followed God's call to establish a mission at Jacob's Well. The story of our church, like the story of every person's life, is filled with the marks of God's grace, presence, and calling. Along the way FBC Wimberley has been on mission to be a church FOR our community and our world. FBC Wimberley has had the opportunity to reach our next door neighbors and the nations with the love of Jesus. Join us each Sunday at 9:30AM and 11:00AM to see how God could be writing the next chapter of our story with you!
		</p>
	</div>
</section>

<!-- Vision -->
<section class="relative py-24 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-center lg:bg-fixed" style="background-image: url('/images/remote/fbcwimberley.com-102A5443-scaled-9aa360e309-1600.webp')">
		<div class="dark-overlay"></div>
	</div>
	<div class="container relative z-1 max-w-[800px] text-center">
		<p class="section-label">What Drives Us</p>
		<h2 class="text-[clamp(1.75rem,4vw,2.5rem)] text-white mb-8">Our Vision</h2>
		<div class="glass-card p-6 md:p-10 lg:p-12">
			<p class="text-[1.05rem] text-white/80 leading-[1.8] mb-8">
				At First Baptist Church of Wimberley we exist to truly know Jesus and to make His Truth known. Our heartbeat is to sincerely experience a relationship with Jesus and help you do the same. We're not interested in knowing a Jesus of cold religion or a Jesus that doesn't challenge our living. Our desire is to experience the Truth of the real Jesus of the Bible and introduce him to the world. We'd love to have you join us.
			</p>
			<blockquote class="font-serif text-[1.2rem] italic text-white border-l-3 border-(--color-accent) pl-5 text-left">
				I am the way, and the Truth and the life. No one comes to the Father except through Me.
				<cite class="block mt-2 text-[0.85rem] not-italic text-(--color-accent) font-sans font-semibold">John 14:6</cite>
			</blockquote>
		</div>
	</div>
</section>

<!-- Staff -->
<section class="py-20 bg-(--color-bg-alt)">
	<div class="container text-center">
		<h2 class="text-[clamp(2.1rem,5vw,3.25rem)] mb-10">Meet Our Team</h2>

		<div class="rounded-[var(--radius-lg)] overflow-hidden mb-12">
			<img
				src="/images/remote/fbcwimberley.com-Staff-1024x683-bfe874733d.webp"
				alt="FBC Wimberley Staff"
				loading="lazy"
				class="w-full h-auto object-cover"
			/>
		</div>

		<div class="mb-14">
			<h3 class="text-[clamp(1.5rem,3vw,2rem)] mb-6">Elders</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{#each elders as member}
					<button class="staff-card flex flex-col items-center text-center p-6 bg-(--color-bg-card) border border-(--color-border-light) rounded-[var(--radius-lg)] cursor-pointer transition-all duration-300 w-full hover:border-(--color-border) hover:shadow-(--shadow-sm)" class:expanded={expandedStaff === member.name} onclick={() => toggleStaff(member.name)} aria-expanded={expandedStaff === member.name}>
						<div class="w-[120px] h-[120px] rounded-full overflow-hidden mb-4 border-3 border-(--color-border-light)">
							<img src={member.image} alt={member.name} loading="lazy" class="w-full h-full object-cover" />
						</div>
						<h4 class="font-sans text-base font-semibold text-(--color-heading) mb-1">{member.name}</h4>
						<p class="text-[0.85rem] text-(--color-text-muted) mb-2">{member.title}</p>
						{#if member.email}
							<a href="mailto:{member.email}" class="inline-flex items-center gap-1.5 text-[0.8rem] text-(--color-primary) transition-colors duration-200 hover:text-(--color-primary-hover)" onclick={(e) => e.stopPropagation()}>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
								{member.email}
							</a>
						{/if}
						{#if member.bio && expandedStaff === member.name}
							<p class="text-[0.9rem] text-(--color-text-muted) leading-[1.7] mt-4 text-left">{member.bio}</p>
						{/if}
						{#if member.bio}
							<span class="inline-flex items-center gap-1 mt-3 text-[0.8rem] font-semibold text-(--color-accent)">
								{expandedStaff === member.name ? 'Less' : 'Read more'}
								<svg class:rotated={expandedStaff === member.name} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
							</span>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<div>
			<h3 class="text-[clamp(1.5rem,3vw,2rem)] mb-6">Our Team</h3>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{#each team as member}
					<button class="staff-card flex flex-col items-center text-center p-6 bg-(--color-bg-card) border border-(--color-border-light) rounded-[var(--radius-lg)] cursor-pointer transition-all duration-300 w-full hover:border-(--color-border) hover:shadow-(--shadow-sm)" class:expanded={expandedStaff === member.name} onclick={() => toggleStaff(member.name)} aria-expanded={expandedStaff === member.name}>
						<div class="w-[120px] h-[120px] rounded-full overflow-hidden mb-4 border-3 border-(--color-border-light)">
							<img src={member.image} alt={member.name} loading="lazy" class="w-full h-full object-cover" />
						</div>
						<h4 class="font-sans text-base font-semibold text-(--color-heading) mb-1">{member.name}</h4>
						<p class="text-[0.85rem] text-(--color-text-muted) mb-2">{member.title}</p>
						{#if member.email}
							<a href="mailto:{member.email}" class="inline-flex items-center gap-1.5 text-[0.8rem] text-(--color-primary) transition-colors duration-200 hover:text-(--color-primary-hover)" onclick={(e) => e.stopPropagation()}>
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
								{member.email}
							</a>
						{/if}
						{#if member.bio && expandedStaff === member.name}
							<p class="text-[0.9rem] text-(--color-text-muted) leading-[1.7] mt-4 text-left">{member.bio}</p>
						{/if}
						{#if member.bio}
							<span class="inline-flex items-center gap-1 mt-3 text-[0.8rem] font-semibold text-(--color-accent)">
								{expandedStaff === member.name ? 'Less' : 'Read more'}
								<svg class:rotated={expandedStaff === member.name} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
							</span>
						{/if}
					</button>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Plan Your Visit -->
<section class="relative py-24 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-center lg:bg-fixed" style="background-image: url('/images/remote/fbcwimberley.com-102A6470-scaled-9eb00dbc08-1600.webp')">
		<div class="dark-overlay"></div>
	</div>
	<div class="container relative z-1 max-w-[800px] text-center">
		<p class="section-label">We'd Love To See You</p>
		<h2 class="text-[clamp(1.75rem,4vw,2.5rem)] text-white mb-8">Plan Your Visit</h2>
		<div class="glass-card p-6 md:p-10 lg:p-12">
			<p class="text-[1.05rem] text-white/80 leading-[1.8]">
				Whether you're a young or senior adult, single, or married with kids, you'll feel encouraged by the community we have at FBC Wimberley. You can visit as many times as you want without any obligations or pressure. And who knows&mdash;you just might decide to make FBCW your new church home!
			</p>
		</div>
	</div>
</section>

<!-- FAQs -->
<section class="py-20">
	<div class="container max-w-[800px] text-center">
		<p class="section-label">Got Questions?</p>
		<h2 class="text-[clamp(1.75rem,4vw,2.5rem)] mb-10">FAQs</h2>

		<div class="flex flex-col gap-3 text-left">
			{#each faqs as faq, i}
				<button class="faq-item w-full bg-(--color-bg-card) border border-(--color-border-light) rounded-[var(--radius-md)] py-5 px-6 cursor-pointer transition-all duration-300 text-left hover:border-(--color-border)" class:open={openFaq === i} onclick={() => toggleFaq(i)} aria-expanded={openFaq === i}>
					<div class="flex items-center justify-between gap-4">
						<span class="font-sans text-[0.95rem] font-semibold text-(--color-heading)">{faq.question}</span>
						<svg class:rotated={openFaq === i} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="shrink-0 text-(--color-text-muted) transition-transform duration-200"><polyline points="6 9 12 15 18 9"></polyline></svg>
					</div>
					{#if openFaq === i}
						<div class="mt-4 pt-4 border-t border-(--color-border-light)">
							<p class="text-[0.95rem] text-(--color-text-muted) leading-[1.7]">
								{faq.answer}
								{#if faq.link}
									<a href={faq.link.href} target="_blank" class="font-semibold" onclick={(e) => e.stopPropagation()}>{faq.link.text}</a>
								{/if}
							</p>
						</div>
					{/if}
				</button>
			{/each}
		</div>
	</div>
</section>

<!-- Mission -->
<section class="relative py-24 overflow-hidden">
	<div class="absolute inset-0 bg-cover bg-center lg:bg-fixed" style="background-image: url('/images/remote/fbcwimberley.com-s-h-gue-CjMwAu4-OqY-unsplash-scaled-f09ccd30b3.webp')">
		<div class="dark-overlay"></div>
	</div>
	<div class="container relative z-1 max-w-[900px] text-center">
		<p class="section-label">Our Purpose</p>
		<h2 class="text-[clamp(1.75rem,4vw,2.5rem)] text-white mb-4">Our Mission</h2>
		<p class="text-[1.15rem] text-white/80 mb-10 font-serif italic">We are a Christ-centered family, living out the Word of God, as we&hellip;</p>

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
			{#each missionValues as value}
				<div class="glass-card p-8 px-6 transition-all duration-[400ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:bg-white/12 hover:border-white/25">
					<h3 class="text-[1.3rem] text-(--color-accent) mb-2">{value.word}</h3>
					<p class="text-[0.95rem] text-white/70 leading-relaxed">{value.desc}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Contact -->
<section class="py-20">
	<div class="container max-w-[900px] text-center">
		<p class="section-label">Get In Touch</p>
		<h2 class="text-[clamp(1.75rem,4vw,2.5rem)] mb-10">Contact Us</h2>

		<div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
			<div class="bg-(--color-bg-card) border border-(--color-border-light) rounded-[var(--radius-lg)] p-8 px-6 transition-all duration-300 hover:border-(--color-primary) hover:shadow-(--shadow-sm)">
				<div class="icon-circle mx-auto mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
				</div>
				<h3 class="font-sans text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-(--color-heading) mb-2">Address</h3>
				<p class="text-[0.95rem] text-(--color-text-muted) leading-relaxed">15951 Winters Mill Parkway<br />Wimberley, Texas 78676</p>
			</div>
			<div class="bg-(--color-bg-card) border border-(--color-border-light) rounded-[var(--radius-lg)] p-8 px-6 transition-all duration-300 hover:border-(--color-primary) hover:shadow-(--shadow-sm)">
				<div class="icon-circle mx-auto mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
				</div>
				<h3 class="font-sans text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-(--color-heading) mb-2">Email</h3>
				<p class="text-[0.95rem] text-(--color-text-muted) leading-relaxed"><a href="mailto:office@fbcwimberley.com" class="text-(--color-primary) font-medium">office@fbcwimberley.com</a></p>
			</div>
			<div class="bg-(--color-bg-card) border border-(--color-border-light) rounded-[var(--radius-lg)] p-8 px-6 transition-all duration-300 hover:border-(--color-primary) hover:shadow-(--shadow-sm)">
				<div class="icon-circle mx-auto mb-4">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
				</div>
				<h3 class="font-sans text-[0.85rem] font-semibold uppercase tracking-[0.1em] text-(--color-heading) mb-2">Phone</h3>
				<p class="text-[0.95rem] text-(--color-text-muted) leading-relaxed"><a href="tel:5128479035" class="text-(--color-primary) font-medium">512-847-9035</a></p>
			</div>
		</div>

		<div class="rounded-[var(--radius-lg)] overflow-hidden border border-(--color-border-light)">
			<iframe
				title="First Baptist Church of Wimberley"
				src="https://maps.google.com/maps?q=First%20Baptist%20Church%20of%20Wimberley&t=m&z=10&output=embed&iwloc=near"
				loading="lazy"
				allowfullscreen
				class="w-full h-[350px] md:h-[450px] border-0 block"
			></iframe>
		</div>
	</div>
</section>

<style>
	.faq-item.open {
		border-color: var(--color-primary);
		box-shadow: var(--shadow-sm);
	}
	/* Chevron rotation handled by global .rotated utility */
</style>
