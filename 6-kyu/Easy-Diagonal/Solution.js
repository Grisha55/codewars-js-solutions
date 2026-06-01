function diagonal(n, p) {
	return binomial(n + 1, p + 1);
}

function binomial(n, k) {
	if (k < 0 || k > n) return 0;

	k = Math.min(k, n - k);

	let res = 1;
	for (let i = 1; i <= k; i++) {
		res = (res * (n - k + i)) / i;
	}

	return Math.round(res);
}
