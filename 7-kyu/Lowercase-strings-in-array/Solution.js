function arrayLowerCase(arr) {
    return [...arr].map((s) => (typeof s === "string" ? s.toLowerCase() : s));
}
