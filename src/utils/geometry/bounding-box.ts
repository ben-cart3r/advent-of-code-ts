class BoundingBox {
  constructor(
    private readonly x: number,
    private readonly y: number,
    private readonly width: number,
    private readonly height: number,
  ) {}

  get bottom() {
    return this.y + this.height
  }

  get left() {
    return this.x
  }

  get right() {
    return this.x + this.width
  }

  get top() {
    return this.y
  }

  intersects(boundingBox: BoundingBox) {
    // Test all possible conditions where the rectangles do not overlap, then negate the answer
    return !(
      boundingBox.left > this.right ||
      boundingBox.right < this.left ||
      boundingBox.top > this.bottom ||
      boundingBox.bottom < this.top
    )
    return (
      Math.abs(this.x + this.width / 2 - (boundingBox.x + boundingBox.width / 2)) * 2 <
        this.width + boundingBox.width &&
      Math.abs(this.y + this.height / 2 - (boundingBox.y + boundingBox.height / 2)) * 2 <
        this.height + boundingBox.height
    )
  }
}

export default BoundingBox
