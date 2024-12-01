export const isHex = (value: string): boolean => value.match(/^#(?:[0-9a-fA-F]{6})$/) != null

export const isEmptyString = (input: string) => input === ''

export const isNotEmptyString = (input: string) => !isEmptyString(input)

export const isNumeric = (input: string) => !Number.isNaN(parseInt(input, 10))
