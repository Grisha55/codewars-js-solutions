/**
 * @function squares
 * @param {number} x 
 * @param {number} n
 * @returns {number[]} 
 */

function squares(x, n){
	if (n <= 0) {
		return [];
	}

	let res = [];
	let square = x;
	for (let i = 0; i < n; i++) {
		res.push(square);
		square = square ** 2;
	}

	return res;
}