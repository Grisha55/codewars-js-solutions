function hasUniqueChars(str) {
    const count = {};
    for (const c of str) {
        count[c] = (count[c] || 0) + 1;
    }
    for (const key in count) {
        if (count[key] > 1) return false;
    }
    return true;
}
