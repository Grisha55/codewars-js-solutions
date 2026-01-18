function firstToLast(str, c) {
	const firstIndex = str.indexOf(c);
	const lastIndex = str.lastIndexOf(c);
	return firstIndex === -1 ? -1 : lastIndex - firstIndex;
}
