function remove(str, what) {
    let res = "";

    for (let c of str) {
        if (what[c] > 0) {
            what[c]--;
        } else {
            res += c;
        }
    }

    return res;
}
