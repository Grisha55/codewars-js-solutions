function calc(expression) {
    let pos = 0;
    const str = expression.replace(/\s/g, "");

    function parseNumber() {
        let num = "";
        while (pos < str.length && /[\d.]/.test(str[pos])) {
            num += str[pos++];
        }
        return parseFloat(num);
    }

    function parseFactor() {
        if (str[pos] === "(") {
            pos++; // пропускаем '('
            const result = parseExpression();
            pos++; // пропускаем ')'
            return result;
        }
        if (str[pos] === "-") {
            pos++;
            return -parseFactor();
        }
        return parseNumber();
    }

    function parseTerm() {
        let result = parseFactor();
        while (pos < str.length && (str[pos] === "*" || str[pos] === "/")) {
            const op = str[pos++];
            const next = parseFactor();
            if (op === "*") result *= next;
            else result /= next;
        }
        return result;
    }

    function parseExpression() {
        let result = parseTerm();
        while (pos < str.length && (str[pos] === "+" || str[pos] === "-")) {
            const op = str[pos++];
            const next = parseTerm();
            if (op === "+") result += next;
            else result -= next;
        }
        return result;
    }

    return parseExpression();
}
