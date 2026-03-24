function computeDepth(x) {
	let multiples = [];

	for (let i = 0; i < 10; i++) {
		multiples.push(i);
	}

	let num = 1;
	while (multiples.length > 0) {
		const cur = x * num;
		for (n of cur.toString()) {
			if (multiples.includes(+n)) {
				multiples = multiples.filter(number => number !== +n);
			}
		}
		num++;
	}

	return num - 1;
}
