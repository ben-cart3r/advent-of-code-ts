import path from 'path'
import { Result } from '../utils/result'
import Solution from './solution'

type LoadSolutionResult = Result<Solution, 'Failed to load solution'>

const importSolution = async (year: string, day: string): Promise<LoadSolutionResult> => {
  try {
    const filePath = path.join(__dirname, `../solutions/${year}/${day}/index.js`)
    const imported = await import(filePath)

    return {
      ok: true,
      data: new Solution(imported.part1, imported.part2),
    }
  } catch {
    return {
      ok: false,
      error: 'Failed to load solution',
    }
  }
}

export default importSolution
