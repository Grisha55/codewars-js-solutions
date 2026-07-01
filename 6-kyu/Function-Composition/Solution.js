function compose(...funcs) {
    return function (initialValue) {
        // Начинаем с последней функции и идем к первой
        let result = initialValue;

        // Проходим функции в обратном порядке (с конца массива к началу)
        for (let i = funcs.length - 1; i >= 0; i--) {
            result = funcs[i](result);
        }

        return result;
    };
}
