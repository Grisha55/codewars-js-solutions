function longest(str) {
	let longestStart = 0;
	let longestLen = 1;
	let currentStart = 0;
	let currentLen = 1;

	for (let i = 1; i < str.length; i++) {
		if (str[i] >= str[i - 1]) {
			currentLen++;
			if (currentLen > longestLen) {
				longestLen = currentLen;
				longestStart = currentStart;
			}
		} else {
			currentStart = i;
			currentLen = 1;
		}
	}

	return str.substr(longestStart, longestLen);
}
