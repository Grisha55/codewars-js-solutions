function stringExpansion(s) {
	if (s.length === 0) return '';

	const nums = '0123456789';
	let curNum = '1';
	let res = '';

	for (let i = 0; i < s.length; i++) {
		if (nums.includes(s[i])) {
			curNum = s[i];
		} else {
			for (let j = 0; j < curNum; j++) {
				res += s[i];
			}
		}
	}

	return res;
}
