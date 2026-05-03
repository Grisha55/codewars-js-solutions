function giveChange(amount) {
	const res = Array(5).fill(0);
	const values = [1, 5, 10, 20, 50, 100];

	for (let i = 5; i >= 0; i--) {
		const minus = Math.floor(amount / values[i]);
		res[i] = minus;
		amount -= values[i] * minus;
	}

	return res;
}
