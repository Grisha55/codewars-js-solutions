function duplicateElements(m, n) {
	// Если один из массивов пуст, то общих элементов нет
	if (m.length === 0 || n.length === 0) return false;

	// Создаем Set из первого массива для быстрого поиска O(1)
	const setM = new Set(m);

	// Проверяем, есть ли хоть один элемент из n в setM
	for (let i = 0; i < n.length; i++) {
		if (setM.has(n[i])) {
			return true;
		}
	}

	return false;
}
