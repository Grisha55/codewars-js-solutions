Array.prototype.sameStructureAs = function (other) {
    if (!Array.isArray(other) || this.length !== other.length) return false;

    for (var i = 0; i < this.length; i++) {
        if (Array.isArray(this[i]) !== Array.isArray(other[i])) return false;
        if (Array.isArray(this[i]) && !this[i].sameStructureAs(other[i]))
            return false;
    }

    return true;
};
