function lookAndSaySequence(s, n) {
    let current = s;

    for (let step = 1; step < n; step++) {
        let next = "";
        let i = 0;
        while (i < current.length) {
            const ch = current[i];
            let count = 0;
            while (i < current.length && current[i] === ch) {
                count++;
                i++;
            }
            next += count + ch;
        }
        current = next;
    }

    return current;
}
