

// function findFirstRepeated(gifts) {

//   let singleIds = [];


//   for (let i = 0; gifts.length > i; i++) {
// debugger
//     if (singleIds.includes(gifts[i])) {
//       return gifts[i]
//     } else {
//       singleIds.push(gifts[i])
//     }
//   }

//   return -1
// }


// findFirstRepeated([2, 1, 3, 5, 3, 2])

function findFirstRepeated(gifts) {
  
  const REPEATED =  gifts.filter((gift, index)=> gifts.indexOf(gift)) !== index
  return REPEATED.length > 0 ? REPEATED.at(0) : -1
}


console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]))