function paul(x) {
	let res = '';
	let score = 0;

	for (const s of x) {
		switch (s) {
			case 'kata':
				score += 5;
				break;
			case 'Petes kata':
				score += 10;
				break;
			case 'eating':
				score += 1;
				break;
			default:
				score += 0;
		}
	}

	if (score < 40) return 'Super happy!';
	if (score >= 40 && score < 70) return 'Happy!';
	if (score >= 70 && score < 100) return 'Sad!';
	return 'Miserable!';
}
