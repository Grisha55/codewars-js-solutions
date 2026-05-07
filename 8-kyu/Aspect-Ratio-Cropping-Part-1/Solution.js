function aspectRatio(x, y) {
	const newX = Math.ceil((y * 16) / 9);
	return [newX, y];
}
