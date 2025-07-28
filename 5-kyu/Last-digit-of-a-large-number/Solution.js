/**
 * @function lastDigit
 * @param {number} n
 * @param {number} m
 * @returns {number}
*/

function lastDigit(n, m) {
  const bigN = BigInt(n);
  const bigM = BigInt(m);
  
  if (m === 0n) return 1n;
  if (n === 0n) return 0n;
 
  
  const lastDigitOfN = bigN % 10n; // Последняя цифра n
  const modM = bigM % 4n;
  const effectivePower = modM === 0n ? 4n : modM; // Эффективная степень (1-4)
  
  // Вычисляем lastDigitOfN^effectivePower % 10n
  const result = (lastDigitOfN ** effectivePower) % 10n;
  return result === 0n ? 0n : result;
}

/*
Подход
1. Цикличность последних цифр:
  - Последняя цифра степеней числа повторяется циклически. Например:
    - Числа, оканчивающиеся на 2: 2, 4, 8, 6, затем цикл повторяется.
    - Числа, оканчивающиеся на 3: 3, 9, 7, 1, затем цикл повторяется.
  - Для большинства цифр длина цикла равна 4 (кроме 0, 1, 5, 6, у которых цикл короче).

2. Особые случаи:
  - Если n = 0 и b > 0, то 0^b = 0 -> последняя цифра 0
  - Если m = 0, то a^0 = 1 -> последняя цифра 1 (даже если n = 0)

Алгоритм:
  - Находим полдеднюю цифру числа n -> lastDigitOfN = n % 10
  - Находим остаток од деления b на длину цикла (обычно 4). Если цикл равен 1 (например,
    для чисел, оканциващихся на 0,1,5,6), то степень не влияет на поледнюю цифру.
  - Если m = 0, возвращает 1
  - Иначе вычисляем lastDigitOfN^effectivePower % 10, где effectivePower - это
    m mod 4 (если b mod 4 == 0, берем 4)
*/