function arraySum(arr) {
	let res = 0;

	for (const el of arr) {
		if (Array.isArray(el)) {
			res += arraySum(el);
		} else if (typeof el === 'number') {
			res += el;
		}
	}

	return res;
}
