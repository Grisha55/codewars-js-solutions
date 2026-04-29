function bald(x) {
	const hairsCount = (x.match(/\//g) || []).length;
	const hairs = x.replace(/\//g, '-');

	const messages = {
		0: 'Clean!',
		1: 'Unicorn!',
		2: 'Homer!'
	};

	let message;
	if (hairsCount <= 2) {
		message = messages[hairsCount];
	} else if (hairsCount <= 5) {
		message = 'Careless!';
	} else {
		message = 'Hobo!';
	}

	return [hairs, message];
}
