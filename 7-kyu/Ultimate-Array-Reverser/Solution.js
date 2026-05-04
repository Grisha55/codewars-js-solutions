const ultimateReverse = s => {
	// Получаем все символы в обратном порядке
	const allChars = s.join('').split('').reverse();

	// Восстанавливаем строки с исходными длинами
	const result = [];
	let charIndex = 0;

	for (let i = 0; i < s.length; i++) {
		const length = s[i].length;
		const reversedStr = allChars.slice(charIndex, charIndex + length).join('');
		result.push(reversedStr);
		charIndex += length;
	}

	return result;
};
