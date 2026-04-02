function sabb(s, val, happiness) {
	const sabbatical = 'sabbatical';
	let sum = 0;

	for (const c of s) {
		if (sabbatical.includes(c)) {
			sum++;
		}
	}

	return sum + val + happiness > 22
		? 'Sabbatical! Boom!'
		: 'Back to your desk, boy.';
}
