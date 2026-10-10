function runningAverage() {
    let sum = 0;
    let cnt = 0;

    return function (value) {
        sum += value;
        cnt++;
        return Math.round((sum / cnt) * 100) / 100;
    };
}
