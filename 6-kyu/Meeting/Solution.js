/**
 * @function meeting
 * @param {string} s
 * @returns {string}
 */

function meeting(s) {}

/**
 * @function sortNameArr
 * @param {string[]} arr
 * @returns {string[]}
 */
function sortNameArr(arr) {
	const res = [...arr].sort((first, second) => {
		const firstNameArr = first.split(' ')
		const secondNameArr = second.split(' ')

		return firstNameArr[1] > secondNameArr[2]
	})

	return res
}

/**
 * @function createNamesArr
 * @param {string} s
 * @returns {string[]}
 */
function createNamesArr(s) {
	const arr = s.split(';')
	for (let str of arr) {
		str.replace(';', ' ').toUpperCase()
	}
	return arr
}
