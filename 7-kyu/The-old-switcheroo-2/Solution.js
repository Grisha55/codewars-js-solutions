function encode(str) {
	function codeOf(c) {
		if (c >= 'a' && c <= 'z') {
			return c.charCodeAt(0) - 96;
		} else {
			return c;
		}
	}

	let res = '';
	for (let c of str) {
		res += codeOf(c.toLowerCase());
	}

	return res;
}
