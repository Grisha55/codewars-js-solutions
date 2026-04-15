function completeSeries(arr) {
	const set = new Set(arr);
	if (set.size !== arr.length) return [0];
	const sortedArr = Array.from(set).sort((a, b) => a - b);
	const max = sortedArr[sortedArr.length - 1];
	const res = [];
	for (let i = 0; i <= max; i++) {
		res.push(i);
	}

	return res;
}
