function solve(s) {
    if (s.length % 2 !== 0) return -1;

    let open = 0;
    let close = 0;

    for (const c of s) {
        if (c === "(") {
            open++;
        } else {
            if (open > 0) {
                open--;
            } else {
                close++;
            }
        }
    }

    return Math.ceil(open / 2) + Math.ceil(close / 2);
}
