function bowlingPins(arr) {
	let ans = '';
	let lineNum = 4;
	let pinNum = 10;

	while (lineNum > 0) {
		let line = '';
		const lPad = ' '.repeat(4 - lineNum);
		const lBreak = lineNum > 1 ? '\n' : '';

		for (let i = 0; i < lineNum; i++) {
			const pad = lineNum - 1 > i ? ' ' : '';
			const pin = arr.includes(pinNum) ? ' ' : 'I';
			line += pin + pad;
			pinNum--;
		}

		ans += lPad + line.split('').reverse().join('') + lPad + lBreak;
		lineNum--;
	}

	return ans;
}
