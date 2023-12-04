//#region Instructions
/*En el taller de Santa, un elfo travieso ha estado jugando en la cadena de fabricación de regalos, añadiendo o eliminando un paso no planificado.

Tienes la secuencia original de pasos en la fabricación original y la secuencia modificada modified que puede incluir un paso extra o faltar un paso.

Tu tarea es escribir una función que identifique y devuelva el primer paso extra que se ha añadido o eliminado en la cadena de fabricación. Si no hay ninguna diferencia entre las secuencias, devuelve una cadena vacía.

const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'

const original = 'stepfor'
const modified = 'stepor'
findNaughtyStep(original, modified) // 'f'

const original = 'abcde'
const modified = 'abcde'
findNaughtyStep(original, modified) // ''
A tener en cuenta:

Siempre habrá un paso de diferencia o ninguno.
La modificación puede ocurrir en cualquier lugar de la cadena.
La secuencia original puede estar vacía
*/
//#endregion

//#region Option 1
function findNaughtyStep(original, modified) {
  // Check if it was added or deleted by comparing the length.
  let shorter = original.length < modified.length ? original : modified
  let larger = original.length > modified.length ? original : modified

  // Iterate the larger string.
  for(let index = 0; index < larger.length; index++){
    if(larger.at(index) !== shorter.at(index)){
      return larger.at(index)
    }
  }
  // If there is no differences, just return an empty string.
  return ''
}
//#endregion

//#region Option 2

//#endregion