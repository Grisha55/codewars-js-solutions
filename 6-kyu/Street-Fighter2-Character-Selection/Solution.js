function streetFighterSelection(fighters, position, moves) {
	const result = [];
	let [x, y] = position;

	const height = fighters.length;
	const width = fighters[0].length;

	const moveMap = {
		up: () => {
			if (x > 0) x--;
		},
		down: () => {
			if (x < height - 1) x++;
		},
		left: () => {
			y = (y - 1 + width) % width;
		},
		right: () => {
			y = (y + 1) % width;
		}
	};

	for (const move of moves) {
		moveMap[move]();
		result.push(fighters[x][y]);
	}

	return result;
}
