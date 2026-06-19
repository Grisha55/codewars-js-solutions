function solve(stones) {
	let res = 0;
	for (let i = 1; i < stones.length; i++) {
		if (stones[i - 1] === stones[i]) {
			res++;
		}
	}

	return res;
}
