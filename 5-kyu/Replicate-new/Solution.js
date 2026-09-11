function nouveau(Constructor, ...args) {
    const instance = Object.create(Constructor.prototype);
    const res = Constructor.apply(instance, args);
    if (
        res !== null &&
        (typeof res === "object" || typeof res === "function")
    ) {
        return res;
    }

    return instance;
}
