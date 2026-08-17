function isTuringEquation(s) {
    const f = s.split("+")[0].split("").reverse().join("");
    const arr = s.split("=");
    const res = arr[1].split("").reverse().join("");
    const se = arr[0].split("+")[1].split("").reverse().join("");

    return +f + +se === +res;
}
