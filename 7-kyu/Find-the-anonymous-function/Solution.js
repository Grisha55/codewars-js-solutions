function FindFunction(func, arr) {
    for (const el of func) {
        if (typeof el === "function") {
            return [...arr].filter(el);
        }
    }

    return -1;
}
