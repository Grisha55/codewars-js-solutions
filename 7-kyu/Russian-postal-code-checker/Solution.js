function zipvalidate(postcode) {
	if (postcode.length === 0 || postcode.length < 6 || postcode.length > 6)
		return false;
	const invalidStart = ['0', '5', '7', '8', '9'];
	if (invalidStart.includes(postcode[0])) return false;

	for (const c of postcode) {
		if (c < '0' || c > '9') {
			return false;
		}
	}

	return true;
}
