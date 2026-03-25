function tripleX(str) {
	for (let i = 0; i < str.length; i++) {
		if (str[i] === 'x') {
			if (str[i + 1] === 'x' && str[i + 2] !== 'X') {
				return true;
			} else {
				return false;
			}
		}
	}

	return false;
}
