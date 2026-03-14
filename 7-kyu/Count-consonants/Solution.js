function consonantCount(str) {
	const consonants = 'bcdfghjklmnpqrstvwxyz';
	let res = 0;

	for (const char of str) {
		if (consonants.includes(char.toLowerCase())) {
			res++;
		}
	}

	return res;
}
