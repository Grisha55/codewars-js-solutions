function binaryToString(binary) {
	if (binary.length === 0) return '';

	const cods = [];

	for (let i = 0; i < binary.length; i += 8) {
		cods.push(binary.slice(i, i + 8));
	}

	let str = '';
	for (const code of cods) {
		const c = String.fromCharCode(parseInt(code, 2));
		str += c;
	}

	return str;
}
