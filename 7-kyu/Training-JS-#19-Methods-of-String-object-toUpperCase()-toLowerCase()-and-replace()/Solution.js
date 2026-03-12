function alienLanguage(str) {
	const res = str
		.split(' ')
		.map(str => {
			const resStr =
				str.slice(0, -1).toUpperCase() + str[str.length - 1].toLowerCase();
			return resStr;
		})
		.join(' ');

	return res;
}
