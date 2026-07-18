function isMerge(s, part1, part2) {
    if (part1.length + part2.length !== s.length) return false;

    const merge = (i, j, k) => {
        if (k === s.length) return true;
        if (i < part1.length && part1[i] === s[k] && merge(i + 1, j, k + 1))
            return true;
        if (j < part2.length && part2[j] === s[k] && merge(i, j + 1, k + 1))
            return true;
        return false;
    };

    return merge(0, 0, 0);
}
