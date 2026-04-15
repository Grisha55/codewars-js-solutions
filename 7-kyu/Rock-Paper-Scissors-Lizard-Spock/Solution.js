function rpsls(pl1, pl2) {
	const rules = {
		scissors: ['paper', 'lizard'],
		paper: ['rock', 'spock'],
		rock: ['lizard', 'scissors'],
		lizard: ['spock', 'paper'],
		spock: ['scissors', 'rock']
	};

	if (pl1 === pl2) return 'Draw!';

	return rules[pl1].includes(pl2) ? 'Player 1 Won!' : 'Player 2 Won!';
}
