function isOddHeavy(array) {
	const odds = array.filter(n => n % 2 !== 0);
	const evens = array.filter(n => n % 2 === 0);

	if (odds.length === 0) return false;
	if (evens.length === 0) return true;

	const minOdd = Math.min(...odds);
	const maxEven = Math.max(...evens);

	return minOdd > maxEven;
}
