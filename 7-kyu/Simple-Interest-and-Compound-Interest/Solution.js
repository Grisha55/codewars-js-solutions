function interest(p, r, n) {
    const simple = p * (1 + r * n);
    const compound = p * Math.pow(1 + r, n);
    return [Math.round(simple), Math.round(compound)];
}
