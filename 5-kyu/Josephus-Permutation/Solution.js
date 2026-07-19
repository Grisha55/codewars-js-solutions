function josephus(items, k) {
    const res = [];
    let i = 0;

    while (items.length > 0) {
        i += k - 1;
        i %= items.length;
        res.push(items[i]);
        items.splice(i, 1);
    }

    return res;
}
