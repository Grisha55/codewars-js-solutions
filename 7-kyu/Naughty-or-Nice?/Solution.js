function getNiceNames(people) {
	if (people.length === 0) return [];

	return [...people].filter(p => p.wasNice).map(p => p.name);
}

function getNaughtyNames(people) {
	if (people.length === 0) return [];
	return [...people].filter(p => !p.wasNice).map(p => p.name);
}
