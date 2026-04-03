function meeting(x, need) {
	if (need === 0) {
		return 'Game On';
	}

	const res = [];
	let remaining = need;

	for (const [occupants, chairs] of x) {
		const free = Math.max(0, chairs - occupants.length);
		const take = Math.min(free, remaining);

		res.push(take);
		remaining -= take;

		if (remaining === 0) {
			return res;
		}
	}

	return 'Not enough!';
}
