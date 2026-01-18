function sumOfIntegersInString(s) {
	const nums = '0123456789';
	let sum = 0;
	let currNum = '';

	for (const char of s) {
		if (nums.includes(char)) {
			currNum += char;
		} else {
			if (currNum) {
				sum += parseInt(currNum);
				currNum = '';
			}
		}
	}

	if (currNum) {
		sum += parseInt(currNum);
	}
	return sum;
}
