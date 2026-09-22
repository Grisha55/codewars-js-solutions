function olympicRing(s) {
    const oneRing = "abdegopqADOPQR";
    const twoRings = "B";

    let total = 0;
    for (const ch of s) {
        if (twoRings.includes(ch)) {
            total += 2;
        } else if (oneRing.includes(ch)) {
            total += 1;
        }
    }

    const score = Math.floor(total / 2);

    if (score <= 1) return "Not even a medal!";
    if (score === 2) return "Bronze!";
    if (score === 3) return "Silver!";
    return "Gold!";
}
