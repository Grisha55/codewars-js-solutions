function middleMe(N, X, Y) {
    if (N % 2 !== 0) return X;

    let res = "";
    for (let i = 0; i <= N; i++) {
        if (i < N / 2) {
            res += Y;
        } else if (i === N / 2) {
            res += X;
        } else {
            res += Y;
        }
    }

    return res;
}
