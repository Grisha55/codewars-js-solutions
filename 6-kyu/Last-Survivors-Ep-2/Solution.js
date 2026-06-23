function lastSurvivors(str) {
	const getNextLetter = c => {
		if (c === 'z') return 'a';
		return String.fromCharCode(c.charCodeAt(0) + 1);
	};

	// Считаем частоту каждой буквы
	const count = {};
	for (const char of str) {
		count[char] = (count[char] || 0) + 1;
	}

	// Пока есть буквы, которые встречаются 2 или более раз
	let hasDuplicates = true;
	while (hasDuplicates) {
		hasDuplicates = false;

		for (const char in count) {
			if (count[char] >= 2) {
				hasDuplicates = true;

				// Берем 2 буквы и заменяем на следующую
				count[char] -= 2;
				const nextChar = getNextLetter(char);
				count[nextChar] = (count[nextChar] || 0) + 1;

				// Если count[char] стал 0, удаляем его
				if (count[char] === 0) {
					delete count[char];
				}

				break; // Начинаем цикл заново после одного преобразования
			}
		}
	}

	// Собираем результат
	let result = '';
	for (const char in count) {
		result += char.repeat(count[char]);
	}

	return result;
}
