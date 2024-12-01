type Reducer<T, U> = (accumulator: T, value: U, index: number, array: Array<U>) => T

export const add: Reducer<number, number> = (accumulator, value) => accumulator + value

export const product: Reducer<number, number> = (accumulator, value) => accumulator * value
