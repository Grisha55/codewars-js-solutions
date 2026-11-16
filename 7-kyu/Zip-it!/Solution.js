Array.prototype.zip = function (arr, fn) {
    const len = Math.min(this.length, arr.length);
    const first = [...this.slice(0, len)];
    const second = [...arr.slice(0, len)];
    const res = [];
    for (let i = 0; i < len; i++) {
        res.push(fn(first[i], second[i]));
    }

    return res;
};
