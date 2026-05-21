function calculateString(st) {
	const signs = ['+', '-', '*', '/'];
	let left = '';
	let right = '';
	let operator = '';
	let foundOperator = false;

	for (let i = 0; i < st.length; i++) {
		const char = st[i];

		// Если это цифра или точка
		if ((char >= '0' && char <= '9') || char === '.') {
			if (!foundOperator) {
				left += char;
			} else {
				right += char;
			}
		}
		// Если это оператор и он еще не найден
		else if (signs.includes(char) && !foundOperator) {
			operator = char;
			foundOperator = true;
		}
	}

	const leftNum = parseFloat(left);
	const rightNum = parseFloat(right);
	let result;

	switch (operator) {
		case '+':
			result = leftNum + rightNum;
			break;
		case '-':
			result = leftNum - rightNum;
			break;
		case '*':
			result = leftNum * rightNum;
			break;
		case '/':
			result = leftNum / rightNum;
			break;
		default:
			result = 0;
	}

	return Math.round(result).toString();
}
