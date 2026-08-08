function tops(msg) {
    if (!msg) return "";
    let res = "";
    let idx = 1;
    let pos = 1;

    while (pos < msg.length) {
        res += msg[pos];
        idx += 4;
        pos += idx;
    }

    return res.split("").reverse().join("");
}
