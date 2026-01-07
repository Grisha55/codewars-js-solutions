/**
 * @function isPP
 * @param {number} n
 * @returns {[number] | null}
 */

function isPP(n) {
	const maxK = Math.floor(Math.log2(n));

	for (let k = 2; k <= maxK; k++) {
		const m = Math.round(Math.pow(n, 1 / k));

		if (Math.pow(m, k) === n) {
			return [m, k];
		}
	}

	return null;
}
