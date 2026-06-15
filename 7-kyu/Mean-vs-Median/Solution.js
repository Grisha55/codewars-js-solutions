const meanVsMedian = numbers => {
	const mean = numbers.reduce((s, n) => s + n, 0) / numbers.length;
	const median = numbers.sort((a, b) => a - b)[Math.floor(numbers.length / 2)];
	return mean > median ? 'mean' : mean < median ? 'median' : 'same';
};
