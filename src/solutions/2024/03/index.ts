import { PuzzleSolution } from '../../../runner/solution'
import { convertToBase10 } from '../../../utils/parsers'
import { add } from '../../../utils/reducers'

const multiply = (input: string) => {
  const left = input.substring(4, input.indexOf(','))
  const right = input.substring(input.indexOf(',') + 1, input.length - 1)

  return convertToBase10(left) * convertToBase10(right)
}

const part1: PuzzleSolution = (input) => {
  return (input.match(/mul\(\d+,\d+\)/g) || []).map(multiply).reduce(add, 0).toString()
}

const part2: PuzzleSolution = (input) => {
  const matches = input.match(/(mul\(\d+,\d+\)|do\(\)|don't\(\))/g) || []
  const ops = [] as Array<string>
  let enabled = true

  for (let i = 0; i < matches.length; i += 1) {
    const op = matches[i]
    if (op === 'do()') {
      enabled = true
    } else if (op === "don't()") {
      enabled = false
    } else if (enabled) {
      ops.push(op)
    }
  }

  return ops.map(multiply).reduce(add, 0).toString()
}

export { part1, part2 }
