var fibonacci = (function () {
    var cache = {};

    function fib(n) {
        if (n === 0 || n === 1) return n;
        if (cache[n] !== undefined) return cache[n];
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    }

    return fib;
})();
