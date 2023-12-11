//#region First attemp
function drawGift(size, symbol) {
  // Code here
  let render = ''
  const TOTAL_HEIGHT = size * 2 - 1
  for (let line = 1; line <= TOTAL_HEIGHT; line++) {
    const IS_EDGE = line === 1 || line === size || line === TOTAL_HEIGHT
    const IS_BIG_ENOUGH = (size - 2) >= 0
    const INDENT = " ".repeat((size - line) > -1 ? size - line : 0)


    let upAndFront = ''
    let rightSide = ''

    upAndFront += "#"
      + "#".repeat(IS_EDGE && IS_BIG_ENOUGH ? size - 2 : 0)
      + symbol.repeat(!IS_EDGE && IS_BIG_ENOUGH ? size - 2 : 0)

    if (size > 1) {
      upAndFront += "#"
    }

    if (line > 1 && line < TOTAL_HEIGHT) {
      rightSide += symbol.repeat(
        (line <= size)
          ? line - 2
          : TOTAL_HEIGHT - 1 - line)
        + "#"
    }

    render += INDENT + upAndFront + rightSide + "\n"
  }

  return render
}
//#endregion

//#region Solution by Achalogy
/*
function drawGift(size, symbol) {
  let bgSize = size - 2

  bgSize += +!(bgSize + 1)

  let response = ""

  let topCenter = ""
  let bottomCenter = ""

  for (const lineNumber of [...Array.from({ length: bgSize }).keys()]) {
    const line = "#"
      + symbol.repeat(bgSize)
      + "#" + symbol.repeat(lineNumber) + "#"
    bottomCenter = line + "\n" + bottomCenter
    topCenter += " ".repeat(bgSize - lineNumber) + line + "\n"
  }

  response = " ".repeat(size - 1) + "#".repeat(size) + "\n"
    + (topCenter
      + "#".repeat(size) + symbol.repeat(bgSize) + "#" + "\n"
      + bottomCenter
      + "#".repeat(size) + "\n").repeat(+!!(size - 1))

  return response
}
*/

//#endregion
const CONSOLE_STYLE = `
color: darkviolet;
border: 5px orange;
border-style: none none ridge ridge ;
padding: .25rem;
`
console.groupCollapsed("%cFirst example (click to expand 👇🏼)",CONSOLE_STYLE)
console.log('4, "+" \n', drawGift(4, "+"))
console.log(
  `
1|   ####
2|  #++##
3| #++#+#
4|####++#
5|#++#+#
6|#++##
7|####
`
)
console.groupEnd()
console.groupCollapsed("%cMore tests (click to expand 👇🏼)", CONSOLE_STYLE)
console.log('5, "*" \n', drawGift(5, "*"))
console.log('1, "^" \n', drawGift(1, "^"))
console.log('2, "& \n', drawGift(2, "&"))
console.log('10, "%" \n', drawGift(10, "%"))
console.groupEnd()
