function solve(s) {
    let cnt = 0;

    for (let i = 0; i < s.length; i++) {
        if (parseInt(s[i]) % 2 !== 0) {
            cnt += i + 1;
        }
    }

    return cnt;
}
