function line(grid) {
    // Проверяет, содержится ли символ в допустимых значениях
    const isAllowedChar = (char, allowedChars) => allowedChars.includes(char);
    
    // Возможные направления движения: вверх, вправо, вниз, влево
    const directions = [
        [-1, 0, 'up'],    // вверх (row - 1)
        [0, 1, 'right'],  // вправо (col + 1)
        [1, 0, 'down'],   // вниз (row + 1)
        [0, -1, 'left']   // влево (col - 1)
    ];
    
    let gridCopy; // Копия исходной сетки для отметки посещенных клеток

    // Рекурсивная функция для прохождения по линии
    const traverseLine = ([row, col], currentDirection) => {
        // Помечаем текущую позицию как посещенную
        gridCopy[row][col] = ' ';
        
        // Получаем координаты и символы соседних клеток
        const neighbors = directions.map(([dRow, dCol]) => [
            row + dRow, 
            col + dCol
        ]);
        
        // Получаем символы соседних клеток с проверкой границ сетки
        const neighborChars = neighbors.map(([nRow, nCol]) => 
            (gridCopy[nRow] && gridCopy[nRow][nCol]) || ' '
        );
        
        // Проверяем допустимость символов в соседних клетках
        const validNeighbors = neighborChars.map((char, index) =>
            char !== '-|-|'[index] ? char : ' ' // Заменяем недопустимые символы
        );
        
        const [upChar, rightChar, downChar, leftChar] = validNeighbors;
        
        // Функция для перехода в указанном направлении
        const moveTo = (direction) => {
            const directionIndex = ['up', 'right', 'down', 'left'].indexOf(direction);
            return traverseLine(neighbors[directionIndex], direction);
        };

        // Обработка разных типов клеток
        switch (grid[row][col]) {
            case 'X':
                // Если достигли конца и вся сетка пройдена
                if (currentDirection && gridCopy.every(row => row.every(cell => cell === ' '))) {
                    return true;
                }
                // Если это начало линии - выбираем единственное возможное направление
                const possibleDirections = validNeighbors
                    .map((char, i) => char !== ' ' ? ['up', 'right', 'down', 'left'][i] : null)
                    .filter(Boolean);
                
                if (possibleDirections.length === 1) {
                    return moveTo(possibleDirections[0]);
                }
                break;
                
            case '|':
                // Вертикальная линия - продолжаем движение вверх/вниз
                if (isAllowedChar(currentDirection, ['up', 'down'])) {
                    return moveTo(currentDirection);
                }
                break;
                
            case '-':
                // Горизонтальная линия - продолжаем движение влево/вправо
                if (isAllowedChar(currentDirection, ['left', 'right'])) {
                    return moveTo(currentDirection);
                }
                break;
                
            case '+':
                // Угол - проверяем возможные повороты
                if (isAllowedChar(currentDirection, ['left', 'right'])) {
                    // Поворот из горизонтального в вертикальное направление
                    if (isAllowedChar(upChar, '|+X') && downChar === ' ') {
                        return moveTo('up');
                    }
                    if (isAllowedChar(downChar, '|+X') && upChar === ' ') {
                        return moveTo('down');
                    }
                } else {
                    // Поворот из вертикального в горизонтальное направление
                    if (isAllowedChar(rightChar, '-+X') && leftChar === ' ') {
                        return moveTo('right');
                    }
                    if (isAllowedChar(leftChar, '-+X') && rightChar === ' ') {
                        return moveTo('left');
                    }
                }
                break;
        }
        
        return false; // Тупик или недопустимый путь
    };

    // Ищем начальную точку 'X' и запускаем проверку линии
    return grid.some((row, rowIndex) => {
        return [...row].some((cell, colIndex) => {
            if (cell === 'X') {
                // Создаем копию сетки для текущей проверки
                gridCopy = grid.map(row => [...row]);
                return traverseLine([rowIndex, colIndex]);
            }
            return false;
        });
    });
}