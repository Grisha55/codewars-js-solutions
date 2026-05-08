function lowestProduct(input) {
	if (input.length < 4) {
		return 'Number is too small';
	}

	const arr = input.split('').map(Number);
	let minMult = 1000000;

	for (let i = 0; i <= input.length - 4; i++) {
		let curMult = arr[i];
		for (let j = i + 1; j < i + 4; j++) {
			curMult *= arr[j];
		}
		minMult = Math.min(minMult, curMult);
	}

	return minMult;
}
