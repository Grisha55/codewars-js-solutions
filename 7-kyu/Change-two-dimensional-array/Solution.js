function matrix(array) {
    const res = Array.from({ length: array.length }, () =>
        Array(array[0].length).fill(0),
    );

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[0].length; j++) {
            if (i === j && array[i][j] < 0) {
                res[i][j] = 0;
            } else if (i === j && array[i][j] >= 0) {
                res[i][j] = 1;
            } else {
                res[i][j] = array[i][j];
            }
        }
    }

    return res;
}
