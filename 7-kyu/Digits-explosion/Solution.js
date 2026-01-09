/**
 * @function explode
 * @param {string} s 
 * @returns {string}
 */

function explode(s){
	let str = '';
	for (const c of s) {
		for (let i = 0; i < Number(c); i++) {
			str += c;
		}
	}
	return str;
}