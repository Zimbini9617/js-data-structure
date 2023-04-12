let btn = document.getElementById('btn');
console.log(btn);

let computerGuess = Math.floor(Math.random() * 100 + 1);

let lastGuess = document.getElementById('lastGuess');
let lowHigh = document.getElementById('lowHigh');
let win = document.getElementById('win');

let counter = 1;
let message = '';

let maxTry = 3;

btn.addEventListener('click', guessNumber);

function guessNumber() {
  console.log(counter);
  let userGuess = parseInt(document.getElementById('userNumber').value);
  if (counter === 1) {
    message += 'Previous number ';
    lastGuess.innerText = message
  }

  message += userGuess + ' ';

  if (counter !== maxTry) {
    lastGuess.innerText = message;
    if (userGuess === computerGuess) {
      win.textContent = `You guess the correct number and you win ${userGuess}`;
    }

    if (userGuess < computerGuess) {
      lowHigh.innerText = 'Please guess the higher number';
    }
    if (userGuess > computerGuess) {
      lowHigh.innerText = 'Please guess the lower number';
    }
    counter++;
  } else {
    win.innerText = `Computer win the game and the computer guess is ${computerGuess}`;
  }
}

``