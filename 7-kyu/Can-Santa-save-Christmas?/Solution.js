function determineTime(durations) {
	let maxSeconds = 24 * 60 * 60;

	for (const duration of durations) {
		const [hours, minutes, seconds] = duration.split(':');
		const date = new Date();
		date.setHours(hours, minutes, seconds);
		const res =
			date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();

		maxSeconds -= res;
	}

	return maxSeconds >= 0;
}
