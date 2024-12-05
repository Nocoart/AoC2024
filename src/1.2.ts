import fs from 'fs'
import { argv } from 'process'

const input = fs.readFileSync(argv[2], 'utf8')
const lines = input.split('\n')
const start = new Date().getTime()

let result = 0
const left = []
const map = new Map()

for (let i = 0; i < lines.length; i++) {
  const splited = lines[i].split('   ')
  const leftNum = parseInt(splited[0])
  const rigthNum = parseInt(splited[1])
  left.push(leftNum)

  if (map.has(rigthNum)) map.set(rigthNum, map.get(rigthNum) + 1)
  else map.set(rigthNum, 1)
}

for (let i = 0; i < left.length; i++) {
  if (map.has(left[i])) result += left[i] * map.get(left[i])
}

const end = new Date().getTime()
console.log({ result, execTime: end - start })
