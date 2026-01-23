function bandNameGenerator(str) {
	if (str[0].toLowerCase() === str[str.length - 1].toLowerCase()) {
		return (str[0].toUpperCase() + str.slice(1) + str.slice(1)).trim();
	}

	return 'The ' + str[0].toUpperCase() + str.slice(1);
}