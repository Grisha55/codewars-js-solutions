function solve(st) {
	let maxValue = 0;
	let res = st[0];

	for (let i = 0; i < st.length; i++) {
		const char = st[i];
		const lastIdx = st.lastIndexOf(char);
		if (maxValue < lastIdx - i) {
			maxValue = lastIdx - i;
			res = char;
		} else if (maxValue === lastIdx - i && res > st[i]) {
			res = char;
		}
	}

	return res;
}
