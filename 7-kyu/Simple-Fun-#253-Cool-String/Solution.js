function coolString(s) {
    if (!/^[A-Za-z]+$/.test(s)) return false;

    for (let i = 0; i < s.length - 1; i++) {
        const cur = s[i];
        const next = s[i + 1];
        const curUpper = cur >= "A" && cur <= "Z";
        const nextUpper = next >= "A" && next <= "Z";
        const curLower = cur >= "a" && cur <= "z";
        const nextLower = next >= "a" && next <= "z";

        if ((curUpper && nextUpper) || (curLower && nextLower)) {
            return false;
        }
    }
    return true;
}
