function mormons(startingNumber, reach, target) {
	if (startingNumber >= target) return 0;
	let followers = startingNumber;
	let missions = 0;

	while (followers < target) {
		followers += followers * reach;
		missions++;
	}

	return missions;
}
