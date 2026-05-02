function toAcronym(inp) {
	return inp
		.split(' ')
		.map(s => s[0].toUpperCase())
		.join('');
}
