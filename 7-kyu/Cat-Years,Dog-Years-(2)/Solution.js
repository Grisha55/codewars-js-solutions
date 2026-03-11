var ownedCatAndDog = function (catYears, dogYears) {
	// Для кошки
	let ownedCat = 0;
	if (catYears >= 15) {
		ownedCat = 1;
		if (catYears >= 24) {
			ownedCat = 2 + Math.floor((catYears - 24) / 4);
		}
	}

	// Для собаки
	let ownedDog = 0;
	if (dogYears >= 15) {
		ownedDog = 1;
		if (dogYears >= 24) {
			ownedDog = 2 + Math.floor((dogYears - 24) / 5);
		}
	}

	return [ownedCat, ownedDog];
};
