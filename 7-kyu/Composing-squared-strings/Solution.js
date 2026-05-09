function compose(s1, s2) {
	const s1Arr = s1.split('\n');
	const s2Arr = s2.split('\n');
	const n = s1Arr.length;
	const res = [];

	for (let i = 0; i < n; i++) {
		const fromS1 = s1Arr[i].slice(0, i + 1);
		const fromS2 = s2Arr[n - 1 - i].slice(0, n - i);

		res.push(fromS1 + fromS2);
	}

	return res.join('\n');
}
