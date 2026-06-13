function howManyGifts(maxBudget, gifts) {
	const sGifts = [...gifts].sort((a, b) => a - b);
	let cnt = 0;
	let bud = maxBudget;

	for (const m of sGifts) {
		if (bud - m >= 0) {
			cnt++;
			bud -= m;
		} else {
			break;
		}
	}

	return cnt;
}
