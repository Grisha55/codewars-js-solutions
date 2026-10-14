function tourney(array) {
    const result = [];
    let current = array.slice();

    while (true) {
        result.push(current.slice());

        if (current.length === 1) break;

        const next = [];
        let start = 0;

        if (current.length % 2 === 1) {
            next.push(current[current.length - 1]);
            for (let i = 0; i < current.length - 1; i += 2) {
                next.push(Math.max(current[i], current[i + 1]));
            }
        } else {
            for (let i = 0; i < current.length; i += 2) {
                next.push(Math.max(current[i], current[i + 1]));
            }
        }

        current = next;
    }

    return result;
}
