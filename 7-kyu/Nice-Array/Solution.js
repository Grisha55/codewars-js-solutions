function isNice(arr) {
	if (arr.length === 0) return false;
	for (const num of arr) {
		if (arr.includes(num - 1) || arr.includes(num + 1)) {
			continue;
		} else {
			return false;
		}
	}
	console.log(arr);
	return true;
}
