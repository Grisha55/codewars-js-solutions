function catMouse(x, j) {
	if (!x.includes('C') || !x.includes('D') || !x.includes('m')) {
		return 'boring without all three';
	}

	const c = x.indexOf('C');
	const d = x.indexOf('D');
	const m = x.indexOf('m');
	const dist = Math.abs(c - m) - 1;

	if (dist > j) return 'Escaped!';
	if ((c < d && d < m) || (m < d && d < c)) return 'Protected!';
	return 'Caught!';
}
