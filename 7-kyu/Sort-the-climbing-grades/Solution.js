function sortGrades(arr) {
    if (arr.length === 0) return [];
    const ranks = [
        "V0",
        "V0+",
        "V1",
        "V2",
        "V3",
        "V4",
        "V5",
        "V6",
        "V7",
        "V8",
        "V9",
        "V10",
        "V11",
        "V12",
        "V13",
        "V14",
        "V15",
        "V16",
        "V17",
    ];
    return [...arr].sort((a, b) => ranks.indexOf(a) - ranks.indexOf(b));
}
