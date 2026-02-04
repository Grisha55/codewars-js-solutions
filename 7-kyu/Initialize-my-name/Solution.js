function initializeNames(name) {
	const nameArr = name.split(' ');
	let resStr = '';
	let firstChar = '';

	if (nameArr.length < 3) {
		return name;
	}

	for (let i = 0; i < nameArr.length; i++) {
		if (i !== 0 && i !== nameArr.length - 1) {
			firstChar = '';
			firstChar = nameArr[i][0] + '. ';
			resStr += firstChar;
			continue;
		}
		resStr += nameArr[i] + ' ';
	}

	return resStr.trim();
}
