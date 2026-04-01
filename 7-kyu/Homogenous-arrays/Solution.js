function filterHomogenous(arrays) {
	return arrays.filter(subArray => {
		// Filter out empty arrays
		if (subArray.length === 0) return false;

		// Check if all items are of the same type
		const firstType = typeof subArray[0];
		return subArray.every(item => typeof item === firstType);
	});
}
