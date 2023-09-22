/**
 * Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
4, 2, 4.
Salida:
4, 4, 2.
2, 4, 4.
Entradas: 
2, 4, 4.
Salida:
4, 4, 2.
2, 4, 4.
Pruébalo con las combinaciones de números que se te ocurran
 */

const TESTS = [[4, 4, 2], [4, 2, 4], [2, 4, 4]];
const NUMBERS_TO_REQUEST = 3;

function requestANumber(error = false){
  let numberStr;
  let num;

  do {
    numberStr = prompt(`${error ? 'El numero anterior no era un numero! ':''}Ingrese un numero: `);
    num = Number.parseInt(numberStr);
    if(Number.isNaN(num)) error = true;
    else error = false;
  } while (Number.isNaN(num));

  return num;
}

/**
 * 
 * @param {Array} array 
 * @param {string} order 
 */
function selectionSort(arrayInput, order = 'ASC') {
  let temp;
  let actualOptIndex;
  let array = [...arrayInput];

  for(let i = 0; i < array.length; i++){
    actualOptIndex = i;
    for(let j = i+1; j < array.length; j++){
      if(order === 'ASC'){
        if(array[j] < array[i]) actualOptIndex = j;
      } else {
        if(array[j] > array[i]) actualOptIndex = j;
      }
    }
    if(actualOptIndex !== i) {
      temp = array[i];
      array[i] = array[actualOptIndex];
      array[actualOptIndex] = temp;
    }
  }

  return array;
}

function tests() {
  console.log('Running tests >>');
  for(let test of TESTS){
    const asc = selectionSort(test);
    const des = selectionSort(test, 'DESC');
    console.log(`test: ${test}`);
    console.log(`ASC: ${asc}`);
    console.log(`DES: ${des}`);
  }
  console.log('Ending tests <<');
}

function main() {

  tests();

  let numbers = [];

  for(let i = 0; i < NUMBERS_TO_REQUEST; i++){
    numbers.push(requestANumber(false));
  }

  const orderAsc = selectionSort(numbers);
  const orderDes = selectionSort(numbers, 'DESC');

  console.log(`numbers: ${numbers}`);
  console.log(`ASC: ${orderAsc}`);
  console.log(`DES: ${orderDes}`);

}

main();
