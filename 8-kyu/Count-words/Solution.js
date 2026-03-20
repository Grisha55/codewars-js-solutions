function countWords(str) {
	if (!str) return 0;

	// Ищем все последовательности непробельных символов
	// \S+ - один или более непробельных символов
	const matches = str.match(/\S+/g);

	return matches ? matches.length : 0;
}
