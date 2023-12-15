//#region First attemp
function organizeGifts(gifts) {
  // Split into an array of numbers and letters.
  // Then build a dictionary with every gift.
  let grouped = gifts.split(/(\D)/gm).reduce((acc,item,index,array)=>{
    if(!parseInt(item) && item !== array[array.length -1]){
      acc[item] = parseInt(array[index-1])
    }
    return acc
  },{})

  // Loop over the dictionary to build the string.
  let organized = ""
  for(let gift in grouped){
    organized += `[${gift}]`.repeat(Math.floor(grouped[gift] / 50))
      + `{${gift}}`.repeat(Math.floor((grouped[gift] % 50) / 10))
    if(grouped[gift] % 10 > 0){
      organized += `(${gift.repeat(grouped[gift] % 10)})`
    }
  }
  
  return organized
}
//#endregion

const CONSOLE_STYLE = `
color: darkviolet;
border: 5px orange;
border-style: none none ridge ridge ;
padding: .25rem;
`
console.group("%cFirst example (click to expand 👇🏼)",CONSOLE_STYLE)
console.log('"76a11b" \n', organizeGifts(`76a11b`))
console.log('Expected: \n[a]{a}{a}(aaaaaa){b}(b)')
console.groupEnd()

console.groupCollapsed("%cMore tests (click to expand 👇🏼)", CONSOLE_STYLE)
console.log('"20a" \n', organizeGifts(`20a`))
console.log('"70b120a4c" \n', organizeGifts(`70b120a4c`))
console.log('"9c" \n', organizeGifts(`9c`))
console.log('"19d51e" \n', organizeGifts(`19d51e`))

console.groupEnd()
