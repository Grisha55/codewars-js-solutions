function anyOdd(x) {
    const oddMask = 0xaaaaaaaa;
    return x & oddMask ? 1 : 0;
}
