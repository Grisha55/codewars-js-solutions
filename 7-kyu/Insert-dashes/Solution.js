function insertDash(num) {
	let res = '';
	const n = num.toString().length;

	for (let i = 1; i <= n; i++) {
		let curNum = num.toString()[i];
		let prevNum = num.toString()[i - 1];

		if (curNum % 2 !== 0 && prevNum % 2 !== 0 && i < n) {
			res += prevNum + '-';
		} else {
			res += prevNum;
		}
	}

	return res;
}
