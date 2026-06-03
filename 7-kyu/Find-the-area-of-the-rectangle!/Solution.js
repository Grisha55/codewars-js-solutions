function area(d, l) {
	if (d <= l) return 'Not a rectangle';

	const side = Math.sqrt(d ** 2 - l ** 2);
	return side * l;
}
