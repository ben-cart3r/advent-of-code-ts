import loadInput from './load-input'
import importSolution from './load-solution'

type Input = {
  year: string
  day: string
  input: string
}

const runSolution = async (options: Input) => {
  const [solution, input] = await Promise.all([
    await importSolution(options.year, options.day),
    await loadInput(options.year, options.day, options.input),
  ])

  if (input.ok && solution.ok) {
    const result = solution.data.run(input.data)
    if (result.ok) {
      console.info(result.data.part1)
      console.info(result.data.part2)
    } else {
      console.error('Oops, it went wrong')
    }
  } else {
    if (!input.ok) {
      console.error(input.error)
    }

    if (!solution.ok) {
      console.error(solution.error)
    }
  }
}

export default runSolution
