function getScore(arr) {
    let score = 0;
    let totalLines = 0;

    const points = {
        1: [40, 100, 300, 1200],
        2: [80, 200, 600, 2400],
        3: [120, 300, 900, 3600],
        4: [160, 400, 1200, 4800],
        5: [200, 500, 1500, 6000],
        6: [240, 600, 1800, 7200],
        7: [280, 700, 2100, 8400],
        8: [320, 800, 2400, 9600],
        9: [360, 900, 2700, 10800],
    };

    for (const lines of arr) {
        if (lines === 0) continue;

        const level = Math.floor(totalLines / 10);
        const basePoints = [40, 100, 300, 1200][lines - 1];
        const levelMultiplier = level + 1;
        score += basePoints * levelMultiplier;

        totalLines += lines;
    }

    return score;
}
