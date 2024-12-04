class Vector {
  constructor(
    public readonly x: number,
    public readonly y: number,
  ) {}

  scale(scalar: number) {
    return new Vector(this.x * scalar, this.y * scalar)
  }
}

export default Vector
