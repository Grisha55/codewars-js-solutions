function Node(data) {
    this.data = data;
    this.next = null;
}

function removeDuplicates(head) {
    if (!head) return null;

    let cur = head;

    while (cur && cur.next) {
        if (cur.data === cur.next.data) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }

    return head;
}
