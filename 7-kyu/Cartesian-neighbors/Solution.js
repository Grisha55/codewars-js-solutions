function cartesianNeighbor(x, y) {
	const res = [];

	for (let i = -1; i <= 1; i++) {
		for (let j = -1; j <= 1; j++) {
			if (i === 0 && j === 0) continue;
			res.push([x + i, y + j]);
		}
	}
	return res;
}
