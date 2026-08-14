function getDay(day, isLeap) {
    const daysInMonth = [
        31,
        isLeap ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    let remaining = day;
    for (let i = 0; i < daysInMonth.length; i++) {
        if (remaining <= daysInMonth[i]) {
            return `${monthNames[i]}, ${remaining}`;
        }
        remaining -= daysInMonth[i];
    }
    return "";
}
