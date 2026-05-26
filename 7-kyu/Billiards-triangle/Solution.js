function pyramid(balls) {
	let ballsCopy = balls;
	let curBalls = 1;
	let res = 0;

	while (ballsCopy >= curBalls) {
		ballsCopy -= curBalls;
		curBalls++;
		res++;
	}

	return res;
}
