function chineseZodiac(year) {
    const index = (year - 1924) % 60;
    const animalIndex = index % 12;
    const elementIndex = Math.floor(index / 2) % 5;
    return `${elements[elementIndex]} ${animals[animalIndex]}`;
}
