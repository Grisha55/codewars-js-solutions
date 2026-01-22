function getMissingElement(superImportantArray) {
	for (let i = 1; i <= superImportantArray.length; i++) {
		if (!superImportantArray.includes(i)) {
			return i;
		}
	}
	return 0;
}
