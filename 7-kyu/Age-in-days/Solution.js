function ageInDays(year, month, day) {
    const birth = new Date(year, month - 1, day);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diff = today - birth;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    return `You are ${days} days old`;
}
