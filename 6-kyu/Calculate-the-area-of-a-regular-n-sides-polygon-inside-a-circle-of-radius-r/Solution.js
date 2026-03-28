function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {
	const s =
		(numberOfSides / 2) *
		circleRadius *
		circleRadius *
		Math.sin((2 * Math.PI) / numberOfSides);

	return s;
}
