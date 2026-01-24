function sevenAte9(str) {
	let res = '';

	for (let i = 0; i < str.length; i++ ) {
		if (str[i] === '9' && str[i - 1] === '7' && str[i + 1] === '7') {
			continue;
		} else {
			res += str[i];
		}
	}

	return res;
 }