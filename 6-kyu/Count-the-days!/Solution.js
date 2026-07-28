function countDays(d) {
    const today = new Date();
    const event = new Date(d);

    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);

    const diffDays = Math.round((event - today) / (1000 * 60 * 60 * 24));

    if (diffDays < 0) return "The day is in the past!";
    if (diffDays === 0) return "Today is the day!";
    return diffDays + " days";
}
