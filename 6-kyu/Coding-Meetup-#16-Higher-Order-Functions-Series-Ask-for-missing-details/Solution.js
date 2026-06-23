function askForMissingDetails(list) {
	const withNulls = list.filter(
		d =>
			d.firstName === null ||
			d.lastName === null ||
			d.country === null ||
			d.continent === null ||
			d.age === null ||
			d.language === null
	);

	for (const d of withNulls) {
		// Находим свойство с null
		for (const key in d) {
			if (d[key] === null) {
				d.question = `Hi, could you please provide your ${key}.`;
				break; // По условию только одно свойство может быть null
			}
		}
	}

	return withNulls;
}
