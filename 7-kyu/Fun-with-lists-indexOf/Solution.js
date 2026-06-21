function indexOf(head, value) {
	let cur = head;
	let idx = 0;

	while (cur) {
		if (cur.data === value) {
			return idx;
		} else {
			idx++;
			cur = cur.next;
		}
	}

	return -1;
}
