function datingRange(age) {
	if (age <= 14) {
		const min = Math.floor(age - 0.1 * age);
		const max = Math.floor(age + 0.1 * age);
		return `${min}-${max}`;
	}

	const min = Math.floor(age / 2 + 7);
	const max = Math.floor(2 * (age - 7));

	return min + '-' + max;
}
