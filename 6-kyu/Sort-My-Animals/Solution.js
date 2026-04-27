function sortAnimal(animals) {
	if (animals.length === 0) return [];

	return [...animals].sort((f, s) => {
		if (f.numberOfLegs !== s.numberOfLegs) {
			return f.numberOfLegs - s.numberOfLegs;
		} else {
			return f.name.localeCompare(s.name) - s.name.localeCompare(f.name);
		}
	});
}
