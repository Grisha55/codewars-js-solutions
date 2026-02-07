function hydrate(s) {
	let glasses = 0;

	for (let i = 0; i < s.length; i++) {
		if (isNumber(s[i])) {
			glasses += Number(s[i]);
		}
	}
	return glasses > 1 ? `${glasses} glasses of water` : '1 glass of water';
}

function isNumber(str) {
	const nums = '0123456789';

	if (nums.includes(str)) {
		return true;
	}
	return false;
}
