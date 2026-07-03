function filterArray(arr, predicate) {
    return arr.filter((n) => Number.isInteger(n) && predicate(n));
}

Array.prototype.even = function () {
    return filterArray(this, (n) => n % 2 === 0);
};

Array.prototype.odd = function () {
    return filterArray(this, (n) => n % 2 !== 0);
};

Array.prototype.under = function (x) {
    return filterArray(this, (n) => n < x);
};

Array.prototype.over = function (x) {
    return filterArray(this, (n) => n > x);
};

Array.prototype.inRange = function (min, max) {
    return filterArray(this, (n) => n >= min && n <= max);
};
