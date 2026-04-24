function permuteAPalindrome(input) {
	const count = {};
	for (const c of input) {
		count[c] = (count[c] || 0) + 1;
	}

	if (input.length % 2 === 0) {
		for (const key in count) {
			if (count[key] % 2 !== 0) {
				return false;
			}
		}
		return true;
	} else {
		let cnt = 0;
		for (const key in count) {
			if (count[key] % 2 !== 0) {
				cnt++;
			}
		}
		return cnt === 1;
	}

	return true;
}
