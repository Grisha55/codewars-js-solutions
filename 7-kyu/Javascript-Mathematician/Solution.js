function calculate(...args) {
    return function (...ars) {
        return (
            [...args].reduce((acc, num) => acc + num) +
            [...ars].reduce((acc, num) => acc + num)
        );
    };
}
