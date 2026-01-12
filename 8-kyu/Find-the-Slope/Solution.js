function slope(points) {
	const [x1, y1, x2, y2] = points;

	if (x2 === x1) {
		return 'undefined';
	}

	return String((y2 - y1) / (x2 - x1));
}
