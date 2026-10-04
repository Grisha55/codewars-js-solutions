function duplicateSandwich(a) {
    const count = {};
    let el;

    for (const e of a) {
        count[e] = (count[e] || 0) + 1;
        if (count[e] === 2) {
            el = e;
            break;
        }
    }

    const res = [];
    let found = false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] === el) {
            found = !found;
        } else if (found) {
            res.push(a[i]);
        }
    }

    if (typeof a === "string") return res.join("");

    return res;
}
