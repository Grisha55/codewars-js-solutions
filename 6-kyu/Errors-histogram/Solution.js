function hist(s) {
    const errors = ["u", "w", "x", "z"];
    const counts = {};

    for (const c of s) {
        if (errors.includes(c)) {
            counts[c] = (counts[c] || 0) + 1;
        }
    }

    return Object.keys(counts)
        .sort()
        .map((c) => `${c}  ${counts[c]}     ${"*".repeat(counts[c])}`)
        .join("\r");
}
