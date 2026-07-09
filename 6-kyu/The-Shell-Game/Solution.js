function findTheBall(start, swaps) {
    let curPos = start;

    for (let [s, f] of swaps) {
        if (s === curPos) {
            curPos = f;
        } else if (f === curPos) {
            curPos = s;
        }
    }
    return curPos;
}
