function getNumberOfSquares(n) {
    let sum = 0;
    let cnt = 0;
    let curNum = 1;

    while (sum < n) {
        if (sum + curNum ** 2 < n) {
            cnt++;
            sum += curNum ** 2;
            curNum++;
        } else {
            break;
        }
    }

    return cnt;
}
