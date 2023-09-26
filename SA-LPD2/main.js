/**
 * Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
45.
Grados Kelvin: 318.15
Grados Fahrenheit: 113. 
 14.
Grados Kelvin: 287.15
Grados Fahrenheit: 57.2. 
Entrada: 
Salida
Entrada:
Salida
Pruébalo con los valores numéricos que se te ocurran.
 */

const conversionForm = document.getElementById('conversion-form');
const inputDegree = document.getElementById('input-degree');
const inputRadioF = document.getElementById('dF');
const inputRadioK = document.getElementById('dK');
const outResult = document.getElementById('result-out');

function conversion(degreeC, outD = 'F'){

  
  if(typeof(degreeC) !== 'number'){
    console.error('Input is not a number');
    return Number.NaN;
  }

  let out;
  if(outD == 'F') {
    out = (degreeC * (9/5)) + 32;
  } else {
    out = degreeC + 273.15;
  }

  return out;
}

function renderConversion(result){
  outResult.textContent = result;
}

conversionForm.addEventListener('submit', (ev) => {
  ev.preventDefault();

  if(inputDegree.value) {
    let toD = inputRadioK.checked ? inputRadioK.value : inputRadioF.value;
    const result = conversion(Number.parseInt(inputDegree.value), toD);
    renderConversion(`${result} °${toD}`);
  }

});
