import { Result } from '../utils/result'

type PuzzleSolution = (input: string) => string

type SolutionResult = Result<
  {
    part1: string
    part2: string
  },
  ''
>

class Solution {
  constructor(
    private readonly part1: PuzzleSolution,
    private readonly part2: PuzzleSolution,
  ) {}

  run(input: string): SolutionResult {
    return {
      ok: true,
      data: {
        part1: this.part1(input),
        part2: this.part2(input),
      },
    }
  }
}

export default Solution

export { PuzzleSolution }
