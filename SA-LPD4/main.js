/**
Instrucciones:

Crear un programa en Javascript que realice lo siguiente:
3
0, 1, 1.
10
0, 1, 1, 2, 3, 5, 8, 13, 21, 34.
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe imprimir la serie de fibonacci dependiendo del número recibido, es decir, si el programa recibe un 8, debe mostrar 8 números de la serie de Fibonacci.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes combinaciones para asegurarte que funcione correctamente:
Entrada: 
Salida: 
Entrada: 
Salida: 
Pruébalo con los números que se te ocurran.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.

 */

const NUMBER_LIMIT = 100;
const calculateForm = document.getElementById('calculate-form');
const inputNumber = document.getElementById('input-number');
const outContainer = document.getElementById('result-container');

function fibonacci(n) {
  let numbers = [0, 1, 1];

  if (n < 0) {
    return [];
  }

  if (n < 4) {
    return numbers.splice(0, n);
  }

  for (let i = 4; i <= n; i++) {
    numbers.push(numbers[i - 2] + numbers[i - 3]);
  }

  return numbers;
}

function renderToContainer(container, n){
  const span = document.createElement('span');
  span.textContent = n;

  container.appendChild(span);
}

calculateForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  outContainer.innerHTML = "";
  
  if (!inputNumber.value) {
    return;
  }

  const number = Number.parseInt(inputNumber.value);

  if(Number.isNaN(number)){
    console.error('Is not a number');
    renderToContainer(outContainer, 'Value is not a number');
    return;
  }

  if (number < 0) {
    console.error('Value cannot be negative');
    renderToContainer(outContainer, 'Value cannot be negative');
    return;
  }

  if (number > NUMBER_LIMIT) {
    console.error('Exceed limit');
    renderToContainer(outContainer, 'Exceed limit');
    return;
  }

  
  const numbers = fibonacci(number);
  numbers.forEach((n) => {
    renderToContainer(outContainer, n);
  });

});
