function reOrdering(text) {
    const a = text.split(" ");
    if (a.length === 1) return text;
    const c = a.filter((s) => s[0] === s[0].toUpperCase())[0];
    let r = c;
    for (const s of a) {
        if (s !== c) {
            r += " " + s;
        }
    }
    return r;
}
