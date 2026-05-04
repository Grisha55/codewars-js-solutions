var Calculator = {
	average: function (...args) {
		if (args.length === 0) return 0;
		return [...args].reduce((acc, n) => acc + n, 0) / args.length;
	}
};
