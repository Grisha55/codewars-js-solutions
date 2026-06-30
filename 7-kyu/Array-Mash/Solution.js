function arrayMash(array1, array2) {
    const len = array1.length;
    const res = [];

    for (let i = 0; i < len; i++) {
        res.push(array1[i]);
        res.push(array2[i]);
    }

    return res;
}
