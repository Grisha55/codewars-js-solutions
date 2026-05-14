function diagonal(matrix) {
	let sum = 0;

	for (let i = 0; i < matrix.length; i++) {
		sum += matrix[i][i];
		sum -= matrix[i][matrix.length - i - 1];
	}

	return sum > 0
		? 'Principal Diagonal win!'
		: sum === 0
			? 'Draw!'
			: 'Secondary Diagonal win!';
}
