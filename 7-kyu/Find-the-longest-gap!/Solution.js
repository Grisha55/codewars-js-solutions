function gap(num) {
	const binary = num.toString(2);
	let gap = 0;
	let right = 0;

	for (let i = 0; i < binary.length; i++) {
		if (binary[i] === '1') {
			for (let j = i + 1; j < binary.length; j++) {
				if (binary[j] === '1') {
					right = j - 1;
					break;
				}
			}
			gap = Math.max(gap, right - i);
		}
	}

	return gap;
}
