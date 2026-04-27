function myParseInt(str) {
	// Убираем пробелы, табуляцию, переносы строк и т.д. с обоих концов
	const trimmed = str.trim();

	// Проверяем, что строка не пустая и содержит только цифры
	if (trimmed.length === 0) {
		return NaN;
	}

	for (let i = 0; i < trimmed.length; i++) {
		const char = trimmed[i];
		// Если символ не является цифрой, возвращаем NaN
		if (char < '0' || char > '9') {
			return NaN;
		}
	}

	// Если дошли до сюда - все символы цифры
	return parseInt(trimmed, 10);
}
