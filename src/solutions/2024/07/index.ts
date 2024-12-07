import { PuzzleSolution } from '../../../runner/solution'
import { convertToBase10, EOL, WHITESPACE } from '../../../utils/parsers'
import { add } from '../../../utils/reducers'

const combinations = (options: Array<string>, length: number): Array<Array<string>> => {
  if (length === 1) {
    return options.map((option) => [option])
  }

  return options.reduce(
    (acc, option) => [...acc, ...combinations(options, length - 1).map((inn) => [option, ...inn])],
    [] as Array<Array<string>>,
  )
}

const calc = (operands: Array<number>, operators: Array<string>) => {
  return operators.reduce((acc, operator, idx) => {
    const left = idx === 0 ? operands[0] : acc
    const right = idx === 0 ? operands[1] : operands[idx + 1]

    if (operator === '+') {
      return left + right
    }

    if (operator === '||') {
      return convertToBase10(`${left}${right}`)
    }

    return left * right
  }, 0)
}

const solve = (input: string, operators: Array<string>) => {
  return input
    .split(EOL)
    .map((line) => line.split(': '))
    .map(([answer, parts]) => ({
      answer: convertToBase10(answer),
      parts: parts.split(WHITESPACE).map(convertToBase10),
    }))
    .filter(({ answer, parts }) => {
      return combinations(operators, parts.length - 1).some((ops) => {
        return calc(parts, ops) === answer
      })
    })
    .map(({ answer }) => answer)
    .reduce(add, 0)
    .toString()
}

const part1: PuzzleSolution = (input) => {
  return solve(input, ['+', '*'])
}

const part2: PuzzleSolution = (input) => {
  return solve(input, ['+', '*', '||'])
}

export { part1, part2 }
