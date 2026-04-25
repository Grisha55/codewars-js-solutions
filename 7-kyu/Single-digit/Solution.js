function singleDigit(n) {
	if (n < 10) return n;

	const binaryN = n.toString(2);
	let curNum = [...binaryN].filter(c => c === '1').length;

	while (curNum > 9) {
		const b = curNum.toString(2);
		curNum = [...b].filter(c => c === '1').length;
	}

	return curNum;
}
