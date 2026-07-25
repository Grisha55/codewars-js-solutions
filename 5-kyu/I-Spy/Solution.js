function spyOn(func) {
    const data = {
        calls: [],
        returns: [],
        count: 0,
    };

    const spy = function (...args) {
        data.count++;
        data.calls.push(...args);
        const result = func.apply(this, args);
        data.returns.push(result);
        return result;
    };

    spy.callCount = function () {
        return data.count;
    };

    spy.wasCalledWith = function (val) {
        return data.calls.includes(val);
    };

    spy.returned = function (val) {
        return data.returns.includes(val);
    };

    return spy;
}
