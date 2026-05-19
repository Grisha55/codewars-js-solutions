function towerBuilder(nFloors, nBlockSz) {
	const [width, height] = nBlockSz;
	const res = [];
	const maxWidth = width * (2 * nFloors - 1);

	for (let i = 0; i < nFloors; i++) {
		const stars = width * (2 * i + 1);
		const spaces = (maxWidth - stars) / 2;
		const level = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);

		for (let j = 0; j < height; j++) {
			res.push(level);
		}
	}

	return res;
}
