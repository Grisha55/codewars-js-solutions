function allNonConsecutive(arr) {
	const result = [];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] !== arr[i - 1] + 1) {
			result.push({ i: i, n: arr[i] });
		}
	}
	return result;
}
