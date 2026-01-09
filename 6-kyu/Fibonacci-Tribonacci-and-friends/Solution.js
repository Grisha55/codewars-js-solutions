/**
 * @function Xbonacci
 * @param {number[]} signature
 * @param {number} n
 */

function Xbonacci(signature, n) {
	const x = signature.length;
	const res = signature.slice(0, n);

	let windowSum = res.reduce((a, b) => a + b, 0);

	for (let i = x; i < n; i++) {
		res.push(windowSum);
		windowSum += res[i] - res[i - x];
	}

	return res;
}
