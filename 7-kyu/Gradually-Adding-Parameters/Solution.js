function add(...args) {
	if (args.length === 0) return 0;
	return [...args]
		.map((num, idx) => num * (idx + 1))
		.reduce((acc, num) => acc + num, 0);
}
