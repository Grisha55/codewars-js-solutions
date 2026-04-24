function riders(stations) {
	let curSum = 0;
	let cnt = 1;

	for (st of stations) {
		if (curSum + st <= 100) {
			curSum += st;
		} else {
			curSum = st;
			cnt++;
		}
	}

	return cnt;
}
