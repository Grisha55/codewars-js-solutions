var calc = function (a) {
    return a
        .map((n) => (n > 0 ? n ** 2 : n))
        .map((n, idx) => ((idx + 1) % 3 === 0 ? n * 3 : n))
        .map((n, idx) => ((idx + 1) % 5 === 0 ? n * -1 : n))
        .reduce((acc, n) => acc + n, 0);
};
