function spongeMeme(sentence) {
	let res = '';
	const curSentence = sentence.toLowerCase();

	for (let i = 0; i < curSentence.length; i++) {
		if (i % 2 === 0) {
			res += curSentence[i].toUpperCase();
		} else {
			res += curSentence[i];
		}
	}

	return res;
}
