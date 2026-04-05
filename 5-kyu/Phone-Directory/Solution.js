function phone(strng, num) {
	// Разбиваем строку на отдельные записи (убираем пустые строки)
	const entries = strng.split('\n').filter(line => line.trim() !== '');

	// Находим все строки, содержащие искомый номер
	const matchingEntries = entries.filter(entry => entry.includes(num));

	// Проверка на количество совпадений
	if (matchingEntries.length === 0) {
		return `Error => Not found: ${num}`;
	}
	if (matchingEntries.length > 1) {
		return `Error => Too many people: ${num}`;
	}

	// Обрабатываем единственную найденную запись
	const entry = matchingEntries[0];

	// 1. Извлекаем имя (находится между < и >)
	const nameMatch = entry.match(/<(.+?)>/);
	const name = nameMatch ? nameMatch[1] : '';

	// 2. Извлекаем номер телефона
	// Номер может быть в формате +X-XXX-XXX-XXXX (X - одна или две цифры)
	const phoneMatch = entry.match(/\+(\d{1,2}-\d{3}-\d{3}-\d{4})/);
	const phoneNumber = phoneMatch ? phoneMatch[1] : '';

	// 3. Извлекаем адрес (всё остальное, очищенное от мусора)
	let address = entry
		// Удаляем имя (включая теги < >)
		.replace(/<.+?>/, '')
		// Удаляем номер телефона (вместе с +)
		.replace(/\+(\d{1,2}-\d{3}-\d{3}-\d{4})/, '')
		// Заменяем все не-буквенно-цифровые символы (кроме точки, пробела и дефиса) на пробел
		.replace(/[^\w\s.-]/g, ' ')
		// Заменяем множественные пробелы на один
		.replace(/\s+/g, ' ')
		// Убираем пробелы в начале и конце
		.trim()
		// Заменяем точку с пробелом перед ней (если есть)
		.replace(/\.\s+/g, '. ')
		// Убираем лишние пробелы после точки
		.replace(/\. /g, '.')
		// Заменяем нижние подчеркивания на пробелы (как в примере: Alphand_St. -> Alphand St.)
		.replace(/_/g, ' ')
		.replace(/\.([^\s])/g, '. $1')
		.trim();

	// Возвращаем результат в нужном формате
	return `Phone => ${phoneNumber}, Name => ${name}, Address => ${address}`;
}
