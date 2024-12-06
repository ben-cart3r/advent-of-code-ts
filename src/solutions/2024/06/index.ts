import { PuzzleSolution } from '../../../runner/solution'
import { EOL, splitByCharacters } from '../../../utils/parsers'
import { add } from '../../../utils/reducers'

const inBounds = (grid: Array<Array<string>>, x: number, y: number) => {
  return x >= 0 && x < grid[0].length && y >= 0 && y < grid.length
}

const find = (grid: Array<Array<string>>, searchStr: string) => {
  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < grid[0].length; x += 1) {
      if (grid[y][x] === searchStr) {
        return {
          x,
          y,
        }
      }
    }
  }

  throw new Error('Not found')
}

const deltas = {
  '^': [0, -1],
  '>': [1, 0],
  v: [0, 1],
  '<': [-1, 0],
}

type Direction = keyof typeof deltas

const part1: PuzzleSolution = (input) => {
  const grid = input.split(EOL).map(splitByCharacters)

  // Get the start position and direction
  let { x, y } = find(grid, '^')
  let dir: Direction = '^'

  // Mark start position as visited
  grid[y][x] = 'X'

  // Traverse patrol route
  while (inBounds(grid, x, y)) {
    const [dx, dy] = deltas[dir]
    const nx = x + dx
    const ny = y + dy

    if (inBounds(grid, nx, ny)) {
      // Is next square an obstacle?
      if (grid[ny][nx] === '#') {
        // Rotate 90deg clockwise
        if (dir === '^') {
          dir = '>'
        } else if (dir === '>') {
          dir = 'v'
        } else if (dir === 'v') {
          dir = '<'
        } else if (dir === '<') {
          dir = '^'
        }
      } else {
        // Move forward, mark as visited
        grid[ny][nx] = 'X'
        x = nx
        y = ny
      }
    } else {
      // Move out of bounds
      x = nx
      y = ny
    }
  }

  // Count visited
  return grid
    .map((line) => line.filter((value) => value === 'X').length)
    .reduce(add, 0)
    .toString()
}

const part2: PuzzleSolution = (input) => {
  const originalGrid = input.split(EOL).map(splitByCharacters)

  let cycles = 0

  for (let i = 0; i < originalGrid.length; i += 1) {
    for (let j = 0; j < originalGrid[0].length; j += 1) {
      const grid = [...originalGrid.map((line) => [...line])]

      // Get the start position and direction
      let { x, y } = find(grid, '^')
      let dir: Direction = '^'
      let cycle = false

      // Add new obstacle
      grid[i][j] = '#'

      while (inBounds(grid, x, y) && !cycle) {
        const [dx, dy] = deltas[dir]
        const nx = x + dx
        const ny = y + dy

        if (inBounds(grid, nx, ny)) {
          // Is next square an obstacle?
          if (grid[ny][nx] === '#') {
            // Rotate 90deg clockwise
            if (dir === '^') {
              dir = '>'
            } else if (dir === '>') {
              dir = 'v'
            } else if (dir === 'v') {
              dir = '<'
            } else if (dir === '<') {
              dir = '^'
            }
          } else {
            // Already visited in same direction?
            if (grid[ny][nx] === dir) {
              cycle = true
            }
            // Move forward, mark as visited
            grid[ny][nx] = dir

            x = nx
            y = ny
          }
        } else {
          // Move out of bounds
          x = nx
          y = ny
        }
      }

      if (cycle) {
        cycles += 1
      }
    }
  }

  return cycles.toString()
}

export { part1, part2 }
