const orderedCount = function (text) {
	const count = {};
	for (const char of text) {
		count[char] = (count[char] || 0) + 1;
	}
	let res = [];
	for (const char of text) {
		if (count[char] !== undefined) {
			res.push([char, count[char]]);
			delete count[char];
		}
	}
	return res;
};
