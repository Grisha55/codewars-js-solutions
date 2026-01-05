/**
 * @param {string} s
 * @returns {number}
 */
function longestPalindrome(s) {
	if (s.length === 0) return 0

	let maxLen = 1

	for (let i = 0; i < s.length; i++) {
		// Нечётный палиндром
		maxLen = Math.max(maxLen, expand(s, i, i))

		// Чётный палиндром
		maxLen = Math.max(maxLen, expand(s, i, i + 1))
	}

	return maxLen
}

/**
 * @param {string} s
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function expand(s, left, right) {
	while (left >= 0 && right < s.length && s[left] === s[right]) {
		left--
		right++
	}
	return right - left - 1
}
