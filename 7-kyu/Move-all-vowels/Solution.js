function moveVowel(input) {
	const vowels = 'aeiou';
	let res = '';
	let end = '';

	for (const v of input) {
		if (!vowels.includes(v)) {
			res += v;
		} else {
			end += v;
		}
	}

	return res + end;
}
