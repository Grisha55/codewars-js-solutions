function isSumOfCubes(s) {
	const numbers = [];
	let i = 0;

	while (i < s.length) {
		if (!/\d/.test(s[i])) {
			i++;
			continue;
		}

		let numStr = '';
		while (i < s.length && /\d/.test(s[i]) && numStr.length < 3) {
			numStr += s[i];
			i++;
		}

		numbers.push(numStr);
	}

	const cubicNums = [];
	let sum = 0;

	for (const numStr of numbers) {
		const num = parseInt(numStr, 10);
		if (isCubic(num)) {
			cubicNums.push(num.toString());
			sum += num;
		}
	}

	if (cubicNums.length === 0) {
		return 'Unlucky';
	}

	return [...cubicNums, sum, 'Lucky'].join(' ');
}

function isCubic(num) {
	const digits = num.toString().split('');
	const sum = digits.reduce((acc, digit) => acc + Math.pow(+digit, 3), 0);
	return sum === num;
}
