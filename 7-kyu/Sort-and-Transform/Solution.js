function sortTransform(arr) {
    const toWord = (a) =>
        String.fromCharCode(a[0]) +
        String.fromCharCode(a[1]) +
        String.fromCharCode(a[a.length - 2]) +
        String.fromCharCode(a[a.length - 1]);

    const original = toWord(arr);
    const ascending = toWord([...arr].sort((a, b) => a - b));
    const descending = toWord([...arr].sort((a, b) => b - a));
    const asciiSorted = toWord([...arr].sort((a, b) => a - b));

    return `${original}-${ascending}-${descending}-${asciiSorted}`;
}
