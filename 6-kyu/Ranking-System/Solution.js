function rankings(arr) {
    const places = [...arr].sort((a, b) => b - a);
    const res = [];
    for (const n of arr) {
        const place = places.indexOf(n);
        res.push(place + 1);
    }

    return res;
}
