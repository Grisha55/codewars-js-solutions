function maxProduct(arr) {
	let max1 = 0;
	let max2 = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max1) {
			max2 = max1;
			max1 = arr[i];
		} else if (arr[i] > max2) {
			max2 = arr[i];
		}
	}

	return max1 * max2;
}
