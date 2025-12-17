class Block {
  constructor(data) {
    this.data = data;
  }

  getWidth() {
    return this.data[0];
  }

  getLength() {
    return this.data[1];
  }

  getHeight() {
    return this.data[2];
  }

  getVolume() {
    return this.getWidth() * this.getLength() * this.getHeight();
  }

  getSurfaceArea() {
    return (
      2 *
      (this.getWidth() * this.getLength() +
        this.getWidth() * this.getHeight() +
        this.getLength() * this.getHeight())
    );
  }
}
