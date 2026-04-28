function sumOrProduct(array, n) {
	const sortedArr = [...array].sort((a, b) => b - a);
	let sum = 0;
	let multiply = 1;

	for (let i = 0; i < n; i++) {
		sum += sortedArr[i];
		multiply *= sortedArr[sortedArr.length - i - 1];
	}

	if (multiply > sum) {
		return 'product';
	} else if (multiply === sum) {
		return 'same';
	} else {
		return 'sum';
	}
}
