function longestWord(letters) {
    const available = {};
    for (const c of letters) available[c] = (available[c] || 0) + 1;

    const canMake = (word) => {
        const need = {};
        for (const c of word) {
            need[c] = (need[c] || 0) + 1;
            if (need[c] > (available[c] || 0)) return false;
        }
        return true;
    };

    const sorted = [...words].sort(
        (a, b) => b.length - a.length || a.localeCompare(b),
    );

    let maxLen = -1;
    const res = [];

    for (const w of sorted) {
        if (w.length < maxLen) break;
        if (canMake(w)) {
            if (w.length > maxLen) {
                maxLen = w.length;
                res.length = 0;
            }
            res.push(w);
        }
    }

    return res.length ? res : null;
}
