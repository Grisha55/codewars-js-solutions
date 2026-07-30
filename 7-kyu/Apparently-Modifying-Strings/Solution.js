function apparently(string) {
    const words = string.split(" ");
    const res = [];

    for (let i = 0; i < words.length; i++) {
        if (
            (words[i] === "and" || words[i] === "but") &&
            words[i + 1] !== "apparently"
        ) {
            res.push(words[i]);
            res.push("apparently");
        } else {
            res.push(words[i]);
        }
    }

    return res.join(" ");
}
