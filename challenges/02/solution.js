//#region Option 1
function manufacture(gifts, materials) {
  const RESULTS = []
  for(let index = 0; index < gifts.length; index++){
    if(gifts[index].split('').every(material => materials.includes(material))){
      RESULTS.push(gifts[index])
    }
  }
  return RESULTS
}
//#endregion

//#region Option 2
function manufacture(gifts, materials) {
  const result = gifts.filter(gift => gift
    .split('')
    .every(material => materials.includes(material))
  );
  return result ?? []
}
//#endregion