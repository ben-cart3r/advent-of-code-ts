import { EOL, splitByCharacters } from './parsers'

class Grid {
  private data: Array<Array<string>>

  private height: number

  private width: number

  constructor(input: string) {
    this.data = input.split(EOL).map(splitByCharacters)
    this.height = this.data.length
    this.width = this.data[0].length
  }

  inBounds(x: number, y: number) {
    return x >= 0 && x < this.width && y >= 0 && y < this.height
  }

  adjacent(x: number, y: number) {
    return [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, 1],
      [1, 1],
      [1, 0],
      [1, -1],
      [0, -1],
    ]
      .filter(([dx, dy]) => this.inBounds(x + dx, y + dy))
      .map(([dx, dy]) => [x + dx, y + dy])
  }

  get(x: number, y: number) {
    return this.data[y][x]
  }

  size() {
    return {
      height: this.height,
      width: this.width,
    }
  }
}

export default Grid
