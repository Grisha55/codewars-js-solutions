function maxSum(arr, range) {
	let maxSum = -Infinity;

	for (const [start, end] of range) {
		const sum = arr.slice(start, end + 1).reduce((acc, num) => acc + num, 0);
		maxSum = Math.max(maxSum, sum);
	}

	return maxSum;
}
