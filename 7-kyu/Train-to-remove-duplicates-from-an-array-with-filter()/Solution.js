function unique(arr) {
    return [...arr].filter((a, idx) => arr.indexOf(a) === idx);
}
