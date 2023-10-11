/**
 * Instrucciones:

Crear un programa en Javascript que realice lo siguiente:
Debe pedirle al usuario que intente adivinar el número secreto por prompt o por input, dicho número será del 1 al 100.
Si el usuario no adivina el número secreto, debe mostrar un mensaje por consola o DOM diciendo: “Ups, el número secreto es incorrecto, vuelve a intentarlo. ” y volver a solicitarle que ingrese un número.
Si el usuario adivina el número secreto debe de mostrar un mensaje por consola o DOM diciendo: “Felicidades, adivinaste el número secreto”. Además debe imprimir por consola o DOM la lista de números introducidos antes de adivinar el número secreto.
El número secreto puede ser introducido manualmente o generar un número aleatorio, pero recuerda que debe ser del 1 al 100.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Al final de tu práctica, tienes que subir el ejercicio a tu repositorio de GitHub y adjuntar el link.
Puedes implementar un tipo de ayuda para que el usuario se guíe en caso de que el número introducido sea menor o mayor al número secreto.
 */

const randomNum = Math.floor(Math.random() * 99 + 1);
console.log('Number is ', randomNum);

const inputNumber = document.getElementById('id-secret-number');
const inputBtn = document.getElementById('id-btn-try');
const correctMsg = document.getElementById('id-correct');
const incorrectMsg = document.getElementById('id-incorrect');
const triesContainer = document.getElementById('id-tries');
const tries = [];

inputBtn.addEventListener('click', () => {
  const number = Number.parseInt(inputNumber.value);

  if (Number.isNaN(number)) {
    alert('No es un numero');
    return;
  }

  if (number < 1 || number > 100) {
    alert('El numero debe estar en el rango de 1 a 100');
    return;
  }

  if (number === randomNum) {
    correctMsg.classList.add('hidden');
    incorrectMsg.classList.remove('hidden');
		triesContainer.insertAdjacentHTML('beforebegin', "<h2>Intentos:</h2>");
    tries.forEach((tr) => {
      const span = document.createElement('span');
      span.textContent = tr;
      triesContainer.appendChild(span);
    });
  } else {
		inputNumber.value = "";
		if(number < randomNum) {
			inputNumber.placeholder = "mas";
		} else {
			inputNumber.placeholder = "menos";
		}

    incorrectMsg.classList.add('hidden');
    correctMsg.classList.remove('hidden');
    tries.push(number);
  }
});
