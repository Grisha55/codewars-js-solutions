function reject(array, predicate) {
	return [...array].filter(el => !predicate(el));
}
