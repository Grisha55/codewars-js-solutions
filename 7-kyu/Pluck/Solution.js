function pluck(objs, name) {
	const res = [];

	for (const dict of objs) {
		res.push(dict[name]);
	}

	return res;
}
