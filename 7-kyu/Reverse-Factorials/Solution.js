function reverseFactorial(num) {
    let res = 1;
    let cnt = 0;

    for (let i = 1; i <= num; i++) {
        res *= i;
        cnt++;
        if (res === num) {
            return cnt.toString() + "!";
        }
    }

    return "None";
}
