import fs from 'fs'
import { argv } from 'process'

const input = fs.readFileSync(argv[2], 'utf8')
const start = performance.now()
const reg = /mul\((\d+),(\d+)\)|do\(\)|don't\(\)/gm

let isEnabled = true
let result = 0
let m: RegExpExecArray | null

while ((m = reg.exec(input)) !== null) {
  if (m[0] === 'do()') isEnabled = true
  else if (m[0] === "don't()") isEnabled = false
  else if (isEnabled) result += parseInt(m[1]) * parseInt(m[2])
}

const end = performance.now()
console.log({ result, execTime: (end - start).toFixed(2) })
