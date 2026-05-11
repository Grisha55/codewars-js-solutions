function List() {
	this.countSpecDigits = function (integersList, digitsList) {
		if (digitsList.length === 0) return [];

		const count = {};
		for (const n of digitsList) {
			count[n] = 0;
		}

		for (const num of integersList) {
			const numStr = Math.abs(num).toString();
			for (const char of numStr) {
				const digit = parseInt(char);
				if (digit in count) {
					count[digit]++;
				}
			}
		}

		return digitsList.map(digit => [digit, count[digit]]);
	};
}
