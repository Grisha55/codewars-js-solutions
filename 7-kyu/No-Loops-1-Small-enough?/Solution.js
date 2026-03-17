function smallEnough(a, limit) {
	const max = Math.max(...a);
	return limit >= max;
}
