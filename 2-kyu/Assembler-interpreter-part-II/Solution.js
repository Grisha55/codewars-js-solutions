function assemblerInterpreter(program) {
    // Глобальные переменные для состояния интерпретатора
    let cmp_output = {};    // Результат последней операции сравнения
    let memory = {};        // Регистры (память)
    let output = '';        // Выходная строка
    let retFound = false;   // Флаг возврата из подпрограммы
    let Error = false;      // Флаг ошибки
    let callStack = [];     // Стек вызовов для подпрограмм
    let labels = {};        // Метки и их позиции в коде
    let pc = 0;             // Счетчик команд (program counter)
    let lines = program.split('\n'); // Разбиваем программу на строки

    // Первый проход: сбор всех меток в программе
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();
        // Если строка заканчивается на ':', это метка
        if (line.endsWith(':')) {
            // Сохраняем позицию метки (номер строки)
            labels[line.slice(0, -1).trim()] = i;
        }
    }

    // Функция получения значения (число или значение регистра)
    function getValue(val) {
        // Если значение - число, преобразуем его
        if (!isNaN(val)) return Number(val);
        // Иначе возвращаем значение регистра или 0, если регистр не определен
        return memory[val] !== undefined ? memory[val] : 0;
    }

    // Функция выполнения одной команды
    function executeCommand(command) {
        // Если был выполнен return, прекращаем выполнение
        if (retFound) return;
        
        // Удаляем лишние пробелы и комментарии
        command = command.trim();
        if (!command || command.startsWith(';')) return;
        
        // Получаем имя команды (первое слово)
        const cmd = command.split(/\s+/)[0];
        // Аргументы команды (остальная часть строки)
        const args = command.slice(cmd.length).trim();
        
        // Обработка команды mov (перемещение значения)
        if (cmd === 'mov') {
            const [x, y] = args.split(',').map(a => a.trim());
            memory[x] = getValue(y);
        } 
        // Обработка команды inc (инкремент)
        else if (cmd === 'inc') {
            const x = args;
            if (memory[x] !== undefined) memory[x]++;
        } 
        // Обработка команды dec (декремент)
        else if (cmd === 'dec') {
            const x = args;
            if (memory[x] !== undefined) memory[x]--;
        } 
        // Обработка команды add (сложение)
        else if (cmd === 'add') {
            const [x, y] = args.split(',').map(a => a.trim());
            memory[x] += getValue(y);
        } 
        // Обработка команды sub (вычитание)
        else if (cmd === 'sub') {
            const [x, y] = args.split(',').map(a => a.trim());
            memory[x] -= getValue(y);
        } 
        // Обработка команды mul (умножение)
        else if (cmd === 'mul') {
            const [x, y] = args.split(',').map(a => a.trim());
            memory[x] = Math.floor(memory[x] * getValue(y));
        } 
        // Обработка команды div (деление)
        else if (cmd === 'div') {
            const [x, y] = args.split(',').map(a => a.trim());
            const val = getValue(y);
            // Проверка деления на ноль
            if (val !== 0) {
                memory[x] = Math.floor(memory[x] / val);
            }
        } 
        // Обработка команды cmp (сравнение)
        else if (cmd === 'cmp') {
            const [x, y] = args.split(',').map(a => a.trim());
            // Сохраняем результат сравнения для условных переходов
            cmp_output = { x: getValue(x), y: getValue(y) };
        } 
        // Обработка безусловного перехода jmp
        else if (cmd === 'jmp') {
            // Устанавливаем счетчик команд на метку (-1 т.к. после будет инкремент)
            pc = labels[args] - 1;
        } 
        // Обработка условных переходов:
        // jne (переход если не равно)
        else if (cmd === 'jne') {
            if (cmp_output.x !== cmp_output.y) pc = labels[args] - 1;
        } 
        // je (переход если равно)
        else if (cmd === 'je') {
            if (cmp_output.x === cmp_output.y) pc = labels[args] - 1;
        } 
        // jge (переход если больше или равно)
        else if (cmd === 'jge') {
            if (cmp_output.x >= cmp_output.y) pc = labels[args] - 1;
        } 
        // jg (переход если больше)
        else if (cmd === 'jg') {
            if (cmp_output.x > cmp_output.y) pc = labels[args] - 1;
        } 
        // jle (переход если меньше или равно)
        else if (cmd === 'jle') {
            if (cmp_output.x <= cmp_output.y) pc = labels[args] - 1;
        } 
        // jl (переход если меньше)
        else if (cmd === 'jl') {
            if (cmp_output.x < cmp_output.y) pc = labels[args] - 1;
        } 
        // Обработка вызова подпрограммы call
        else if (cmd === 'call') {
            // Сохраняем адрес возврата в стек
            callStack.push(pc + 1);
            // Переходим на метку
            pc = labels[args] - 1;
        } 
        // Обработка возврата из подпрограммы ret
        else if (cmd === 'ret') {
            // Если есть адрес возврата в стеке
            if (callStack.length > 0) {
                // Восстанавливаем счетчик команд
                pc = callStack.pop() - 1;
            } else {
                // Иначе устанавливаем флаг возврата
                retFound = true;
            }
        } 
        // Обработка команды вывода msg
        else if (cmd === 'msg') {
            let msg = '';
            let inString = false;
            let currentString = '';
            
            // Парсинг аргументов msg:
            // Могут быть строки в кавычках и имена регистров
            for (let i = 0; i < args.length; i++) {
                if (args[i] === "'") {
                    if (inString) {
                        // Конец строки - добавляем к результату
                        msg += currentString;
                        currentString = '';
                    }
                    inString = !inString;
                } 
                else if (inString) {
                    // Собираем символы строки
                    currentString += args[i];
                } 
                else if (args[i].match(/[a-z]/i)) {
                    // Если это регистр - добавляем его значение
                    const reg = args[i];
                    msg += memory[reg] !== undefined ? memory[reg].toString() : '0';
                } 
                else if (args[i] === ',') {
                    // Пропускаем запятые между аргументами
                }
            }
            output += msg;
        } 
        // Обработка завершения программы end
        else if (cmd === 'end') {
            // Возвращаем собранный вывод или -1 если вывод пустой
            return output || -1;
        }
    }

    // Главный цикл выполнения программы
    while (pc < lines.length && !Error) {
        let line = lines[pc].trim();
        
        // Удаляем комментарии (все что после ;)
        const commentIndex = line.indexOf(';');
        if (commentIndex !== -1) {
            line = line.slice(0, commentIndex).trim();
        }
        
        // Если строка не пустая и не метка - выполняем команду
        if (line && !line.endsWith(':')) {
            const result = executeCommand(line);
            // Если команда end вернула результат - возвращаем его
            if (result !== undefined) return result;
        }
        
        // Переходим к следующей команде
        pc++;
        
        // Проверяем, не нужно ли выйти из подпрограммы
        if (retFound && callStack.length === 0) {
            break;
        }
    }
    
    // Если программа завершилась без end - возвращаем -1
    return -1;
}