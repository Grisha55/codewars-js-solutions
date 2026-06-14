function getMatrix(number) {
	const res = [];

	for (let i = 0; i < number; i++) {
		let binary = '';
		for (let j = 0; j < number; j++) {
			if (i === j) {
				binary += '1';
			} else {
				binary += '0';
			}
		}
		const arr = binary.split('').map(Number);
		res.push(arr);
	}

	return res;
}
