class Connect4 {
    constructor() {
        this.ROWS = 6;
        this.COLS = 7;
        this.board = Array.from({ length: this.COLS }, () => []);
        this.currentPlayer = 1;
        this.finished = false;
    }

    play(col) {
        if (this.finished) {
            return "Game has finished!";
        }

        if (this.board[col].length >= this.ROWS) {
            return "Column full!";
        }

        const row = this.board[col].length;
        this.board[col].push(this.currentPlayer);

        if (this.checkWin(col, row)) {
            this.finished = true;
            const winner = this.currentPlayer;
            return `Player ${winner} wins!`;
        }

        const mover = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
        return `Player ${mover} has a turn`;
    }

    get(col, row) {
        if (col < 0 || col >= this.COLS || row < 0) return 0;
        const stack = this.board[col];
        return row < stack.length ? stack[row] : 0;
    }

    checkWin(col, row) {
        const player = this.currentPlayer;
        const dirs = [
            [1, 0], // →
            [0, 1], // ↑
            [1, 1], // ↗
            [1, -1], // ↘
        ];

        for (const [dc, dr] of dirs) {
            let count = 1;

            for (let i = 1; i < 4; i++) {
                if (this.get(col + dc * i, row + dr * i) === player) count++;
                else break;
            }

            for (let i = 1; i < 4; i++) {
                if (this.get(col - dc * i, row - dr * i) === player) count++;
                else break;
            }

            if (count >= 4) return true;
        }
        return false;
    }
}
