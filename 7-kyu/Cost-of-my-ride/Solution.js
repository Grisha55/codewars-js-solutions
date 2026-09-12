function insurance(age, size, numofdays) {
    if (numofdays <= 0) return 0;
    const cost = 50;
    let costPerDay = age < 25 ? 10 : 0;
    let carSum = 0;
    switch (size) {
        case "medium":
            carSum += 10;
            break;
        case "economy":
            carSum += 0;
            break;
        default:
            carSum += 15;
            break;
    }

    return (cost + carSum + costPerDay) * numofdays;
}
