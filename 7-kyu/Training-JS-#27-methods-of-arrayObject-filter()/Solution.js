function countGrade(scores) {
    const grades = { S: 0, A: 0, B: 0, C: 0, D: 0, X: 0 };

    for (const score of scores) {
        if (score < 0) {
            grades["X"]++;
        } else if (score < 60 && score >= 0) {
            grades["D"]++;
        } else if (score < 80 && score >= 60) {
            grades["C"]++;
        } else if (score < 90 && score >= 80) {
            grades["B"]++;
        } else if (score < 100 && score >= 90) {
            grades["A"]++;
        } else if (score === 100) {
            grades["S"]++;
        }
    }

    return grades;
}
