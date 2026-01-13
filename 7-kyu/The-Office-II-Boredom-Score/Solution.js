function boredom(staff) {
	let boredomScores = {
		'accounts': 1,
		'finance': 2,
		'canteen': 10,
		'regulation': 3,
		'trading': 6,
		'change': 6,
		'IS': 8,
		'retail': 5,
		'cleaning': 4,
		'pissing about': 25
	};

	let totalBoredom = Object.values(staff).reduce((total, dept) => {
		return total + (boredomScores[dept] || 0);
	}, 0);

	if (totalBoredom <= 80) {
		return 'kill me now';
	} else if (totalBoredom < 100) {
		return 'i can handle this';
	} else {
		return 'party time!!';
	}
}