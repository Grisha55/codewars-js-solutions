function fix(paragraph) {
    if (paragraph.length === 0) return "";

    const arr = paragraph
        .split(". ")
        .map((s) => s[0].toUpperCase() + s.slice(1));
    return arr.join(". ");
}
