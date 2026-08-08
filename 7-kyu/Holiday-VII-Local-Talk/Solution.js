function pak(s) {
    const res = [];
    const l = s.trim();
    if (l.length === 0) return "";
    const a = s.split(" ");

    for (let i = 0; i < a.length; i++) {
        if (i > 0 && i < a.length) {
            const r = "pak " + a[i];
            res.push(r);
        } else {
            res.push(a[i]);
        }
    }

    return res.join(" ");
}
