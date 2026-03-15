function convertHashToArray(hash) {
	const res = [];

	for (key in hash) {
		const pair = [key, hash[key]];
		res.push(pair);
	}

	return res;
}
