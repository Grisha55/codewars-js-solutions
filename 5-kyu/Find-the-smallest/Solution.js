function smallest(n) {
	const digits = n.toString().split('');
	const len = digits.length;
	let minNum = n;
	let fromIndex = 0;
	let toIndex = 0;

	for (let i = 0; i < len; i++) {
		const digit = digits[i];

		for (let j = 0; j < len; j++) {
			if (i === j) continue;

			const newDigits = [...digits];
			newDigits.splice(i, 1);
			newDigits.splice(j, 0, digit);

			const num = parseInt(newDigits.join(''), 10);

			if (num < minNum) {
				minNum = num;
				fromIndex = i;
				toIndex = j;
			} else if (num === minNum) {
				if (i < fromIndex) {
					fromIndex = i;
					toIndex = j;
				} else if (i === fromIndex && j < toIndex) {
					toIndex = j;
				}
			}
		}
	}

	return [minNum, fromIndex, toIndex];
}
