function bestMatch(ALAHLYGoals, zamalekGoals) {
    let bestIdx = 0;
    let minDiff = Infinity;
    let maxZamalekGoals = -1;

    for (let i = 0; i < ALAHLYGoals.length; i++) {
        const diff = ALAHLYGoals[i] - zamalekGoals[i];

        if (
            diff < minDiff ||
            (diff === minDiff && zamalekGoals[i] > maxZamalekGoals)
        ) {
            bestIdx = i;
            minDiff = diff;
            maxZamalekGoals = zamalekGoals[i];
        }
    }

    return bestIdx;
}
