function squeakyClean(arr) {
    return [...arr].filter(
        (el) =>
            (typeof el === "number" && el !== 0) ||
            (typeof el === "string" && el.length > 0),
    );
}
