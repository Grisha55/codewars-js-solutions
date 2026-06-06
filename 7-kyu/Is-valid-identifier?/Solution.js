function isValid(str) {
	if (str.length === 0) return false;

	// Проверяем первый символ
	const first = str[0];
	if (
		!(first >= 'a' && first <= 'z') &&
		!(first >= 'A' && first <= 'Z') &&
		first !== '_' &&
		first !== '$'
	) {
		return false;
	}

	// Проверяем остальные символы
	for (let i = 1; i < str.length; i++) {
		const char = str[i];
		if (
			!(char >= 'a' && char <= 'z') &&
			!(char >= 'A' && char <= 'Z') &&
			!(char >= '0' && char <= '9') &&
			char !== '_' &&
			char !== '$'
		) {
			return false;
		}
	}

	return true;
}
