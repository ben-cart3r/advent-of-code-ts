import { part1, part2 } from '.'

const data = `3   4
4   3
2   5
1   3
3   9
3   3`

describe('2024 - Day 1', () => {
  describe('part1', () => {
    it('should solve for sample data', () => {
      const result = part1(data)

      expect(result).toEqual('11')
    })
  })

  describe('part2', () => {
    it('should solve for sample data', () => {
      const result = part2(data)

      expect(result).toEqual('31')
    })
  })
})
