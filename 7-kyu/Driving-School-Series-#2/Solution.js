function cost(mins) {
    if (mins <= 60) return 30;

    const extraMinutes = mins - 60 - 5; // Вычитаем базовый час и grace period
    const halfHours = Math.ceil(Math.max(0, extraMinutes) / 30);

    return 30 + halfHours * 10;
}
