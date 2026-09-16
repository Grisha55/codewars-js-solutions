function reverseIt(data) {
    if (typeof data === "string") {
        return data.split("").reverse().join("");
    }
    if (typeof data === "number") {
        return Number(String(data).split("").reverse().join(""));
    }
    return data;
}
