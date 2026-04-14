function scoreboard(string) {
	const arr = string.split(' ');
	const numsDict = {
		nil: '0',
		one: '1',
		two: '2',
		three: '3',
		four: '4',
		five: '5',
		six: '6',
		seven: '7',
		eight: '8',
		nine: '9'
	};

	let firstNum;
	let secondNum;

	for (str of arr) {
		if (numsDict[str]) {
			if (!firstNum) {
				firstNum = +numsDict[str];
			} else {
				secondNum = +numsDict[str];
			}
		}
	}

	return [firstNum, secondNum];
}
