function avgArray(arr) {
	const res = [];

	for (let i = 0; i < arr[0].length; i++) {
		let sum = 0;
		for (let j = 0; j < arr.length; j++) {
			sum += arr[j][i];
		}
		res.push(sum / arr.length);
	}

	return res;
}
