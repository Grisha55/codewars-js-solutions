function productArray(numbers) {
	let mults = [];

	for (let i = 0; i < numbers.length; i++) {
		let mult = 1;
		for (let j = 0; j < numbers.length; j++) {
			if (i !== j) {
				mult *= numbers[j];
			}
		}
		mults.push(mult);
	}
	return mults;
}