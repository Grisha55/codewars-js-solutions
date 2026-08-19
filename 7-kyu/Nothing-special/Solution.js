function nothingSpecial(str) {
    if (typeof str !== "string") {
        return "Not a string!";
    }
    return str.replace(/[^a-zA-Z0-9\s]/g, "");
}
