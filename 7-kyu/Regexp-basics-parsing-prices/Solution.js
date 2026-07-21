String.prototype.toCents = function () {
    const match = this.match(/^\$(\d+)\.(\d{2})$/);
    if (!match) return null;
    return parseInt(match[1], 10) * 100 + parseInt(match[2], 10);
};
