function trim(str, size) {
	if (str.length <= size) return str;

	if (size <= 3) {
		return str.slice(0, size) + '...';
	}

	return str.slice(0, size - 3) + '...';
}
