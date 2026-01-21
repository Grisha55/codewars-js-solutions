function elevatorDistance(array) {
	let distance = 0;
	for (let i = 1; i < array.length; i++) {
		distance += Math.abs(array[i] - array[i - 1]);
	}

	return distance;
}