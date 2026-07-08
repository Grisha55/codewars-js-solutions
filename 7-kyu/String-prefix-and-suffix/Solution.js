function solve(s) {
    let max = 0;

    for (let i = 1; i < s.length; i++) {
        const prefix = s.slice(0, i);
        const suffix = s.slice(-i);

        if (prefix === suffix && i <= s.length / 2) {
            max = Math.max(max, i);
        }
    }

    return max;
}
