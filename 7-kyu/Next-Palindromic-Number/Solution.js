function nextPal(val) {
	let nextPalindrome = val + 1;

	const isPalindrome = num => {
		const numStr = num.toString();
		for (let i = 0; i < numStr.length; i++) {
			if (numStr[i] !== numStr[numStr.length - 1 - i]) {
				return false;
			}
		}
		return true;
	};

	while (!isPalindrome(nextPalindrome)) {
		nextPalindrome++;
	}

	return nextPalindrome;
}
