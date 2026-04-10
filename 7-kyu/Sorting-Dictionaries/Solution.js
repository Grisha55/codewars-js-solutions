function sortDict(dict) {
	const a = [];
	const nums = '0123456789';
	for (const key in dict) {
		if (nums.includes(key)) {
			a.push([+key, dict[key]]);
			continue;
		}
		a.push([key, dict[key]]);
	}

	const res = [...a].sort((a, b) => b[1] - a[1]);

	return res;
}
