function well(x) {
	let goodCount = 0;

	for (let i = 0; i < x.length; i++) {
		for (let j = 0; j < x[i].length; j++) {
			const item = x[i][j];
			if (typeof item === 'string' && item.toLowerCase() === 'good') {
				goodCount++;
			}
		}
	}

	if (goodCount === 0) {
		return 'Fail!';
	} else if (goodCount <= 2) {
		return 'Publish!';
	} else {
		return 'I smell a series!';
	}
}
