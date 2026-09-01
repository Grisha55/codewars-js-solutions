function anyMatch(head, p) {
    let cur = head;
    while (cur) {
        if (p(cur.data)) {
            return true;
        }
        cur = cur.next;
    }
    return false;
}

function allMatch(head, p) {
    let cur = head;
    while (cur) {
        if (!p(cur.data)) {
            return false;
        }
        cur = cur.next;
    }
    return true;
}
