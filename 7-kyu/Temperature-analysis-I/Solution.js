function lowestTemp(t) {
    if (t.length === 0) return null;
    const arr = t.split(" ").map(Number);
    return Math.min(...arr);
}
