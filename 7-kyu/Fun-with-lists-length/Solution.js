function length(head) {
	if (!head) return 0;

	let length = 0;
	let cur = head;

	while (cur) {
		cur = cur.next;
		length++;
	}

	return length;
}
