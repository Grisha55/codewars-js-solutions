function group(arr) {
	const count = {};

	for (const num of arr) {
		count[num] = (count[num] || 0) + 1;
	}

	const res = [];
	const seen = new Set();
	for (const num of arr) {
		let nums = [];
		if (!seen.has(num)) {
			for (let j = 0; j < count[num.toString()]; j++) {
				nums.push(num);
				seen.add(num);
			}
			res.push(nums);
		}
	}

	return res;
}
