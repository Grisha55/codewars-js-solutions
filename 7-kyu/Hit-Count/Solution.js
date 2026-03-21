function counterEffect(hitCount) {
	const res = [];
	let vals = [];

	for (let max of hitCount) {
		vals = [];
		for (let i = 0; i <= +max; i++) {
			vals.push(i);
		}

		res.push(vals);
	}

	return res;
}
