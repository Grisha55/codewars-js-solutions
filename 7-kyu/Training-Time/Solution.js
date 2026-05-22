function shuffleIt(arr, ...indices) {
	const res = [...arr];

	for (const [i, j] of indices) {
		[res[i], res[j]] = [res[j], res[i]];
	}

	return res;
}
