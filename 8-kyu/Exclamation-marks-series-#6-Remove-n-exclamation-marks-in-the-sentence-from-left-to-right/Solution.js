/**
 * @function remove
 * @param {string} s 
 * @param {number} n
 * @returns {string} 
 */

function remove(s, n) {
	let exclamationCount = n;
	let resStr = '';

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '!' && exclamationCount > 0) {
			exclamationCount--;
			continue;
		} else {
			resStr += s[i];
		}
	}

	return resStr;
}
