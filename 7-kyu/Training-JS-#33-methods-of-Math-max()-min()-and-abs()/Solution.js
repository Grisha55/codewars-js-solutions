function maxMin(arr1, arr2) {
    const res = [];

    for (let i = 0; i < arr1.length; i++) {
        const val = Math.abs(arr1[i] - arr2[i]);
        res.push(val);
    }

    const max = Math.max(...res);
    const min = Math.min(...res);

    return [max, min];
}
