export type GatheringSchedule = {
	hero: string;
	online: string;
	service: string;
	times: string;
	timesCompact: string;
	timesSpaced: string;
	timesLower: string;
	sundayTimes: string[];
};

const temporaryScheduleEndsAt = new Date('2026-09-20T12:30:00-05:00');
const maximumTimeout = 2_147_000_000;

const regularSchedule: GatheringSchedule = {
	hero: 'First Baptist Church Wimberley gathers Sundays at 9:00 a.m. and 10:30 a.m.',
	online: 'Join First Baptist Church Wimberley each Sunday for a live stream of our 9:00AM worship gathering or watch on demand any time of the week.',
	service: 'First Baptist Church Wimberley gathers for Sunday worship at 9:00 a.m. and 10:30 a.m.',
	times: '9:00 a.m. and 10:30 a.m.',
	timesCompact: '9:00AM and 10:30AM',
	timesSpaced: '9:00 AM and 10:30 AM',
	timesLower: '9:00 am and 10:30 am',
	sundayTimes: ['9:00 am', '10:30 am']
};

const temporarySchedule: GatheringSchedule = {
	hero: 'First Baptist Church Wimberley gathers Sundays at 10:30 a.m. through September 20th.',
	online: 'Join First Baptist Church Wimberley each Sunday for a live stream of our 10:30AM worship gathering or watch on demand any time of the week.',
	service: 'First Baptist Church Wimberley gathers for Sunday worship at 10:30 a.m.',
	times: '10:30 a.m.',
	timesCompact: '10:30AM',
	timesSpaced: '10:30 AM',
	timesLower: '10:30 am',
	sundayTimes: ['10:30 am']
};

export function getGatheringSchedule(now = new Date()): GatheringSchedule {
	return now < temporaryScheduleEndsAt ? temporarySchedule : regularSchedule;
}

function getGatheringScheduleTimeout(now = new Date()): number | null {
	const timeout = temporaryScheduleEndsAt.getTime() - now.getTime() + 1000;
	return timeout > 0 ? Math.min(timeout, maximumTimeout) : null;
}

export function watchGatheringSchedule(onChange: () => void): () => void {
	let timer: ReturnType<typeof setTimeout> | undefined;

	const scheduleNextUpdate = () => {
		const timeout = getGatheringScheduleTimeout();
		if (timeout === null) return;

		timer = setTimeout(() => {
			onChange();
			scheduleNextUpdate();
		}, timeout);
	};

	scheduleNextUpdate();

	return () => {
		if (timer !== undefined) clearTimeout(timer);
	};
}
