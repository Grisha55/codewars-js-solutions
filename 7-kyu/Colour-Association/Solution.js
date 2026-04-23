function colourAssociation(array) {
	const res = [];
	for (const arr of array) {
		const obj = {};
		obj[arr[0]] = arr[1];
		res.push(obj);
	}

	return res;
}
