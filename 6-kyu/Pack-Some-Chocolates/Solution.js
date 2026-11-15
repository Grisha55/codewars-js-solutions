function makeChocolates(small, big, goal) {
    const maxBig = Math.min(big, Math.floor(goal / 5));
    for (let b = maxBig; b >= 0; b--) {
        const rem = goal - 5 * b;
        if (rem % 2 === 0 && rem / 2 <= small) return rem / 2;
    }
    return -1;
}
