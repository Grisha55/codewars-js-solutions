function planeSeat(seat) {
    const num = parseInt(seat);
    const letter = seat.slice(-1);

    if (isNaN(num) || num < 1 || num > 60) return "No Seat!!";
    if (!"ABCDEFGHK".includes(letter)) return "No Seat!!";

    const section = num <= 20 ? "Front" : num <= 40 ? "Middle" : "Back";
    const side = "ABC".includes(letter)
        ? "Left"
        : "DEF".includes(letter)
          ? "Middle"
          : "Right";

    return `${section}-${side}`;
}
