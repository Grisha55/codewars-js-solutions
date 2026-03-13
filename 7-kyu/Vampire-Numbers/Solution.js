function vampireTest(a, b) {
	if (a < 0 && b < 0) return false;

	const multipleRes = a * b;
	const firstStr = a.toString() + b.toString();
	const count = {};

	for (const c of firstStr) {
		count[c] = (count[c] || 0) + 1;
	}

	for (const c of multipleRes.toString()) {
		count[c] = count[c] - 1;
	}

	for (const key in count) {
		if (count[key] !== 0) {
			return false;
		}
	}

	return true;
}
