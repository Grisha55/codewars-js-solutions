function distancesFromAverage(arr) {
	const sum = arr.reduce((acc, num) => acc + num, 0);
	const avg = sum / arr.length;

	return arr.map(num => Math.round((avg - num) * 100) / 100);
}
