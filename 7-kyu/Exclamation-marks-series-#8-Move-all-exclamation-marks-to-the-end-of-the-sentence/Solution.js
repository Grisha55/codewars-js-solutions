function remove(string) {
	let cnt = 0;
	let res = '';

	for (const c of string) {
		if (c === '!') {
			cnt++;
		} else {
			res += c;
		}
	}

	return res + '!'.repeat(cnt);
}
