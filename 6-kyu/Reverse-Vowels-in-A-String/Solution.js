function reverseVowels(str) {
    const vowels = [];

    for (const c of str) {
        const cL = c.toLowerCase();
        if ("aeoiu".includes(cL)) {
            vowels.push(c);
        }
    }

    vowels.reverse();

    let res = "";
    let curIdx = 0;

    for (const c of str) {
        const cL = c.toLowerCase();
        if ("aeoiu".includes(cL)) {
            res += vowels[curIdx];
            curIdx++;
        } else {
            res += c;
        }
    }

    return res;
}
