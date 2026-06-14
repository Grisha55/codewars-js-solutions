function code(strng) {
	const digits = strng.split('');
	let result = '';

	for (const d of digits) {
		const num = parseInt(d, 10);
		const binary = num.toString(2);
		const k = binary.length;
		result += '0'.repeat(k - 1) + '1' + binary;
	}

	return result;
}

function decode(str) {
	let result = '';
	let i = 0;

	while (i < str.length) {
		let zeros = 0;
		while (str[i] === '0') {
			zeros++;
			i++;
		}
		i++;
		const binary = str.substr(i, zeros + 1);
		const num = parseInt(binary, 2);
		result += num.toString();
		i += zeros + 1;
	}

	return result;
}
