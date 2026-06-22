function doubleCheck(str) {
	const lStr = str.toLowerCase();

	for (let i = 1; i < lStr.length; i++) {
		if (lStr[i] === lStr[i - 1]) {
			return true;
		}
	}

	return false;
}
