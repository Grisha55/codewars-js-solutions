function cutIt(arr) {
	let smallestLength = arr[0].length;

	for (const str of arr) {
		if (smallestLength > str.length) {
			smallestLength = str.length;
		}
	}

	const res = arr.map(str => str.slice(0, smallestLength));
	return res;
}
