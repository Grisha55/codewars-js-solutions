function startingMark(bodyHeight) {
	// Remember: Body height of 1.52 m --> starting mark: 9.45 m
	//           Body height of 1.83 m --> starting mark: 10.67 m
	// All other starting marks are based on these guidelines!
	const slope = (10.67 - 9.45) / (1.83 - 1.52);
	const intercept = 9.45 - slope * 1.52;
	const mark = slope * bodyHeight + intercept;
	return Math.round(mark * 100) / 100;
}
