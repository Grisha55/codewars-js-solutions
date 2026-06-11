function part(x) {
	const terms = [
		'Partridge',
		'PearTree',
		'Chat',
		'Dan',
		'Toblerone',
		'Lynn',
		'AlphaPapa',
		'Nomad'
	];
	let excCount = 0;

	for (t of x) {
		if (terms.includes(t)) {
			excCount++;
		}
	}

	const exc = '!'.repeat(excCount);

	return excCount > 0
		? `Mine\'s a Pint` + exc
		: `Lynn, I've pierced my foot on a spike!!`;
}
