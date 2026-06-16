function shiftLeft(s, t) {
	let i = s.length - 1;
	let j = t.length - 1;

	while (i >= 0 && j >= 0 && s[i] === t[j]) {
		i--;
		j--;
	}

	return i + 1 + j + 1;
}
