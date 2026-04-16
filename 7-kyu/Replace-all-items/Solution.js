function replaceAll(seq, find, replace) {
	if (seq.length === 0) return [];
	let res = [];
	let changed = false;

	for (const n of seq) {
		if (n === find && !changed) {
			res.push(replace);
		} else {
			res.push(n);
		}
	}
	if (typeof seq[0] === 'string') {
		return res.join('');
	}
	return res;
}
