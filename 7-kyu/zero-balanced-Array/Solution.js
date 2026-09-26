function ìsZeroBalanced(n) {
    if (n.length === 0) return false;

    const counts = new Map();

    for (const num of n) {
        counts.set(num, (counts.get(num) || 0) + 1);
    }

    for (const [num, count] of counts) {
        if (num === 0) continue;
        if (counts.get(-num) !== count) return false;
    }

    return true;
}
