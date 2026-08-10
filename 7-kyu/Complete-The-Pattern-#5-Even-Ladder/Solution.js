function pattern(n) {
    const res = [];

    for (let i = 2; i <= n; i += 2) {
        res.push(String(i).repeat(i));
    }

    return res.join("\n");
}
