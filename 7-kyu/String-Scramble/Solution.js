function scramble(str, arr) {
	let count = {};

	for (let i = 0; i < str.length; i++) {
		count[arr[i]] = str[i];
	}
	let res = '';
	for (let i = 0; i < str.length; i++) {
		res += count[i];
	}

	return res;
}
