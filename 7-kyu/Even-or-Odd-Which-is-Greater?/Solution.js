function evenOrOdd(str) {
	let evenSum = 0;
	let oddSum = 0;

	const _ = str
		.split('')
		.map(c => Number(c))
		.forEach(num => {
			if (num % 2 === 0) {
				evenSum += num;
			} else {
				oddSum += num;
			}
		});

	if (evenSum > oddSum) {
		return 'Even is greater than Odd';
	} else if (oddSum > evenSum) {
		return 'Odd is greater than Even';
	} else {
		return 'Even and Odd are the same';
	}
}
