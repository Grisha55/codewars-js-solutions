function loop_size(node) {
    const nodesSet = new Set();
    let cur = node;
    let start = null;

    while (true) {
        if (nodesSet.has(cur)) {
            start = cur;
            break;
        } else {
            nodesSet.add(cur);
            cur = cur.next;
        }
    }

    let res = 1;
    while (cur.next !== start) {
        res++;
        cur = cur.next;
    }

    return res;
}
