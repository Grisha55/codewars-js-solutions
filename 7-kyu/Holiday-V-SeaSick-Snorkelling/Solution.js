function seaSick(s) {
    if (s.length < 2) return "No Problem";

    let changes = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== s[i - 1]) changes++;
    }

    return changes * 5 > s.length ? "Throw Up" : "No Problem";
}
