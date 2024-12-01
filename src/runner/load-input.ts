import path from 'path'
import fs from 'fs/promises'
import { Result } from '../utils/result'

type LoadInputResult = Result<string, 'Failed to load input'>

const loadInput = async (year: string, day: string, fileName: string): Promise<LoadInputResult> => {
  try {
    const filePath = path.join(__dirname, `../solutions/${year}/${day}/${fileName}`)
    const input = await fs.readFile(filePath, 'utf8')

    return {
      ok: true,
      data: input.trim(),
    }
  } catch {
    return {
      ok: false,
      error: 'Failed to load input',
    }
  }
}

export default loadInput
