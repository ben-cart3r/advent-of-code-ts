import yargs from 'yargs'
import runSolution from './runner'

// prettier-ignore
// eslint-disable-next-line import/newline-after-import
;(async () => {
  const options = yargs(process.argv.slice(2))
    .usage('Usage: $0 -y <year> -d <day>')
    .option('year', {
      alias: 'y',
      describe: 'Year',
      type: 'string',
      default: '2024',
    })
    .option('day', {
      alias: 'd',
      describe: 'Day',
      type: 'string',
      demandOption: true,
    })
    .option('input', {
      alias: 'i',
      describe: 'Input File',
      type: 'string',
      default: 'input.txt',
    })
    .parseSync()

  await runSolution(options)
})()
