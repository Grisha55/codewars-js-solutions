function removeChars(s) {
	let res = '';
	for (const c of s) {
		if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || c === ' ') {
			res += c;
		}
	}

	return res;
}
