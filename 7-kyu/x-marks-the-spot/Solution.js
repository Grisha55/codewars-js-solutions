function xMarksTheSpot(matrix) {
    let xCount = 0;
    let res = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === "x") {
                res.push(i, j);
                xCount++;
            }
        }
    }

    if (xCount === 1) {
        return res;
    } else {
        return [];
    }
}
