function reverse(n) {
	let res = 0;
	let isNegative = n < 0;
	let num = Math.abs(n);

	while (num > 0) {
		res = res * 10 + (num % 10);
		num = Math.floor(num / 10);
	}

	return isNegative ? -res : res;
}
