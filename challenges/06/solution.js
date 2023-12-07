//#region First attemp
/* function maxDistance(movements) {
  // Count how many < are. Each one equals "-1".  
  // Count how many > are. Each one equals "-1".  
  // Count how many * are.
  const DIRECTIONS = {}
  movements.split("").forEach(movement => {
    Object.hasOwn(DIRECTIONS, movement) ? DIRECTIONS[movement] += 1 : DIRECTIONS[movement] = 1
  })

  // If there are more "<" than ">", then "*" = -1. Else, "*" = +1 .
  const BOTH_WAYS = DIRECTIONS["<"] > DIRECTIONS[">"] ? -1 : 1

  // Add everything.
  let distance = (DIRECTIONS[">"] || 0) - (DIRECTIONS["<"] || 0) + ((DIRECTIONS["*"] || 0) * BOTH_WAYS)

  // Get the absolute value, without sign and return it.
  return Math.abs(distance)
} */
//#endregion

//#region Solution by timudev@Discord
/* function maxDistance(movements) {

  let distance = 0
  let incognitDistance = 0

  for (const movement of movements) {
    if (movement === '>') distance++
    else if (movement === '<') distance--
    else incognitDistance++
  }

  return Math.abs(distance) + incognitDistance
} */
//#endregion

//#region Solution by finalquest@Discord
function maxDistance(movements) {

  const LEFT = movements.split(">").length - 1
  const RIGHT = movements.split("<").length - 1

  return Math.abs(LEFT - RIGHT) + (movements.length - LEFT - RIGHT)
}
//#endregion

console.log(maxDistance(">>*<"))
console.log(maxDistance("<<<<<"))
console.log(maxDistance(">***>"))
console.log(maxDistance("**********"))
console.log(maxDistance("<<**>>")) 