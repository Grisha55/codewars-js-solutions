function findAdmin(list, lang) {
	const arr = list.filter(
		dev => dev.language === lang && dev.githubAdmin === 'yes'
	);
	return arr;
}
