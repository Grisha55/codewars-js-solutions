function arr2bin(arr) {
    let sum = 0;
    let hasNaN = false;
    
    for (let i = 0; i < arr.length; i++) {
        const val = arr[i];
        
        // Проверяем, является ли элемент именно числом (не boolean, не null, не строка)
        if (typeof val === 'number' && !isNaN(val)) {
            sum += val;
        } else if (typeof val === 'number' && isNaN(val)) {
            hasNaN = true;
        }
        // Все остальные типы (boolean, string, null, undefined) игнорируем
    }
    
    if (hasNaN) return "NaN";
    return sum.toString(2);
}