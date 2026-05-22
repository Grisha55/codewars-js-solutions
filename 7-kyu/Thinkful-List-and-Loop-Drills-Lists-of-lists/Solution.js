function processData(data) {
	const res = [...data].map(arr => arr[0] - arr[1]);
	return res.reduce((acc, num) => acc * num, 1);
}
