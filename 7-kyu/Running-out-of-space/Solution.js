function spacey(array) {
	let res = [];
	let str = '';
	for (let i = 1; i <= array.length; i++) {
		str += array[i - 1];
		res.push(str);
	}

	return res;
}
