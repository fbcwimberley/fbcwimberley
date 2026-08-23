export type GatheringSchedule = {
	hero: string;
	online: string;
	service: string;
};

const temporaryScheduleEndsAt = new Date('2026-09-20T12:30:00-05:00');
const maximumTimeout = 2_147_000_000;

const regularSchedule: GatheringSchedule = {
	hero: 'First Baptist Church Wimberley gathers Sundays at 9:30AM and 11:00AM.',
	online: 'Join First Baptist Church Wimberley each Sunday for a live stream of our 9:30AM worship gathering or watch on demand any time of the week.',
	service: 'First Baptist Church Wimberley gathers for Sunday worship at 9:30 AM and 11:00 AM.'
};

const temporarySchedule: GatheringSchedule = {
	hero: 'First Baptist Church Wimberley gathers Sundays at 10:30 a.m. through September 20th.',
	online: 'Join First Baptist Church Wimberley each Sunday for a live stream of our 10:30AM worship gathering or watch on demand any time of the week.',
	service: 'First Baptist Church Wimberley gathers for Sunday worship at 10:30 a.m.'
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
