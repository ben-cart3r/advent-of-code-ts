import { isNumeric } from './filters'

export const EOL = '\n'
export const PARAGRAPH = '\n\n'
export const WHITESPACE = /\s+/

export const extractNumericalCharacters = (input: string) => input.split('').filter(isNumeric)

export const convertToBase10 = (input: string) => parseInt(input, 10)

export const substrings = (input: string) => Array.from({ length: input.length }, (_, i) => input.substring(i))

export const splitByCharacters = (input: string) => input.split('')

export const splitByWhitespace = (input: string) => input.split(WHITESPACE)

export function* match(pattern: RegExp, input: string): Generator<RegExpExecArray, null> {
  let group: RegExpExecArray | null
  // eslint-disable-next-line no-cond-assign
  while ((group = pattern.exec(input)) != null) {
    yield group
  }
  return null
}
