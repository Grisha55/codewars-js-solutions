var Cat = (function () {
    var totalWeight = 0;
    var catCount = 0;

    function Cat(name, weight) {
        if (name === undefined || weight === undefined) {
            throw new Error("Both name and weight are required");
        }

        this.name = name;

        var _weight = weight;
        totalWeight += weight;
        catCount++;

        Object.defineProperty(this, "weight", {
            get: function () {
                return _weight;
            },
            set: function (newWeight) {
                totalWeight += newWeight - _weight;
                _weight = newWeight;
            },
            enumerable: true,
            configurable: true,
        });
    }

    Cat.averageWeight = function () {
        return totalWeight / catCount;
    };

    return Cat;
})();
