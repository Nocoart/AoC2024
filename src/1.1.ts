import fs from 'fs'
import { argv } from 'process'

const input = fs.readFileSync(argv[2], 'utf8')
const lines = input.split('\n')
const start = new Date().getTime()

const arr1 = []
const arr2 = []

for (let i = 0; i < lines.length; i++) {
  const splited = lines[i].split('   ')
  arr1.push(splited[0])
  arr2.push(splited[1])
}

const sort1 = arr1.sort()
const sort2 = arr2.sort()

let result = 0

for (let i = 0; i < sort1.length; i++) {
  result += Math.abs(sort1[i] - sort2[i])
}

const end = new Date().getTime()
console.log({ result, execTime: end - start })
