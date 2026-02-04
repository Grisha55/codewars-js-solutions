function isLucky(n) {
	let sum = 0;
	const strN = n.toString();

	for (let i = 0; i < strN.length; i++) {
		sum += strN[i];
	}

	return sum % 9 === 0 ? true : false;
}
