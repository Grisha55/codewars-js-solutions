function alternateSqSum(arr) {
	if (arr.length === 0) return 0;

	let squareSum = 0;
	let oddSum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (i % 2 !== 0) {
			squareSum += arr[i] ** 2;
		} else {
			oddSum += arr[i];
		}
	}
	return squareSum + oddSum;
}
