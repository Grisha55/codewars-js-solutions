function addArrays(array1, array2) {
	if (array1.length !== array2.length) {
		throw new Error('Should be same length');
	}

	const res = [];

	for (let i = 0; i < array1.length; i++) {
		const val = array1[i] + array2[i];
		res.push(val);
	}

	return res;
}
