function wordToBin(str) {
	const res = [];

	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		const binary = charCode.toString(2).padStart(8, '0');
		res.push(binary);
	}

	return res;
}
