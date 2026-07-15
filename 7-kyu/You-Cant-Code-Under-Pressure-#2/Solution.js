function Counter() {
    let count = 0;

    this.check = function () {
        return count;
    };
    this.increment = function () {
        count++;
    };
}
