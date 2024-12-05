export const getRegMatch = (str: string, regex: RegExp): { count: number; matches: string[] } => {
  let m: RegExpExecArray | null
  let count = 0
  let matches: string[] = []
  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++
    }
    m.forEach((match) => {
      count++
      matches.push(match)
    })
  }
  return { count, matches }
}

export const testStringRegex = (str: string, stringRegex: string) => {
  return new RegExp(stringRegex).test(str)
}
