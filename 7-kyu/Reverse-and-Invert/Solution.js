function reverseInvert(array) {
    return array
        .filter((item) => Number.isInteger(item))
        .map((num) => {
            const reversed = Number(
                String(Math.abs(num)).split("").reverse().join(""),
            );
            if (num === 0) return -0;
            return num > 0 ? -reversed : reversed;
        });
}
