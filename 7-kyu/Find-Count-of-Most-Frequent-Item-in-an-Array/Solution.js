function mostFrequentItemCount(collection){
	if (collection.length === 0) return 0;
	const counts = {};
	let maxCount = 0;

	for (const item of collection) {
		counts[item] = (counts[item] || 0) + 1;
		if (counts[item] > maxCount) {
			maxCount = counts[item];
		}
	}

	return maxCount;
}