function Node(data) {
    this.data = data;
    this.next = null;
}

function insertSort(head) {
    if (head === null || head.next === null) return head;

    let sorted = null;
    let current = head;

    while (current !== null) {
        const next = current.next;
        current.next = null;
        sorted = sortedInsert(sorted, current.data);
        current = next;
    }

    return sorted;
}
