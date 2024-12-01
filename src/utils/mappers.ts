import { convertToBase10 } from './parsers'

type Mapper<T, U> = (item: T, index: number, array: Array<T>) => U

export const pick =
  <T, K extends keyof T>(key: K): Mapper<T, T[K]> =>
  (item: T) =>
    item[key]

export const toNumbers: Mapper<Array<string>, Array<number>> = (input) => input.map(convertToBase10)
