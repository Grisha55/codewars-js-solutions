function driver(data) {
	const [forename, middleName, surname, dob, gender] = data;

	// 1-5: Первые 5 символов фамилии (дополняем 9 если меньше 5)
	let surnamePart = surname.slice(0, 5).toUpperCase();
	while (surnamePart.length < 5) {
		surnamePart += '9';
	}

	// Разбираем дату рождения
	const [day, month, year] = dob.split('-');
	const yearNum = parseInt(year);

	// Карта месяцев
	const monthMap = {
		jan: '01',
		feb: '02',
		mar: '03',
		apr: '04',
		may: '05',
		jun: '06',
		jul: '07',
		aug: '08',
		sep: '09',
		oct: '10',
		nov: '11',
		dec: '12'
	};

	// Получаем номер месяца (всегда две цифры)
	let monthNum = monthMap[month.slice(0, 3).toLowerCase()];
	if (!monthNum) {
		// Если месяц уже в числовом формате, убеждаемся что он с ведущим нулем
		monthNum = parseInt(month).toString().padStart(2, '0');
	}

	// 6: Десятилетие из года рождения
	const decadeDigit = yearNum.toString()[2];

	// 7-8: Месяц рождения (увеличиваем на 50 если женский пол)
	let monthCode = parseInt(monthNum);
	if (gender === 'F') {
		monthCode += 50;
	}
	const monthPart = monthCode.toString().padStart(2, '0');

	// 9-10: День месяца (всегда две цифры)
	const dayPart = parseInt(day).toString().padStart(2, '0');

	// 11: Последняя цифра года
	const yearDigit = yearNum.toString()[3];

	// 12-13: Инициалы имени и отчества
	let initialsPart = forename[0];
	if (middleName && middleName.length > 0) {
		initialsPart += middleName[0];
	} else {
		initialsPart += '9';
	}
	initialsPart = initialsPart.toUpperCase();

	// 14: Всегда 9
	const checkDigit = '9';

	// 15-16: Всегда AA
	const computerDigits = 'AA';

	// Собираем все части
	return (
		surnamePart +
		decadeDigit +
		monthPart +
		dayPart +
		yearDigit +
		initialsPart +
		checkDigit +
		computerDigits
	);
}
