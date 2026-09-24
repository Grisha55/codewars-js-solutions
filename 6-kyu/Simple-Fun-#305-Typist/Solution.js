function typist(s) {
    let cnt = 0;
    let isCaps = false;

    for (const c of s) {
        if (c.toLowerCase() === c && !isCaps) {
            cnt++;
        } else if (c.toLowerCase() === c && isCaps) {
            cnt += 2;
            isCaps = false;
        } else if (c.toLowerCase() !== c && isCaps) {
            cnt++;
        } else {
            isCaps = true;
            cnt += 2;
        }
    }

    return cnt;
}
