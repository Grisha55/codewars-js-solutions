function shorterReverseLonger(a, b) {
	if (a.length < b.length) {
		return a + b.split('').reverse().join('') + a;
	} else {
		return b + a.split('').reverse().join('') + b;
	}
}