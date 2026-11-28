function solution(hour) {
    const strHour = hour.toString();
    if (strHour.length < 3 || strHour.length > 4)
        throw new Error("raise an exception");

    if (strHour.length === 3) {
        return strHour.slice(0, 1) + ":" + strHour.slice(1);
    } else {
        return strHour.slice(0, 2) + ":" + strHour.slice(2);
    }
}
