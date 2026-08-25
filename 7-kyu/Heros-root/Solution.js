function intRac(n, guess) {
    let x = guess;
    let cnt = 1;

    while (true) {
        const next = Math.floor((x + n / x) / 2);
        if (Math.abs(x - next) < 1) {
            break;
        }
        x = next;
        cnt++;
    }

    return cnt;
}
