var say = function (string1) {
    return function (s2) {
        return string1 + " " + s2;
    };
};
