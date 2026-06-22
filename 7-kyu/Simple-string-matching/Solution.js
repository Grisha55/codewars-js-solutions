function solve(a, b) {
	if (!a.includes('*')) {
		return a === b;
	}

	const [left, right] = a.split('*');

	if (!b.startsWith(left)) {
		return false;
	}

	if (!b.endsWith(right)) {
		return false;
	}

	return left.length + right.length <= b.length;
}
