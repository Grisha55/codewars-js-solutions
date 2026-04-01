function mirror(data) {
	if (data.length < 2) return data;

	const sortedData = [...data].sort((a, b) => a - b);
	const secondHalf = sortedData.slice(0, -1).reverse();

	return [...sortedData, ...secondHalf];
}
