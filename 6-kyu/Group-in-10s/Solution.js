function groupIn10s(...nums) {
    const groups = [];

    for (const num of nums) {
        const idx = Math.floor(num / 10);
        if (!groups[idx]) groups[idx] = [];
        groups[idx].push(num);
    }

    for (let i = 0; i < groups.length; i++) {
        if (groups[i]) groups[i].sort((a, b) => a - b);
    }

    return groups;
}
