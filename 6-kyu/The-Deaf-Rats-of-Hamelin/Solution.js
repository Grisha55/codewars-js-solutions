var countDeafRats = function (town) {
	const clean = town.replace(/\s+/g, '');
	const piperIndex = clean.indexOf('P');

	let deaf = 0;

	// крысы слева от P
	for (let i = 0; i < piperIndex; i += 2) {
		if (clean.slice(i, i + 2) !== '~O') {
			deaf++;
		}
	}

	// крысы справа от P
	for (let i = piperIndex + 1; i < clean.length; i += 2) {
		if (clean.slice(i, i + 2) !== 'O~') {
			deaf++;
		}
	}

	return deaf;
};
