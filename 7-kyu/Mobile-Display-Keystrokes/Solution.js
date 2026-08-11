function mobileKeyboard(str) {
    const count = {
        0: ["0"],
        1: ["1"],
        2: ["2", "a", "b", "c"],
        3: ["3", "d", "e", "f"],
        4: ["4", "g", "h", "i"],
        5: ["5", "j", "k", "l"],
        6: ["6", "m", "n", "o"],
        7: ["7", "p", "q", "r", "s"],
        8: ["8", "t", "u", "v"],
        9: ["9", "w", "x", "y", "z"],
        "*": ["*"],
        "#": ["#"],
    };

    let cnt = 0;

    for (const c of str) {
        for (const key in count) {
            if (count[key].includes(c)) {
                const idx = count[key].indexOf(c) + 1;
                cnt += idx;
            }
        }
    }

    return cnt;
}
