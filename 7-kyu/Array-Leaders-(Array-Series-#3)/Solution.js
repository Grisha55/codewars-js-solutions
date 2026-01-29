function arrayLeaders(numbers) {
	let result = [];
	let sumRight = 0;

	for (let i = numbers.length - 1; i >= 0; i--) {
		if (numbers[i] > sumRight) {
			result.push(numbers[i]);
		}
		sumRight += numbers[i];
	}

	return result.reverse();
}
