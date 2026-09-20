function countAnimals(animals, count) {
    const list = animals.split(",");
    return count.map((animal) => list.filter((a) => a === animal).length);
}
