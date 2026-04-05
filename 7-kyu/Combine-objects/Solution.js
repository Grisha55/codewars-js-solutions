function combine(...objs) {
	const res = {};
	for (objc of objs) {
		for (key in objc) {
			res[key] = (res[key] || 0) + objc[key];
		}
	}

	return res;
}
