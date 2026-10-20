function door(input) {
    let position = 0;
    let direction = 0;
    let paused = false;
    let pausedDirection = 0;
    let result = "";

    for (let i = 0; i < input.length; i++) {
        const event = input[i];

        if (event === "O") {
            if (direction !== 0) {
                direction = -direction;
                paused = false;
            } else if (paused) {
                direction = -pausedDirection;
                paused = false;
            } else {
                if (position === 0) {
                    direction = 1;
                } else if (position === 5) {
                    direction = -1;
                }
            }
        } else if (event === "P") {
            if (direction !== 0) {
                pausedDirection = direction;
                direction = 0;
                paused = true;
            } else if (paused) {
                direction = pausedDirection;
                paused = false;
            } else {
                if (position === 0) {
                    direction = 1;
                } else if (position === 5) {
                    direction = -1;
                }
            }
        }

        if (direction !== 0) {
            position += direction;
            if (position >= 5) {
                position = 5;
                direction = 0;
                paused = false;
            } else if (position <= 0) {
                position = 0;
                direction = 0;
                paused = false;
            }
        }

        result += position;
    }

    return result;
}
