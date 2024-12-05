import { PuzzleSolution } from '../../../runner/solution'
import { toNumbers } from '../../../utils/mappers'
import { EOL, PARAGRAPH } from '../../../utils/parsers'
import { add } from '../../../utils/reducers'

const isRuleForUpdate = (update: Array<number>, rule: Array<number>) => {
  return update.includes(rule[0]) && update.includes(rule[1])
}

const isValid = (update: Array<number>, rules: Array<Array<number>>) => {
  return rules
    .filter((rule) => isRuleForUpdate(update, rule))
    .every((rule) => update.indexOf(rule[0]) < update.indexOf(rule[1]))
}

const fixUpdate = (update: Array<number>, rules: Array<Array<number>>): Array<number> => {
  const applicableRules = rules.filter((rule) => isRuleForUpdate(update, rule))

  let out = [...update]

  // Put any out of place "before" number directly in front of the "after" number
  // Keep going until valid
  while (!isValid(out, applicableRules)) {
    for (let j = 0; j < applicableRules.length; j += 1) {
      const [before, after] = applicableRules[j]
      const beforePos = out.indexOf(before)
      const afterPos = out.indexOf(after)

      if (beforePos > afterPos) {
        if (afterPos === 0) {
          out = [before, ...out.slice(0, beforePos), ...out.slice(beforePos + 1)]
        } else {
          out = [...out.slice(0, afterPos), before, ...out.slice(afterPos, beforePos), ...out.slice(beforePos + 1)]
        }
      }
    }
  }

  return out
}

const middle = (values: Array<number>): number => {
  return values[Math.floor(values.length / 2)]
}

const part1: PuzzleSolution = (input) => {
  const sections = input.split(PARAGRAPH)
  const rules = sections[0]
    .split(EOL)
    .map((rule) => rule.split('|'))
    .map(toNumbers)
  const updates = sections[1]
    .split(EOL)
    .map((rule) => rule.split(','))
    .map(toNumbers)

  return updates
    .filter((update) => isValid(update, rules))
    .map(middle)
    .reduce(add, 0)
    .toString()
}

const part2: PuzzleSolution = (input) => {
  const sections = input.split(PARAGRAPH)
  const rules = sections[0]
    .split(EOL)
    .map((rule) => rule.split('|'))
    .map(toNumbers)
  const updates = sections[1]
    .split(EOL)
    .map((rule) => rule.split(','))
    .map(toNumbers)

  return updates
    .filter((update) => !isValid(update, rules))
    .map((update) => fixUpdate(update, rules))
    .map(middle)
    .reduce(add, 0)
    .toString()
}

export { part1, part2 }
