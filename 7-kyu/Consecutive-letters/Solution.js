function solve(s) {
	const sortedLetters = s.split('').sort((a, b) => a.localeCompare(b));
	console.log(sortedLetters);
	for (let i = 1; i < sortedLetters.length; i++) {
		const res =
			sortedLetters[i].charCodeAt(0) - sortedLetters[i - 1].charCodeAt(0);
		if (res === 0 || res > 1) {
			return false;
		}
	}

	return true;
}
