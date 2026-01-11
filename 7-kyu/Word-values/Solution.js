function wordValue(arr) {
	return arr.map((str, i) => {
		const sum = [...str]
			.filter(c => c !== ' ')
			.reduce((acc, c) => acc + c.charCodeAt(0) - 96, 0);

		return sum * (i + 1);
	});
}
