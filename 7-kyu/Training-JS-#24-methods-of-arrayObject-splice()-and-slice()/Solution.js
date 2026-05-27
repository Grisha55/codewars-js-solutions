function threeInOne(arr) {
	const res = [];

	for (let i = 0; i < arr.length; i += 3) {
		const sum = arr[i] + (arr[i + 1] || 0) + (arr[i + 2] || 0);
		res.push(sum);
	}

	return res;
}
