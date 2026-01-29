// This Cube class needs help
// Implement the constructor so that it can take an integer for the side or no args
class Cube {
  
  constructor(side) {
    if (side < 0) {
      this.side = side * -1;
    } else if (side >= 0) {      
      this.side = side;
    } else {
      this.side = 0
    }
  }
  
  getSide(side) {
    return this.side; 
  }
  setSide(n) {
    this.side = Math.abs(n);
  }
}