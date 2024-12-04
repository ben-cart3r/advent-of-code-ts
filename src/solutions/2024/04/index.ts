import { PuzzleSolution } from '../../../runner/solution'
import { ordinal, compassDirections, cardinal } from '../../../utils/geometry/directions'
import { EOL, splitByCharacters } from '../../../utils/parsers'
import { add } from '../../../utils/reducers'
import Vector from '../../../utils/geometry/vector'

const inBounds = (grid: Array<Array<string>>, x: number, y: number) => {
  return x >= 0 && x < grid[0].length && y >= 0 && y < grid.length
}

const getWord = (grid: Array<Array<string>>, x: number, y: number, coordinates: Array<Vector>) => {
  return coordinates
    .filter((vector) => inBounds(grid, x + vector.x, y + vector.y))
    .map((vector) => grid[y + vector.y][x + vector.x])
    .join('')
}

const countXmas = (grid: Array<Array<string>>, x: number, y: number) => {
  return compassDirections
    .map((vector) => [new Vector(0, 0), vector, vector.scale(2), vector.scale(3)])
    .map((vectors) => getWord(grid, x, y, vectors))
    .filter((value) => value === 'XMAS').length
}

const isAnXmas = (grid: Array<Array<string>>, x: number, y: number) => {
  const down = getWord(grid, x, y, [new Vector(0, 0), ordinal.southEast, ordinal.southEast.scale(2)])
  const up = getWord(grid, x, y, [cardinal.south.scale(2), ordinal.southEast, cardinal.east.scale(2)])

  return (down === 'MAS' || down === 'SAM') && (up === 'MAS' || up === 'SAM')
}

type Point = {
  value: string
  x: number
  y: number
}

const convertGridToPointList = (grid: Array<Array<string>>) => {
  return grid.reduce((acc, line, y) => {
    return [
      ...acc,
      ...line.map((char, x) => ({
        value: char,
        x,
        y,
      })),
    ]
  }, [] as Array<Point>)
}

const part1: PuzzleSolution = (input) => {
  const grid = input.split(EOL).map(splitByCharacters)

  return convertGridToPointList(grid)
    .filter((point) => point.value === 'X')
    .map((point) => countXmas(grid, point.x, point.y))
    .reduce(add, 0)
    .toString()
}

const part2: PuzzleSolution = (input) => {
  const grid = input.split(EOL).map(splitByCharacters)

  return convertGridToPointList(grid)
    .filter((point) => point.value === 'M' || point.value === 'S')
    .filter((point) => isAnXmas(grid, point.x, point.y))
    .length.toString()
}

export { part1, part2 }
