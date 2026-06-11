function sumDigNthTerm(initVal, patternL, nthTerm) {
	let term = initVal;
	const patternLen = patternL.length;

	for (let i = 0; i < nthTerm - 1; i++) {
		term += patternL[i % patternLen];
	}

	return String(term)
		.split('')
		.reduce((sum, digit) => sum + Number(digit), 0);
}
