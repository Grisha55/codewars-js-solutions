Boolean.prototype.toString = function () {
    return this.valueOf() ? "true" : "false";
};

Number.prototype.toString = function () {
    return "" + this.valueOf();
};

Array.prototype.toString = function () {
    let result = "[";
    for (let i = 0; i < this.length; i++) {
        if (i > 0) result += ", ";
        result += "" + this[i];
    }
    return result + "]";
};
