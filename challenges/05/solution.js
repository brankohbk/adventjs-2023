function cyberReindeer(road, time) {
  const RESULT = [road]

  // Get barriers positions
  const BARRIERS = road.split("")
    .reduce((accumulator, position, index) => {
      if (position === '|')
        accumulator.push(index);
      return accumulator;
    }, [])

  // Loop over time
  for (let step = 1; step < time; step++) {
    // Create a copy of previous step
    RESULT[step] = RESULT[step - 1]

    // find Santa's position in previous step
    let position = RESULT[step - 1].indexOf("S")

    // After 5 steps, open all the barriers
    if (step >= 5) RESULT[step] = RESULT[step].replaceAll("|", "*")

    // Move Santa to the right if able
    if (RESULT[step].at(position + 1) !== "|") {
      let asArray = RESULT[step].split("")
      asArray[position + 1] = "S"
      asArray[position] = BARRIERS.includes(position) ? "|" : "."
      RESULT[step] = asArray.join("")
    }

    // After 5 steps, open all the barriers
    if (step >= 5) RESULT[step] = RESULT[step].replaceAll("|", "*")
  }
  return RESULT
}

console.log(cyberReindeer('S..|...|..', 10))
cyberReindeer('S..|...|..', 10)
cyberReindeer('S.|.', 4)
cyberReindeer('S.|.|.', 7)
cyberReindeer('S.|..', 6)
cyberReindeer('S.|.|.|......|.||.........', 8)