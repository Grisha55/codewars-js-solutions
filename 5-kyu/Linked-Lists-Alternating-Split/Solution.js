function Node(data) {
    this.data = data;
    this.next = null;
}

function Context(first, second) {
    this.first = first;
    this.second = second;
}

function alternatingSplit(head) {
    if (head === null || head.next === null) {
        throw new Error("The list must have at least two nodes");
    }

    let firstHead = null,
        firstTail = null;
    let secondHead = null,
        secondTail = null;
    let current = head;
    let idx = 0;

    while (current) {
        const next = current.next;
        current.next = null;

        if (idx % 2 === 0) {
            if (firstHead === null) {
                firstHead = current;
                firstTail = current;
            } else {
                firstTail.next = current;
                firstTail = current;
            }
        } else {
            if (secondHead === null) {
                secondHead = current;
                secondTail = current;
            } else {
                secondTail.next = current;
                secondTail = current;
            }
        }

        current = next;
        idx++;
    }

    return new Context(firstHead, secondHead);
}
