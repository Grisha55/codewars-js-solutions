function countAdjacentPairs(searchString) {
	const arr = searchString.toLowerCase().split(' ');
	let cnt = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i + 1]) {
			cnt++;
			while (i < arr.length - 1 && arr[i] === arr[i + 1]) {
				i++;
			}
		}
	}

	return cnt;
}
