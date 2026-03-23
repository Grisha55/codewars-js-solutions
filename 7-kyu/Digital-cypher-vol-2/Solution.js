function decode(code, n) {
	const strN = n.toString();
	let res = '';
	for (let i = 0; i < code.length; i++) {
		let finalCode;
		if (!strN[i]) {
			finalCode = code[i] - Number(strN[i % strN.length]) + 96;
		} else {
			finalCode = code[i] - Number(strN[i]) + 96;
		}
		const char = String.fromCharCode(finalCode);
		res += char;
	}

	return res;
}
