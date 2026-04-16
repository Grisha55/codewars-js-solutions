function iTri(distance) {
	const swimDistance = 2.4;
	const bikeDistance = 112;
	const runDistance = 26.2;
	const totalDistance = swimDistance + bikeDistance + runDistance; // 140.6

	if (distance === 0) {
		return 'Starting Line... Good Luck!';
	}

	if (distance >= totalDistance) {
		return "You're done! Stop running!";
	}

	const remaining = totalDistance - distance;
	const formattedRemaining = remaining.toFixed(2);

	// Плавание
	if (distance < swimDistance) {
		return { Swim: `${formattedRemaining} to go!` };
	}

	// Велосипед
	if (distance < swimDistance + bikeDistance) {
		return { Bike: `${formattedRemaining} to go!` };
	}

	// Бег
	if (remaining > 10) {
		return { Run: `${formattedRemaining} to go!` };
	} else {
		return { Run: 'Nearly there!' };
	}
}
