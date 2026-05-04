function mirror(text) {
	const words = text.split(' ');
	const maxLength = Math.max(...words.map(word => word.length));
	const border = '*'.repeat(maxLength + 4); // +4 для двух пробелов и двух звездочек

	const mirroredWords = words.map(word => {
		const reversed = word.split('').reverse().join('');
		const padding = ' '.repeat(maxLength - word.length);
		return `* ${reversed}${padding} *`;
	});

	return [border, ...mirroredWords, border].join('\n');
}
