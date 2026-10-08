function reduce(head, f, init) {
    let acc = init;
    let current = head;

    while (current) {
        acc = f(acc, current.data);
        current = current.next;
    }

    return acc;
}
