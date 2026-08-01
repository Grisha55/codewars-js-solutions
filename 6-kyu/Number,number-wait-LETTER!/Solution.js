function doMath(s) {
    const parts = s.split(" ");

    const sorted = parts.slice().sort((a, b) => {
        const letterA = a.match(/[a-zA-Z]/).join("");
        const letterB = b.match(/[a-zA-Z]/).join("");
        if (letterA === letterB) {
            return parts.indexOf(a) - parts.indexOf(b);
        }
        return letterA.localeCompare(letterB);
    });

    const numbers = sorted.map((p) => parseInt(p.replace(/[a-zA-Z]/g, "")));

    let result = numbers[0];
    const ops = ["+", "-", "*", "/"];

    for (let i = 1; i < numbers.length; i++) {
        const op = ops[(i - 1) % 4];
        if (op === "+") result += numbers[i];
        else if (op === "-") result -= numbers[i];
        else if (op === "*") result *= numbers[i];
        else if (op === "/") result /= numbers[i];
    }

    return Math.round(result);
}
