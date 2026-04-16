function matchArrays(v, r) {
	return [...v].filter(s => r.includes(s)).length;
}
