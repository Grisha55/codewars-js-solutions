/**
 * 
 * @param {number} n 
 * @param {number[]} array 
 * @returns {number[]}
 */

function largest(n, array) {
	return array.sort((a, b) => b - a).slice(0, n).reverse();
}