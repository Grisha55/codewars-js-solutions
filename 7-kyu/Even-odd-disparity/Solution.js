function solve(a) {
    let evens = 0;
    let odd = 0;

    for (let n of a) {
        if (typeof n === "number") {
            if (n % 2 === 0) {
                evens++;
            } else {
                odd++;
            }
        }
    }

    return evens - odd;
}
