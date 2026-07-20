function map(head, f) {
    if (!head) return null;

    let newHead = new Node(f(head.data));
    let currentNew = newHead;
    let currentOld = head.next;

    while (currentOld) {
        currentNew.next = new Node(f(currentOld.data));
        currentNew = currentNew.next;
        currentOld = currentOld.next;
    }

    return newHead;
}
