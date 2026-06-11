function eqSumPowdig(hMax, exp) {
	const arr = [];

	for (let i = 10; i <= hMax; i++) {
		const numsOfNum = String(i).split('').map(Number);
		let mult = 0;
		for (const n of numsOfNum) {
			mult += n ** exp;
		}
		if (i === mult) {
			arr.push(i);
		}
	}
	return arr;
}
