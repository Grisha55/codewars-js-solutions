function trouble(x, t) {
	const res = [];

	for (let i = 0; i < x.length; i++) {
		if (res.length === 0) {
			res.push(x[i]);
		} else {
			const last = res[res.length - 1];
			if (last + x[i] === t) {
				continue;
			} else {
				res.push(x[i]);
			}
		}
	}

	return res;
}
