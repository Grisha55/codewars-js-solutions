function calculate(string) {
	let firstNum;
	let secondNum;
	let operator;
	const arr = string.split(' ');

	for (const el of arr) {
		if (!firstNum && !isNaN(parseInt(el))) {
			firstNum = +el;
		} else if (firstNum && !isNaN(parseInt(el))) {
			secondNum = +el;
		} else if (el === 'loses' || el === 'gains') {
			operator = el;
		}
	}

	return operator === 'loses' ? firstNum - secondNum : firstNum + secondNum;
}
