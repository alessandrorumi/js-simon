// Visualizzare in pagina 5 numeri casuali.
// Timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire i numeri.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Dichiarazione numeri casuali
const randomNumbers = document.getElementById('numbers');

// Dichiarazione Start Timer
const secondsLeft = document.getElementById('reminder');

// Dichiarazione pulsante genera
const generateButton = document.getElementById('generate');

// Dichiarazione prova ad indovinare
const tryToGuess = document.getElementById('try');
tryToGuess.classList.add('hidden');

// Dichiarazione input text (indovina numero)
const guessNumber = document.getElementById('guess');
guessNumber.classList.add('hidden');

// Dichiarazione pulsante 'Invia Numeri'
const userGuess = document.getElementById('user-guess');
userGuess.classList.add('hidden');

// Al click del pulsante genera
generateButton.addEventListener('click', function() {

  // Genera (5) numeri casuali (da 1 a 100)
  const numbersToRemember = getRandomNumbers(1, 100, 5);

  // Timer di 30 secondi
  let seconds = 5;

  countDown = setInterval(function() {
    
    // Mostra in html
    randomNumbers.innerHTML = numbersToRemember;
    secondsLeft.innerHTML = `Ti restano ${seconds} secondi per ricordarti questi numeri!`

    if (seconds === 0) {
      // Ferma countdown
      clearInterval(countDown);
      
      // Scompaiono:
      secondsLeft.classList.add('hidden');
      randomNumbers.classList.add('hidden');

      // Compaiono
      guessNumber.classList.remove('hidden');
      tryToGuess.classList.remove('hidden');
      userGuess.classList.remove('hidden');
      tryToGuess.innerHTML = `Prova ad indovinare`;
      
      userGuess.addEventListener('click', function() {

        let userGuess = guessNumber.value;

        userGuessArray = [];

        userGuessArray.push(userGuess);

        console.log(userGuessArray);

      });

    } else {
      seconds--
    }
    
  }, 1000);
  
});




// Funzioni

// Funzione per generare numeri random
function getRandomNumbers(min, max, arrayLength) {

  let randomArray = [];

  while (randomArray.length < arrayLength) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if(!randomArray.includes(randomNumber)) {
      randomArray.push(randomNumber);
    }
  }  

  return randomArray;
}
