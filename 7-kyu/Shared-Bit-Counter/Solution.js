function sharedBits(a, b) {
	let common = a & b;
	let count = 0;

	while (common > 0) {
		count += common & 1;
		common >>= 1;
	}

	return count >= 2;
}
