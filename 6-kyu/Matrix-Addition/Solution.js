function matrixAddition(a, b) {
    const res = [];

    for (let i = 0; i < a.length; i++) {
        const curArr = [];
        for (let j = 0; j < a[0].length; j++) {
            curArr.push(a[i][j] + b[i][j]);
        }
        res.push(curArr);
    }

    return res;
}
