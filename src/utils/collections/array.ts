export const compare = <T>(a: Array<T>, b: Array<T>): boolean =>
  a.length === b.length && a.every((item, index) => item === b[index])

export const flatten = <T>(input: Array<Array<T>>): Array<T> =>
  input.reduce((acc, row) => [...acc, ...row], [] as Array<T>)

export const transpose = <T>(arr: Array<Array<T>>) => {
  return arr[0].map((_, colIndex) => arr.map((row) => row[colIndex]))
}

export const range = (start: number, end: number) => {
  return Array.from({ length: end - start }, (_, i) => i + start)
}
