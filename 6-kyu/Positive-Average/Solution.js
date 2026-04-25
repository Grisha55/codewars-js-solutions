function posAverage(s) {
	let cnt = 0;
	const arr = s.split(', ');
	const n = arr.length;
	const len = arr[0].length;
	const totalComparisons = (n * (n - 1)) / 2;

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			for (let k = 0; k < len; k++) {
				if (arr[i][k] === arr[j][k]) {
					cnt++;
				}
			}
		}
	}

	const percent = (cnt / (totalComparisons * len)) * 100;
	return parseFloat(percent.toFixed(10));
}
