function binaryCleaner(arr) {
    const f = [];
    const s = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 2) {
            f.push(arr[i]);
        } else {
            s.push(i);
        }
    }

    return [f, s];
}
