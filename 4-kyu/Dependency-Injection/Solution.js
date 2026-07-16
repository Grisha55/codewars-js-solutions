/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
    this.dependency = dependency;
};

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
    const fnStr = func.toString();
    const match = fnStr.match(/^(?:function\s*[^(]*)?\s*\(([^)]*)\)/);
    const paramNames =
        match && match[1]
            ? match[1]
                  .split(",")
                  .map((s) => s.trim())
                  .filter((s) => s !== "")
            : [];

    const deps = this.dependency;

    return function () {
        const args = paramNames.map((name) => deps[name]);
        return func.apply(this, args);
    };
};
