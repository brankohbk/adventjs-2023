//#region Tests
const a = decode('hola (odnum)')

console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c)
//#endregion

//#region Option 1
function decode(message) {
  let decoded = message
  // Count how many "("s are
  const ROUNDS = message.split("")
    .reduce((accumulator, current) => {
      if (current === "(") { accumulator++ }
      return accumulator
    }, 0)

  for (let index = 0; index < ROUNDS; index++) {
    // Find the last "("
    let open = decoded.lastIndexOf("(")

    // Find the first ")"
    let close = decoded.indexOf(")", open)

    // Reverse everything in between
    let substring = decoded.substring(open , close + 1)
    let reversed = substring
      .slice(1,substring.length-1) // Get rid of "(" and ")"
      .split("")
      .reverse()
      .join("")
    decoded = decoded.replace(substring, reversed)
  }
  return decoded
}
//#endregion Option 1