function shifter(s) {
    const shifters = new Set();
    const valid = "HINOSXZMW";

    for (const word of s.split(" ")) {
        if (word && [...word].every((c) => valid.includes(c))) {
            shifters.add(word);
        }
    }

    return shifters.size;
}
