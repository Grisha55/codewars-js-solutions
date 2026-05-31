class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

function insertNth(head, index, data) {
	// Вставка в начало
	if (index === 0) {
		return new Node(data, head);
	}

	let current = head;
	let currentIndex = 0;

	// Идем до узла перед нужным индексом
	while (current && currentIndex < index - 1) {
		current = current.next;
		currentIndex++;
	}

	// Если current === null, значит индекс слишком большой
	if (!current) {
		throw new Error('InvalidArgumentException');
	}

	// Создаем новый узел и вставляем его
	const newNode = new Node(data, current.next);
	current.next = newNode;

	return head;
}
