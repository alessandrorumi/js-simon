// Visualizzare in pagina 5 numeri casuali.
// Timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e l’utente deve inserire i numeri.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Dichiarazione numeri casuali
const randomNumbers = document.getElementById('numbers');

// Dichiarazione Start Timer
const startTimer = document.getElementById('reminder');

// Dichiarazione tasto genera
const generateButton = document.getElementById('generate');

// Al click del tasto genera
generateButton.addEventListener('click', function() {

  // Genera (5) numeri casuali (da 1 a 10)
  const numbersToRemember = getRandomNumbers(1, 100, 5);

  // Timer di 30 secondi
  let seconds = 30;
  
  countDown = setInterval(function() {
    
    if (seconds === 0) {
      clearInterval(countDown);
      
    } else {
      seconds--
    }
    
    // Mostra in html
    randomNumbers.innerHTML = numbersToRemember;
    startTimer.innerHTML = `Ti restano ${seconds} secondi per ricordarti questi numeri!`
    
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
