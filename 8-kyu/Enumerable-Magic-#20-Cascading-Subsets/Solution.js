function eachCons(array, n) {
	let res = [];
	let len = [];

	for (let i = 0; i < array.length; i++) {
		len.push(array[i]);
		if (len.length === n) {
			res.push(len);
			len = len.slice(1);
		}
	}

	return res;
}
// [3, 5, 8, 13] n = 2 => [[3, 5], [5, 8], [8, 13]]