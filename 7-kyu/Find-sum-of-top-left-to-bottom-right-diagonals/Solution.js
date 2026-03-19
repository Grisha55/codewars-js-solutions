function diagonalSum(matrix) {
	let sum = 0;
	const len = matrix.length;

	for (let i = 1; i <= len; i++) {
		sum += matrix[i - 1][i - 1];
	}

	return sum;
}
