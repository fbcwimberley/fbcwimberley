<script lang="ts">
	type Subvalue = {
		id: string;
		title: string;
		body: string;
		scriptures: string;
	};

	type CoreValue = {
		title: string;
		items: Subvalue[];
	};

	const missionScriptures = [
		'"All authority in heaven and on earth has been given to me. Go therefore and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit, teaching them to observe all that I have commanded you." (Matthew 28:18-20)',
		'"But you will receive power when the Holy Spirit has come upon you, and you will be my witnesses in Jerusalem and in all Judea and Samaria, and to the end of the earth." (Acts 1:8)'
	];

	const coreValuesIntro =
		'Our Core Values define our unique identity, guide decision-making and direct ministry actions. They are founded in the Great Commission - to make disciples - and expressed by the Great Commandment - to love God and love others. When we embrace these Core Values, which form and shape our attitudes and actions, we...';

	const coreValues: CoreValue[] = [
		{
			title: 'Glorify God',
			items: [
				{
					id: 'trusting-gods-word',
					title: "Trusting God's Word",
					body: "We stand on the Truth of God's Word which builds within us confidence in God's character and gives us an immovable foundation that provides stability in all circumstances.",
					scriptures: '2 Timothy 3:16-17; Joshua 1:8-9; 2 Peter 1:19-21; Psalm 1:1-2; Psalm 18:30; Psalm 119:7-11; James 1:22; Psalm 119:105; Hebrews 4:12'
				},
				{
					id: 'worshipping-in-spirit-and-truth',
					title: 'Worshipping in Spirit and Truth',
					body: 'We honor God when we bow down before Him in humble obedience, motivated by our love for Him and gratitude for all He is and has done. To worship God is to give Him the best we have to offer.',
					scriptures: 'John 4:24; Romans 12:1-2; Psalm 95:6-7; Acts 2:41-42; Philippians 2:9-11; 1 Chronicles 16:29-30; Psalm 100:2-4'
				},
				{
					id: 'living-surrendered-lives',
					title: 'Living Surrendered Lives',
					body: 'We are called to depend entirely on God, not our own ability, seeking His power, wisdom and provision in all aspects of our life, totally surrendering control of our will, plans and desires to His authority.',
					scriptures: 'Matthew 26:39; Galatians 2:20; Proverbs 3:5-6; Matthew 5:2-12; Luke 9:23-24; James 4:7-8, 13-15; John 15:4-6'
				}
			]
		},
		{
			title: 'Abide in Christ',
			items: [
				{
					id: 'praying-in-all-circumstances',
					title: 'Praying in All Circumstances',
					body: "We cultivate a continuous and consistent awareness of God's presence, keeping a prayerful heart throughout the day and seeking His guidance and strength in every situation.",
					scriptures: 'Philippians 4:6-7; John 15:7; Ephesians 6:18; 1 Thessalonians 5:16-18; James 5:13-16; Matthew 6:9-13; Romans 12:12; Romans 8:26-27'
				},
				{
					id: 'walking-in-the-spirit',
					title: 'Walking in the Spirit',
					body: "We daily practice yielding to the Holy Spirit's guidance, power and influence rather than fulfilling sinful, fleshly desires. We walk by the Spirit, being careful not to resist His prompting and trust He will lead us into a deeper relationship with Jesus.",
					scriptures: 'Ephesians 3:14-19; Galatians 5:16-17; Galatians 5:22-25; Acts 2:38; John 16:12-14; John 14:26; 1 Corinthians 2:12'
				},
				{
					id: 'displaying-a-transformed-heart-and-mind',
					title: 'Displaying a Transformed Heart and Mind',
					body: 'We are being transformed into the image of Christ from one degree of glory to another. It is a work of grace through which God replaces a "heart of stone" that is hard and rebellious with a "heart of flesh" that is receptive and obedient. Understanding that spiritual growth is a lifelong process, we daily strive to show evidence that we are a new creation in Christ.',
					scriptures: '2 Corinthians 3:18; 2 Corinthians 5:17; Ephesians 4:22-24; Colossians 3:10; Romans 12:2; Ezekiel 36:26; Psalm 139:23-24'
				}
			]
		},
		{
			title: 'Connect in Community',
			items: [
				{
					id: 'creating-authentic-relationships',
					title: 'Creating Authentic Relationships',
					body: 'We are a church family, actively engaged in the joys, sorrows and everyday lives of one another. We push past the temptation of putting on a surface level persona on Sunday morning by cultivating authentic community as we open our homes, gather in small groups and bear each other\'s burdens throughout the week.',
					scriptures: 'Hebrews 10:24-25; 1 Corinthians 12:26; 1 John 3:16-18; Galatians 6:1-2; Ephesians 4:25; Acts 2:42-47; Titus 2:2-8'
				},
				{
					id: 'serving-inside-and-outside-the-walls',
					title: 'Serving Inside and Outside the Walls',
					body: "We serve inside the church using our talents and spiritual gifts to strengthen the body and foster a welcoming environment. We serve outside the walls volunteering and participating in community events and activities with a mission approach that acts as a witness of Christ's love to those we encounter daily.",
					scriptures: 'Philippians 2:3-4; Colossians 3:12; Romans 12:6-8; Mark 10:45; 1 Peter 4:10; Matthew 25:40; Galatians 5:13-14'
				},
				{
					id: 'engaging-the-culture',
					title: 'Engaging the Culture',
					body: "As we seek to influence a changing culture that rejects God's design, we are committed to standing for truth with a biblical worldview. We aim to win hearts by building trust through convictional kindness to all people as stewards of God's love and grace.",
					scriptures: '1 Peter 2:9-10; 1 Peter 3:15; 2 Corinthians 5:17-19; John 4:4-10; Matthew 5:14-16; Acts 17:22-28; John 20:20-21'
				}
			]
		},
		{
			title: 'Multiply Disciples',
			items: [
				{
					id: 'growing-a-passionate-zeal-for-the-gospel',
					title: 'Growing a Passionate Zeal for the Gospel',
					body: "We strive to fulfill the Great Commission with a fervent desire to advance God's kingdom by spreading the Gospel and accepting the realities of Christ's love and free offer of forgiveness in our hearts and homes. Our zeal for the gospel is driven by God's Word and His character, and our focus is on reaching, helping and comforting the broken and lost in the Wimberley Valley and the far corners of the world.",
					scriptures: 'Titus 2:11-14; Romans 1:16; Acts 13:47; 1 Corinthians 15:3-4; 2 Timothy 4:3-5; Romans 6:23; Mark 1:14-15; John 3:16; Ephesians 2:1-10'
				},
				{
					id: 'developing-intentional-discipleship',
					title: 'Developing Intentional Discipleship',
					body: "Jesus' plan is that His church would make disciples who then make more disciples. By developing one-on-one and small group relationships where we pray and learn to obey the Bible, we create vulnerable accountability, life on life spiritual development and training with clear tools for discipleship reproduction.",
					scriptures: '2 Timothy 2:2; John 8:31-32; 2 Peter 1:3-10; Romans 8:28-29; 2 Corinthians 3:16-18; Philippians 3:12-14; Luke 6:40'
				},
				{
					id: 'building-christ-centered-homes',
					title: 'Building Christ-Centered Homes',
					body: 'Scripture teaches parents to be the Primary Faith Trainers (PFTs) in the home. We strive to partner with parents by equipping every family with the means through which they can use Faith Talks and God Moments to equip parents to intentionally and spontaneously talk about the things of God as they disciple the next generation, raising them up in the way they should go.',
					scriptures: 'Joshua 24:15; Psalm 127:1; Deuteronomy 6:6-7; Proverbs 22:6; Psalm 78:4-7; Proverbs 24:3-4; Matthew 7:24-27'
				}
			]
		}
	];

	let openSubvalues = $state<string[]>([]);

	function toggleSubvalue(id: string) {
		openSubvalues = openSubvalues.includes(id)
			? openSubvalues.filter((openId) => openId !== id)
			: [...openSubvalues, id];
	}
</script>

<svelte:head>
	<title>Mission | Vision | Values - First Baptist Church Wimberley</title>
	<meta name="description" content="Explore the mission, vision, and core values that shape First Baptist Church Wimberley." />
</svelte:head>

<section class="py-20">
	<div class="container max-w-[960px]">
		<div class="mx-auto max-w-[820px] text-center">
			<p class="section-label">Mission | Vision | Values</p>
			<h2 class="mb-6 text-[clamp(1.75rem,4vw,2.5rem)]">Our Mission</h2>
			<div class="flex flex-col gap-4 text-left">
				{#each missionScriptures as scripture}
					<blockquote class="rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-6 font-serif text-[1.05rem] leading-[1.8] text-(--color-heading) shadow-(--shadow-sm)">
						{scripture}
					</blockquote>
				{/each}
			</div>
		</div>
	</div>
</section>

<section class="bg-(--color-bg-alt) py-20">
	<div class="container max-w-[900px] text-center">
		<h2 class="mb-3 text-[clamp(1.75rem,4vw,2.5rem)]">Our Vision</h2>
		<p class="section-label">Why We Exist?</p>
		<p class="mx-auto max-w-[720px] font-serif text-[clamp(1.4rem,3vw,2rem)] leading-[1.45] text-(--color-heading)">
			To Magnify Christ and Share the Gospel in our homes, the Wimberley Valley and beyond.
		</p>
	</div>
</section>

<section class="py-20">
	<div class="container max-w-[1000px]">
		<div class="mx-auto mb-14 max-w-[820px] text-center">
			<p class="section-label">Our Core Values</p>
			<h2 class="mb-6 text-[clamp(1.75rem,4vw,2.5rem)]">Our Core Values</h2>
			<p class="text-[1.05rem] leading-[1.8] text-(--color-text-muted)">{coreValuesIntro}</p>
		</div>

		<div class="flex flex-col gap-10">
			{#each coreValues as value}
				<section class="value-group rounded-[var(--radius-lg)] border border-(--color-border-light) bg-(--color-bg-card) p-5 shadow-(--shadow-sm) md:p-8">
					<h3 class="mb-5 text-[clamp(1.5rem,3vw,2rem)]">{value.title}</h3>

					<div class="flex flex-col gap-3">
						{#each value.items as item}
							<div class="accordion-item rounded-[var(--radius-md)] border border-(--color-border-light) transition-all duration-300" class:open={openSubvalues.includes(item.id)}>
								<button
									type="button"
									class="flex w-full items-center justify-between gap-4 p-5 text-left"
									onclick={() => toggleSubvalue(item.id)}
									aria-expanded={openSubvalues.includes(item.id)}
									aria-controls={`${item.id}-panel`}
								>
									<span class="font-sans text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-(--color-heading)">{item.title}</span>
									<svg class="chevron shrink-0 text-(--color-text-muted) transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
										<polyline points="6 9 12 15 18 9"></polyline>
									</svg>
								</button>

								<div id={`${item.id}-panel`} class="accordion-panel" class:open={openSubvalues.includes(item.id)} aria-hidden={!openSubvalues.includes(item.id)}>
									<div class="panel-inner px-5 pb-5">
										<div class="border-t border-(--color-border-light) pt-5">
											<p class="mb-4 text-[0.98rem] leading-[1.8] text-(--color-text-muted)">{item.body}</p>
											<p class="font-sans text-[0.88rem] font-semibold leading-[1.7] text-(--color-primary)">{item.scriptures}</p>
										</div>
									</div>
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</div>
</section>

<style>
	.value-group {
		scroll-margin-top: 6rem;
	}

	.accordion-item.open {
		border-color: var(--color-primary);
		box-shadow: var(--shadow-sm);
	}

	.accordion-panel {
		display: grid;
		grid-template-rows: 0fr;
		opacity: 0;
		transition:
			grid-template-rows 300ms cubic-bezier(0.23, 1, 0.32, 1),
			opacity 200ms ease;
	}

	.accordion-panel.open {
		grid-template-rows: 1fr;
		opacity: 1;
	}

	.panel-inner {
		overflow: hidden;
	}

	.accordion-item.open .chevron {
		transform: rotate(180deg);
		color: var(--color-primary);
	}

	@media (prefers-reduced-motion: reduce) {
		.accordion-panel,
		.chevron {
			transition: none;
		}
	}
</style>
