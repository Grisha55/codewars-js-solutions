function dropCap(n) {
	const arr = n
		.split(' ')
		.map(s =>
			s.length > 2 ? s[0].toUpperCase() + s.slice(1).toLowerCase() : s
		);
	return arr.join(' ');
}
