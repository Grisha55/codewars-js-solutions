function climb(n) {
	let temp = n;
	let length = 0;
	while (temp >= 1) {
		length++;
		temp = Math.floor(temp / 2);
	}

	const result = new Array(length);
	for (let i = length - 1; i >= 0; i--) {
		result[i] = n;
		n = Math.floor(n / 2);
	}

	return result;
}
