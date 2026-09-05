function charToAscii(string) {
    if (string.length === 0) return null;

    const res = {};
    for (const c of string) {
        if ("abcdefghijklmnopqrstuvwxyz".includes(c.toLowerCase())) {
            res[c] = c.charCodeAt(0);
        }
    }
    return res;
}
