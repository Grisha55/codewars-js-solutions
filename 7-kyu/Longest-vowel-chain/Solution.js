/**
 * @function solve
 * @param {string} s 
 * @returns {number}
 */

function solve(s){
	const vowels = 'aeiou';
	let len = 0;
	let maxLen = 0;

	for (const c of s) {
		if (vowels.includes(c)) {
			len++;
		} else {
			maxLen = Math.max(maxLen, len);
			len = 0;
		}
	}

	return maxLen;
}