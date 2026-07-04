function binaryPyramid(m, n) {
    let finalNum = 0;

    for (let i = m; i <= n; i++) {
        const binary = i.toString(2);
        finalNum += +binary;
    }

    return finalNum.toString(2);
}
