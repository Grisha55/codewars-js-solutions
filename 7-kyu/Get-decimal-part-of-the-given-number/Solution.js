function getDecimal(n) {
	const [num, decimal] = n.toString().split('.');

	if (!decimal || decimal === 0) return 0;

	return Number(`0.${decimal}`);
}
