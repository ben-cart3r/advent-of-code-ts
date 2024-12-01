import { PuzzleSolution } from '../../../runner/solution'
import { transpose } from '../../../utils/collections/array'
import { toNumbers } from '../../../utils/mappers'
import { convertToBase10, EOL, splitByWhitespace } from '../../../utils/parsers'
import { add } from '../../../utils/reducers'

const part1: PuzzleSolution = (input) => {
  const lines = input.split(EOL).map(splitByWhitespace).map(toNumbers)
  const lists = transpose(lines)
  const list1 = lists[0].sort()
  const list2 = lists[1].sort()

  return list1
    .map((value, index) => Math.abs(value - list2[index]))
    .reduce(add, 0)
    .toString()
}

const part2: PuzzleSolution = (input) => {
  const lines = input.split(EOL).map(splitByWhitespace).map(toNumbers)
  const lists = transpose(lines)
  const counts = lists[0].reduce(
    (acc, val) => {
      acc[val] = (acc[val] ? acc[val] : 0) + lists[1].filter((v) => v === val).length

      return acc
    },
    {} as Record<number, number>,
  )

  return Object.entries(counts)
    .map(([key, value]) => convertToBase10(key) * value)
    .reduce(add, 0)
    .toString()
}

export { part1, part2 }
