function sexyName(name) {
    let score = 0;

    for (const ch of name.toUpperCase()) {
        if (SCORES[ch] !== undefined) {
            score += SCORES[ch];
        }
    }

    if (score <= 60) return "NOT TOO SEXY";
    if (score <= 300) return "PRETTY SEXY";
    if (score <= 599) return "VERY SEXY";
    return "THE ULTIMATE SEXIEST";
}
