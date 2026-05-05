function capitalsFirst(str) {
	const words = str.split(' ');
	const upper = [];
	const lower = [];

	for (const word of words) {
		// Проверяем, что первый символ - буква
		const firstChar = word[0];
		if (
			(firstChar >= 'a' && firstChar <= 'z') ||
			(firstChar >= 'A' && firstChar <= 'Z')
		) {
			if (firstChar >= 'A' && firstChar <= 'Z') {
				upper.push(word);
			} else {
				lower.push(word);
			}
		}
		// Если первый символ не буква - пропускаем слово
	}

	return [...upper, ...lower].join(' ');
}
