Object.defineProperty(Array.prototype, "containsAll", {
    value: function containsAll(a) {
        for (const val of a) {
            if (!this.includes(val)) return false;
        }
        return true;
    },
});
