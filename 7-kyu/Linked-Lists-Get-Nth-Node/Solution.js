function Node(data) {
	this.data = data;
	this.next = null;
}

function getNth(node, index) {
	if (!node) {
		throw new Error('Invalid argument: list is empty');
	}

	if (index < 0) {
		throw new Error('Invalid argument: index cannot be negative');
	}

	let current = node;
	let currentIndex = 0;

	while (current) {
		if (currentIndex === index) {
			return current;
		}
		current = current.next;
		currentIndex++;
	}
	throw new Error('Invalid argument: index out of range');
}
