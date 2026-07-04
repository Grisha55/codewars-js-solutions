function genfib() {
    const fibs = [0, 1, 1];
    let cnt = -1;
    return function fib() {
        if (cnt < 2) {
            cnt++;
            return fibs[cnt];
        } else {
            console.log(fibs);
            const next = fibs[fibs.length - 2] + fibs[fibs.length - 1];
            fibs.push(next);
            return next;
        }
    };
}
