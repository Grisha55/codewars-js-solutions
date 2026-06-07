function sortVowels(s) {
	if (typeof s !== 'string') return '';

	const vowels = 'aeiouAEIOU';
	const result = [];

	for (let i = 0; i < s.length; i++) {
		const char = s[i];
		if (vowels.includes(char)) {
			result.push(`|${char}`);
		} else {
			result.push(`${char}|`);
		}
	}

	return result.join('\n');
}
