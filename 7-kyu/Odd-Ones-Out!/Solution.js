function oddOnesOut(nums) {
	const count = {};

	for (const num of nums) {
		count[num] = (count[num] || 0) + 1;
	}

	return [...nums].filter(n => count[n] % 2 === 0);
}
