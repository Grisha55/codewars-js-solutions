String.prototype.sixBitNumber = function () {
    return /^([0-9]|[1-5][0-9]|6[0-3])$/.test(this);
};
