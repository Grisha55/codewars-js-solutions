function countVegetables(string) {
    const vegs = [
        "cabbage",
        "carrot",
        "celery",
        "cucumber",
        "mushroom",
        "onion",
        "pepper",
        "potato",
        "tofu",
        "turnip",
    ];
    const counts = {};

    for (const v of vegs) {
        counts[v] = 0;
    }

    const words = string.split(" ");
    for (const w of words) {
        if (vegs.includes(w)) {
            counts[w]++;
        }
    }

    const res = [];
    for (const v of vegs) {
        if (counts[v] > 0) {
            res.push([counts[v], v]);
        }
    }

    res.sort((a, b) => {
        if (a[0] !== b[0]) {
            return b[0] - a[0];
        }
        return b[1].localeCompare(a[1]);
    });

    return res;
}
