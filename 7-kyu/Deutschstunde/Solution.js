function derDieDas(wort) {
    const vowels = "a, e, i, o, u, ä, ö, ü";
    let cnt = 0;

    for (const c of wort.toLowerCase()) {
        if (vowels.includes(c)) {
            cnt++;
        }
    }

    if (cnt < 2) {
        return `das ${wort}`;
    } else if (cnt > 3) {
        return `der ${wort}`;
    } else {
        return `die ${wort}`;
    }
}
