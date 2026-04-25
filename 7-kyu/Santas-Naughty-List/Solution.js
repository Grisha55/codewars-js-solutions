function findChildren(santasList, children) {
	const santasSet = new Set(santasList);
	const resultSet = new Set();

	for (const name of children) {
		if (santasSet.has(name)) {
			resultSet.add(name);
		}
	}
	return [...resultSet].sort();
}
