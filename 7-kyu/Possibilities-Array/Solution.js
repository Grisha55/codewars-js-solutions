function isAllPossibilities(x) {
	for (let i = 0; i < x.length; i++) {
		if (!x.includes(i)) {
			return false;
		}
	}
	return true;
}
