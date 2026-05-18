function cutCube(volume, n) {
	const side = Math.cbrt(volume);
	if (!Number.isInteger(side)) {
		return false;
	}

	const smallSide = Math.cbrt(volume / n);
	if (!Number.isInteger(smallSide)) {
		return false;
	}

	return true;
}
