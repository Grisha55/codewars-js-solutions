function dbSort(a) {
	const nums = [...a].filter(n => typeof n === 'number').sort((a, b) => a - b);
	const chars = [...a].filter(n => typeof n === 'string').sort();

	return [...nums, ...chars];
}
