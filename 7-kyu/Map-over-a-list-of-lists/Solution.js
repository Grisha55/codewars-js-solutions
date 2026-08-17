function gridMap(fn, a) {
    const res = [];
    for (const arr of a) {
        res.push([...arr].map((n) => fn(n)));
    }
    return res;
}
