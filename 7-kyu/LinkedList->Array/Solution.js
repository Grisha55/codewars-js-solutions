function listToArray(list) {
	const res = [];
	res.push(list.value);
	let cur = list.next;

	while (cur) {
		res.push(cur.value);
		cur = cur.next;
	}

	return res;
}
