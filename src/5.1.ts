import fs from 'fs'
import { argv } from 'process'

const input = fs.readFileSync(argv[2], 'utf8').split('\n')
const start = performance.now()

const pairs = []
const prints = []

let pairsParsed = false
for (const line of input) {
  if (!line) pairsParsed = true
  if (!pairsParsed) pairs.push(line.split('|'))
  prints.push(line.split(',').map(Number))
}

const weightList = new Map()
const ordered = []

for (const [first, second] of pairs) {
  console.log([first, second])
  const weigth2 = weightList.get(second)
  if (weigth2 || weigth2 === 0) weightList.set(second, weigth2 + 1)
  else weightList.set(second, 0)
  if (!weightList.has(first)) weightList.set(first, 0)
}

let count = 0

while (weightList.size) {
  for (const [value, weigth] of weightList) {
    if (weigth === 0) {
      ordered.push(value)
      weightList.delete(value)
    }
  }
  for (const [value, weigth] of weightList) {
    weightList.set(value, weigth - 1)
  }
}

console.log(ordered)

let result
const end = performance.now()
console.log({ result, execTime: (end - start).toFixed(2) })
