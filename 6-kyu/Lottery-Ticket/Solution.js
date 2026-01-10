/**
 * @function bingo
 * @param {[[string, number]]} ticket 
 * @param {number} win 
 */

function bingo(ticket, win){
	let cnt = 0;

	for (const arr of ticket) {
		cnt += countSum(arr);
	}

	return cnt >= win ? 'Winner!' : 'Loser!';
}

function countSum(arr){
	const [chars, num] = arr;

	for (const c of chars) {
		if (c.charCodeAt(0) === num) {
			return 1;
		}
	}

	return 0;
}