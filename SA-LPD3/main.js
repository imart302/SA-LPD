/**
Instrucciones:

Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido utilizando recursión.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
5
120.
6
720.
Entrada: 
Salida:
Entrada: 
Salida: 
Pruébalo con los números que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.
 */

const calculateForm = document.getElementById('calculate-form');
const inputNumber = document.getElementById('input-number');
const outResult = document.getElementById('result-out');

function factorial(n) {
  if(n == 1) {
    return 1;
  } else {
    return factorial(n-1)*n;
  }
}

function renderResult(element, result){
  element.textContent = result;
}

calculateForm.addEventListener('submit', (ev) => {
  ev.preventDefault();

  if(inputNumber.value){
    if(inputNumber.value <= 0){
      renderResult(outResult, 'El número debe ser entero positivo');
      return;
    }

    const result = factorial(Number.parseInt(inputNumber.value));
    renderResult(outResult, result);
  }
});

