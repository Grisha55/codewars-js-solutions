function average(scores) {
	const sum = scores.reduce((acc, num) => acc + num);
	const res = Math.round(sum / scores.length);
	return res;
}
