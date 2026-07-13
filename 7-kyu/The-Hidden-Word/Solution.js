function hiddenWord(num) {
    const letters = {
        6: "a",
        1: "b",
        7: "d",
        4: "e",
        3: "i",
        2: "l",
        9: "m",
        8: "n",
        0: "o",
        5: "t",
    };

    const strNum = num.toString();
    let res = "";

    for (const c of strNum) {
        res += letters[c];
    }

    return res;
}
