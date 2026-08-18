function womensAge(age) {
    if (age % 2 === 0) {
        const base = age / 2;
        return `${age}? That's just 20, in base ${base}!`;
    } else {
        const base = (age - 1) / 2;
        return `${age}? That's just 21, in base ${base}!`;
    }
}
