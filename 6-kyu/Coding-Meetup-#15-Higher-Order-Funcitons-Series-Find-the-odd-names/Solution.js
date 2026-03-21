function findOddNames(list) {
	const res = [];

	for (dev of list) {
		if (nameIsEven(dev.firstName)) {
			res.push(dev);
		}
	}

	return res;
}

const nameIsEven = name => {
	let sum = 0;

	for (const c of name) {
		sum += c.charCodeAt(0);
	}

	return sum % 2 !== 0;
};
