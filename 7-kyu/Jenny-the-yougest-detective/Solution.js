function missingWord(nums, str) {
	const joinedStr = str.split(' ').join('');
	const numsCopy = [...nums].sort((a, b) => a - b);
	let res = '';

	for (let i = 0; i < numsCopy.length; i++) {
		const index = numsCopy[i];
		if (index >= joinedStr.length || index < 0) {
			return 'No mission today';
		}
		res += joinedStr[index];
	}

	return res.toLowerCase();
}
