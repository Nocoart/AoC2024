import fs from 'fs'
import { argv } from 'process'
import { getRegMatch } from './util/reg'

const input = fs.readFileSync(argv[2], 'utf8')
const start = new Date().getTime()

const reg = /mul\((\d+),(\d+)\)/gm
const { matches } = getRegMatch(input, reg)

let result = 0
for (let i = 0; i < matches.length; i += 3) {
  result += parseInt(matches[i + 1]) * parseInt(matches[i + 2])
}

const end = new Date().getTime()
console.log({ result, execTime: end - start })
