function last(x) {
	const parts = x.split(' ');
	parts.sort((a, b) => {
		if (a.charAt(a.length - 1) < b.charAt(b.length - 1)) return -1;
		if (a.charAt(a.length - 1) > b.charAt(b.length - 1)) return 1;
		return 0;
	});
	return parts;
}