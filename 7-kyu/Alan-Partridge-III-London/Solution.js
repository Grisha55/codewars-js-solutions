function alan(x) {
	const stops = [
		'Rejection',
		'Disappointment',
		'Backstabbing Central',
		'Shattered Dreams Parkway'
	];
	let cnt = 0;

	for (const s of stops) {
		if (x.includes(s)) {
			cnt++;
		}
	}

	return cnt >= 4
		? 'Smell my cheese you mother!'
		: 'No, seriously, run. You will miss it.';
}
