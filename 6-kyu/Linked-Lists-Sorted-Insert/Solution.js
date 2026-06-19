function Node(data) {
	this.data = data;
	this.next = null;
}

function sortedInsert(head, data) {
	const newNode = new Node(data);

	if (!head || data < head.data) {
		newNode.next = head;
		return newNode;
	}

	let cur = head;

	while (cur.next && cur.next.data < data) {
		cur = cur.next;
	}

	newNode.next = cur.next;
	cur.next = newNode;

	return head;
}
