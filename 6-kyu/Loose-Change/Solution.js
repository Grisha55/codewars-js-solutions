function looseChange(cents) {
	if (cents <= 0 || isNaN(cents)) {
		return {
			Quarters: 0,
			Dimes: 0,
			Nickels: 0,
			Pennies: 0
		};
	}

	cents = Math.floor(cents);

	const quarters = Math.floor(cents / 25);
	cents %= 25;

	const dimes = Math.floor(cents / 10);
	cents %= 10;

	const nickels = Math.floor(cents / 5);
	cents %= 5;

	const pennies = cents;

	return {
		Quarters: quarters,
		Dimes: dimes,
		Nickels: nickels,
		Pennies: pennies
	};
}
