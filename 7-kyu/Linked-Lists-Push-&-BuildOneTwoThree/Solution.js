function Node(data) {
	this.data = data;
	this.next = null;
}

function push(head, data) {
	var newNode = new Node(data);
	newNode.next = head;
	return newNode;
}

function buildOneTwoThree() {
	var head = null;
	head = push(head, 3);
	head = push(head, 2);
	head = push(head, 1);
	return head;
}
