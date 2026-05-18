function geometricSequenceElements(a, r, n) {
	const arr = new Array(n).fill(0);
	arr[0] = a;

	for (let i = 1; i < n; i++) {
		arr[i] = arr[i - 1] * r;
	}

	return arr.join(', ');
}
