function countIf(head, p) {
    let cur = head;
    let cnt = 0;

    while (cur) {
        const value = cur.data;
        if (p(value)) {
            cnt++;
        }
        cur = cur.next;
    }

    return cnt;
}
