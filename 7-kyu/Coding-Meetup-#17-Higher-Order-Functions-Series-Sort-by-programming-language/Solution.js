function sortByLanguage(list) {
	return [...list].sort((a, b) => {
		if (a.language !== b.language) {
			return a.language.localeCompare(b.language);
		} else {
			return a.firstName.localeCompare(b.firstName);
		}
	});
}
