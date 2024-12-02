import { PuzzleSolution } from '../../../runner/solution'
import { range } from '../../../utils/collections/array'
import { toNumbers } from '../../../utils/mappers'
import { EOL, splitByWhitespace } from '../../../utils/parsers'

const isIncreasing = (differences: Array<number>) => differences.every((val) => val <= -1 && val >= -3)
const isDecreasing = (differences: Array<number>) => differences.every((val) => val >= 1 && val <= 3)
const createReportPermutations = (report: Array<number>) => [
  report,
  ...range(0, report.length).map((index) => [...report.slice(0, index), ...report.slice(index + 1)]),
]

const isValid = (report: Array<number>) => {
  const diffs = report.reduce((acc, val, idx, arr) => {
    if (idx < arr.length - 1) {
      acc.push(val - arr[idx + 1])
    }
    return acc
  }, [] as Array<number>)

  return isIncreasing(diffs) || isDecreasing(diffs)
}

const isValidWithPermutations = (report: Array<number>) => createReportPermutations(report).some(isValid)

const part1: PuzzleSolution = (input) => {
  const validReports = input.split(EOL).map(splitByWhitespace).map(toNumbers).filter(isValid)

  return validReports.length.toString()
}

const part2: PuzzleSolution = (input) => {
  const validReports = input.split(EOL).map(splitByWhitespace).map(toNumbers).filter(isValidWithPermutations)

  return validReports.length.toString()
}

export { part1, part2 }
