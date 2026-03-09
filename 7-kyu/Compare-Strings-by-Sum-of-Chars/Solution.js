function compare(s1, s2) {
	return getValue(s1) === getValue(s2);
}

function getValue(str) {
	if (!str) return 0;

	str = str.toUpperCase();

	if (!/^[A-Z]*$/.test(str)) return 0;

	let sum = 0;

	for (let char of str) {
		sum += char.charCodeAt(0);
	}

	return sum;
}
