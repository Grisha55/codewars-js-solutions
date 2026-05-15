function convert(number) {
	let res = '';
	for (let i = 0; i < number.length; i += 2) {
		const code = number[i] + number[i + 1];
		res += String.fromCharCode(+code);
	}
	return res;
}
