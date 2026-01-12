function sumOfN(n){
	let res = [0];
	for (let i = 1; i <= Math.abs(n); i++) {
		if (n > 0) {
			res.push(res[i - 1] + i)
		} else {
			res.push(res[i - 1] + (i * -1));
		}
	}
	return res;
}