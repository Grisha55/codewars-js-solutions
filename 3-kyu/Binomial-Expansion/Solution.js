function expand(expr) {
    // Разбираем выражение (ax+b)^n
    const [left, right] = expr.split("^");
    const n = parseInt(right);

    // Извлекаем a, b и переменную из (ax+b)
    const inner = left.slice(1, -1); // убираем скобки
    const varMatch = inner.match(/[a-z]/);
    const variable = varMatch ? varMatch[0] : "";

    // Парсим a и b
    let a, b;
    const parts = inner.split(variable);

    if (parts.length === 2) {
        // ax + b
        const aStr = parts[0] || "1";
        const bStr = parts[1] || "0";
        a = parseCoefficient(aStr);
        b = parseInt(bStr) || 0;
    } else {
        // Просто число или переменная без коэффициента
        if (inner.includes(variable)) {
            a = 1;
            b = 0;
        } else {
            a = 0;
            b = parseInt(inner);
        }
    }

    // Если n = 0, возвращаем 1
    if (n === 0) return "1";

    // Вычисляем коэффициенты через бином Ньютона
    const coefficients = [];
    for (let k = 0; k <= n; k++) {
        const coeff = binomial(n, k) * Math.pow(a, n - k) * Math.pow(b, k);
        coefficients.push(coeff);
    }

    // Формируем строку результата
    let result = "";
    for (let k = 0; k <= n; k++) {
        const coeff = coefficients[k];
        const power = n - k;

        if (coeff === 0) continue;

        let term = "";

        // Коэффициент
        if (power === 0) {
            // Последний член - только число
            term = coeff.toString();
        } else if (power === 1) {
            // x^1 -> x
            if (coeff === 1) {
                term = variable;
            } else if (coeff === -1) {
                term = "-" + variable;
            } else {
                term = coeff + variable;
            }
        } else {
            // x^n
            if (coeff === 1) {
                term = variable + "^" + power;
            } else if (coeff === -1) {
                term = "-" + variable + "^" + power;
            } else {
                term = coeff + variable + "^" + power;
            }
        }

        // Добавляем знак
        if (result === "") {
            result = term;
        } else {
            if (coeff > 0) {
                result += "+" + term;
            } else {
                result += term;
            }
        }
    }

    return result;
}

function binomial(n, k) {
    if (k === 0 || k === n) return 1;
    let result = 1;
    for (let i = 1; i <= k; i++) {
        result = (result * (n - k + i)) / i;
    }
    return result;
}

function parseCoefficient(str) {
    if (str === "" || str === "+") return 1;
    if (str === "-") return -1;
    return parseInt(str);
}
