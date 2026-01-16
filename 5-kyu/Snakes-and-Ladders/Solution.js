class SnakesLadders {
	constructor() {
		this.players = [0, 0]; // позиции игроков
		this.currentPlayer = 0;
		this.gameOver = false;

		this.board = {
			2: 38,
			7: 14,
			8: 31,
			15: 26,
			16: 6,
			21: 42,
			28: 84,
			36: 44,
			46: 25,
			49: 11,
			51: 67,
			62: 19,
			64: 60,
			71: 91,
			74: 53,
			78: 98,
			87: 94,
			89: 68,
			92: 88,
			95: 75,
			99: 80
		};
	}

	play(die1, die2) {
		if (this.gameOver) {
			return 'Game over!';
		}

		const move = die1 + die2;
		let pos = this.players[this.currentPlayer] + move;

		// Отскок от 100
		if (pos > 100) {
			pos = 100 - (pos - 100);
		}

		// Змеи и лестницы
		if (this.board[pos]) {
			pos = this.board[pos];
		}

		this.players[this.currentPlayer] = pos;

		// Победа
		if (pos === 100) {
			this.gameOver = true;
			return `Player ${this.currentPlayer + 1} Wins!`;
		}

		const result = `Player ${this.currentPlayer + 1} is on square ${pos}`;

		// Смена игрока, если не дубль
		if (die1 !== die2) {
			this.currentPlayer = 1 - this.currentPlayer;
		}

		return result;
	}
}
