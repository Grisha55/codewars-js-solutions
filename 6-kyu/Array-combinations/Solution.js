function solve(arr) {
	const deduped = arr.map(subarray => {
		return [...new Set(subarray)];
	});

	let res = 1;
	for (let i = 0; i < deduped.length; i++) {
		res *= deduped[i].length;
	}

	return res;
}
