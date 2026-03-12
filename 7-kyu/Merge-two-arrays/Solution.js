function mergeArrays(a, b) {
	const res = [];
	const len = Math.max(a.length, b.length);

	for (let i = 0; i < len; i++) {
		if (a.length - 1 >= i && b.length - 1 >= i) {
			res.push(a[i]);
			res.push(b[i]);
		} else if (a.length - 1 >= i && b.length - 1 < i) {
			res.push(a[i]);
		} else {
			res.push(b[i]);
		}
	}

	return res;
}
