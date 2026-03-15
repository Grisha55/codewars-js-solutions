function sortByBit(arr) {
	arr.sort((a, b) => {
		const bitsA = a.toString(2).replace(/0/g, '').length;
		const bitsB = b.toString(2).replace(/0/g, '').length;

		return bitsA - bitsB || a - b;
	});
}
