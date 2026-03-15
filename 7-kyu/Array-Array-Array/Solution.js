function explode(x) {
	const [first, second] = x;
	let sum = 0;

	if (typeof first === 'string' && typeof second === 'string') {
		return 'Void!';
	}

	if (typeof first === 'number' && typeof second === 'number') {
		sum += first;
		sum += second;

		const res = [];

		for (let i = 0; i < sum; i++) {
			res.push([first, second]);
		}

		return res;
	}

	let res = [];
	if (typeof first === 'number') {
		sum += first;
	} else {
		sum += second;
	}

	for (let i = 0; i < sum; i++) {
		res.push([first, second]);
	}

	return res;
}
