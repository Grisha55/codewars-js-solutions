/**
 * @param {string} dancingBrigade
 * @returns {string}
 */
function findChildren(dancingBrigade) {
	const count = {};

	for (const char of dancingBrigade) {
		count[char] = (count[char] || 0) + 1;
	}

	const mothers = Object.keys(count)
		.filter(c => c === c.toUpperCase())
		.sort();

	let result = '';

	for (const mother of mothers) {
		const child = mother.toLowerCase();
		result += mother;
		result += child.repeat(count[child] || 0);
	}

	return result;
}
