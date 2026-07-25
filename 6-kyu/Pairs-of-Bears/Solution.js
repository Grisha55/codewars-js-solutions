function bears(x, s) {
    let res = "";
    let idx = 0;

    while (idx < s.length) {
        if (s[idx] + s[idx + 1] === "B8" || s[idx] + s[idx + 1] === "8B") {
            res += s[idx] + s[idx + 1];
            idx += 2;
        } else {
            idx++;
        }
    }

    return [res, res.length / 2 >= x];
}
