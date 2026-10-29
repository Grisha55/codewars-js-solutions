function isInMiddle(seq) {
    const len = seq.length;
    for (let i = 0; i <= len - 3; i++) {
        if (seq[i] === "a" && seq[i + 1] === "b" && seq[i + 2] === "c") {
            const left = i;
            const right = len - (i + 3);
            if (Math.abs(left - right) <= 1) return true;
        }
    }
    return false;
}
