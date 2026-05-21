function seqlist(first, c, l) {
	const res = Array.of(0).fill(l);
	res[0] = first;
	for (let i = 1; i < l; i++) {
		res.push(res[i - 1] + c);
	}

	return res;
}
