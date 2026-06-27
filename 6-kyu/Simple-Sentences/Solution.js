function makeSentence(parts) {
    // Убираем все точки из массива (кроме последней, которую добавим позже)
    const words = parts.filter((part) => part !== ".");

    // Соединяем слова с пробелами
    let sentence = words.join(" ");

    // Убираем пробелы перед запятыми
    sentence = sentence.replace(/ ,/g, ",");

    // Добавляем точку в конце
    return sentence.trim() + ".";
}
