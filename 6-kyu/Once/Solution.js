function once(fn) {
    let used = false;
    let res;

    return function (...args) {
        if (!used) {
            used = true;
            res = fn.apply(this, args);
        } else {
            return undefined;
        }
        return res;
    };
}
