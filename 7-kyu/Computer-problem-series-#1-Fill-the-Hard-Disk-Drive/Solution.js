function save(sizes, hd) {
	if (sizes[0] > hd || sizes.length === 0) return 0;

	let count = 1;
	let sum = sizes[0];

	for (let i = 1; i < sizes.length; i++) {
		if (sum + sizes[i] <= hd) {
			count++;
			sum += sizes[i];
		} else {
			return count;
		}
	}
	return count;
}
