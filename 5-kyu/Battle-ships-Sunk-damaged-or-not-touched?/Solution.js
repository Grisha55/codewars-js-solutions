function damagedOrSunk(board, attacks) {
	const rows = board.length;
	const cols = board[0].length;
	const boats = {};

	for (let y = 0; y < rows; y++) {
		for (let x = 0; x < cols; x++) {
			const id = board[y][x];
			if (id) boats[id] = boats[id] || { total: 0, hit: 0 };
			if (id) boats[id].total++;
		}
	}

	attacks.forEach(([x, y]) => {
		const realX = x - 1;
		const realY = rows - y;
		const id = board[realY]?.[realX];
		if (id && boats[id]) {
			boats[id].hit++;
			board[realY][realX] = 0;
		}
	});

	let sunk = 0,
		damaged = 0,
		notTouched = 0,
		points = 0;

	Object.values(boats).forEach(({ total, hit }) => {
		if (hit === 0) {
			notTouched++;
			points -= 1;
		} else if (hit === total) {
			sunk++;
			points += 1;
		} else {
			damaged++;
			points += 0.5;
		}
	});

	return { sunk, damaged, notTouched, points };
}
