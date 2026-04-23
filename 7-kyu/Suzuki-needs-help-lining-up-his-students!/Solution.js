function lineupStudents(students) {
	// Разбиваем строку на массив имен
	const names = students.split(' ');

	// Сортируем массив
	return names.sort((a, b) => {
		// Сначала по длине имени в убывающем порядке
		if (a.length !== b.length) {
			return b.length - a.length;
		}
		// Если длина одинаковая - по алфавиту в обратном порядке (Z->A)
		return b.localeCompare(a);
	});
}
