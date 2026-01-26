function twoHighest(arr) {
	let uniqueSorted = Array.from(new Set(arr)).sort((a, b) => b - a);
	return uniqueSorted.slice(0, 2);
}