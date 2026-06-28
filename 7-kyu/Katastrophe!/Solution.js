function strongEnough(earthquake, age) {
    // Вычисляем магнитуду землетрясения
    let magnitude = 1;
    for (const shockwave of earthquake) {
        const sum = shockwave.reduce((acc, num) => acc + num, 0);
        magnitude *= sum;
    }

    // Вычисляем силу здания с учетом экспоненциального спада
    // strength = 1000 * (1 - 0.01)^age
    const strength = 1000 * Math.pow(0.99, age);

    return magnitude > strength ? "Needs Reinforcement!" : "Safe!";
}
