function consecutive(array) {
	const sortedArr = [...array].sort((a, b) => a - b);
	let cnt = 0;
	for (let i = 1; i < sortedArr.length; i++) {
		const res = sortedArr[i] - sortedArr[i - 1];
		if (res > 1) {
			cnt += res - 1;
		}
	}
	return cnt;
}
