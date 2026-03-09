function caffeineBuzz(n) {
	if (n % 3 === 0 && n % 4 === 0) {
		if (n % 2 === 0) {
			return 'CoffeeScript';
		} else {
			return 'Coffee';
		}
	} else if (n % 3 === 0) {
		if (n % 2 === 0) {
			return 'JavaScript';
		} else {
			return 'Java';
		}
	} else {
		return 'mocha_missing!';
	}
}
