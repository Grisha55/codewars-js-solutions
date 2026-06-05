function alphaSeq(str) {
	const sortedChars = str
		.split('')
		.sort((a, b) => a.localeCompare(b) - b.localeCompare(a));
	console.log('a'.charCodeAt(0));
	const transformStr = s => {
		let first = s.toUpperCase();
		const charNumber = s.toLowerCase().charCodeAt(0) - 96;
		for (let i = 0; i < charNumber - 1; i++) {
			first += s.toLowerCase();
		}
		return first;
	};

	return sortedChars.map(c => transformStr(c)).join(',');
}
