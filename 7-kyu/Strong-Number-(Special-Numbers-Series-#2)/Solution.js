function strong(n) {
	let sum = 0;

	for (let char of n.toString()) {
		sum += countFact(Number(char));
	}
	return n === sum ? 'STRONG!!!!' : 'Not Strong !!';
}

function countFact(num) {
	let res = 1;
	for (let i = 1; i <= num; i++) {
		res *= i;
	}
	return res;
}
