function landPerimeter(arr) {
	let p = 0;
	const r = arr.length;
	const c = arr[0].length;

	for (let i = 0; i < r; i++) {
		for (let j = 0; j < c; j++) {
			if (arr[i][j] === 'X') {
				if (i === 0 || arr[i - 1][j] === 'O') {
					p++;
				}
				if (i === r - 1 || arr[i + 1][j] === 'O') {
					p++;
				}
				if (j === 0 || arr[i][j - 1] === 'O') {
					p++;
				}

				if (j === c - 1 || arr[i][j + 1] === 'O') {
					p++;
				}
			}
		}
	}

	return 'Total land perimeter: ' + p;
}
