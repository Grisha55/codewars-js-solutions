function getWeight(name) {
    let sum = 0;

    for (const c of name) {
        if ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z")) {
            if (c === c.toLowerCase()) {
                sum += c.toUpperCase().charCodeAt(0);
            } else {
                sum += c.toLowerCase().charCodeAt(0);
            }
        }
    }

    return sum;
}
