var isSquare = function (arr) {
	if (arr.length === 0) return undefined;

	for (const num of arr) {
		if (Math.sqrt(num) ** 2 !== num) {
			return false;
		}
	}

	return true;
};
