function takeUmbrella(weather, chance) {
    return (
        weather === "rainy" ||
        (weather === "cloudy" && chance > 0.2) ||
        (weather === "sunny" && chance > 0.5)
    );
}
