function changer(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let result = '';

	for (let i = 0; i < str.length; i++) {
		const currentChar = str[i];

		// Проверяем, является ли символ буквой
		if (
			(currentChar >= 'a' && currentChar <= 'z') ||
			(currentChar >= 'A' && currentChar <= 'Z')
		) {
			// Получаем следующую букву
			let nextChar;
			if (currentChar === 'z' || currentChar === 'Z') {
				nextChar = currentChar === 'z' ? 'a' : 'A';
			} else {
				nextChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
			}

			// Преобразуем гласные в верхний регистр, согласные в нижний
			if (vowels.includes(nextChar.toLowerCase())) {
				result += nextChar.toUpperCase();
			} else {
				result += nextChar.toLowerCase();
			}
		} else {
			// Не буквы остаются без изменений
			result += currentChar;
		}
	}

	return result;
}
