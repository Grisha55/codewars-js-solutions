function password(str) {
	if (str.length < 8) return false;

	let hasUpper = false;
	let hasLower = false;
	let hasNum = false;

	for (const c of str) {
		if (c >= 'a' && c <= 'z') {
			hasLower = true;
		} else if (c >= 'A' && c <= 'Z') {
			hasUpper = true;
		} else if (c >= '0' && c <= '9') {
			hasNum = true;
		}
	}

	return hasUpper && hasLower && hasNum;
}
