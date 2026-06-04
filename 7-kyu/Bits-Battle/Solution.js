function bitsBattle(numbers) {
	let odds = 0,
		evens = 0;

	for (const n of numbers) {
		if (n === 0) continue;
		const binary = n.toString(2);
		if (n % 2) {
			odds += [...binary].filter(b => b === '1').length;
		} else {
			evens += [...binary].filter(b => b === '0').length;
		}
	}

	return odds > evens ? 'odds win' : odds < evens ? 'evens win' : 'tie';
}
