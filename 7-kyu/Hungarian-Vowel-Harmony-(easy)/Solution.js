function dative(word) {
	const front = 'eéiíöőüű';
	const back = 'aáoóuú';
	for (let i = word.length - 1; i >= 0; i--) {
		if (front.includes(word[i])) {
			return word + 'nek';
		}
		if (back.includes(word[i])) {
			return word + 'nak';
		}
	}
	return word;
}
