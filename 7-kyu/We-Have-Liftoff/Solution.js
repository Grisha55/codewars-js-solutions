function liftoff(instructions) {
	const res = [...instructions]
		.sort((a, b) => a - b)
		.reverse()
		.map(String)
		.join(' ');
	return res + ' ' + 'liftoff!';
}
