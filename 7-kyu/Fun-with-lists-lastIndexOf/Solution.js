function lastIndexOf(head, value) {
    let current = head;
    let index = 0;
    let lastIndex = -1;

    while (current) {
        if (current.data === value) {
            lastIndex = index;
        }
        current = current.next;
        index++;
    }

    return lastIndex;
}
