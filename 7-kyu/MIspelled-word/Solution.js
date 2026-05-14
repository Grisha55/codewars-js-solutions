function mispelled(word1, word2) {
	if (Math.abs(word1.length - word2.length) > 1) return false;
	if (word1 === word2) return true;

	for (let i = 0; i < Math.max(word1.length, word2.length); i++) {
		if (word1[i] !== word2[i]) {
			// Проверяем замену
			if (word1.slice(i + 1) === word2.slice(i + 1)) return true;
			// Проверяем вставку в word1
			if (word1.slice(i + 1) === word2.slice(i)) return true;
			// Проверяем вставку в word2
			if (word1.slice(i) === word2.slice(i + 1)) return true;
			return false;
		}
	}
	return true;
}
