function palindrome(num, s) {
	if (typeof num !== 'number' || typeof s !== 'number' || num < 0 || s < 0)
		return 'Not valid';
	const res = [];
	const isPalindrome = n => {
		const strN = n.toString();
		if (strN.length < 2) return false;
		for (let i = 0; i < strN.length; i++) {
			if (strN[i] !== strN[strN.length - i - 1]) {
				return false;
			}
		}
		return true;
	};
	let curNum = num;
	while (res.length < s) {
		if (isPalindrome(curNum)) {
			res.push(curNum);
		}
		curNum++;
	}

	return res;
}
