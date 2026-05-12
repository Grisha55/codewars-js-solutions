class Converter {
	static toAscii(hex) {
		let result = '';
		for (let i = 0; i < hex.length; i += 2) {
			const hexPair = hex.substr(i, 2);
			result += String.fromCharCode(parseInt(hexPair, 16));
		}
		return result;
	}

	static toHex(ascii) {
		return ascii
			.split('')
			.map(char => {
				const hex = char.charCodeAt(0).toString(16);
				return hex.length === 1 ? '0' + hex : hex;
			})
			.join('');
	}
}
