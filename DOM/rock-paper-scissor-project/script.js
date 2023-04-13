let computerChoiceDisplay = document.getElementById('computerChoice');
let yourChoiceDisplay = document.getElementById('yourChoice');
let resultDisplay = document.getElementById('result');

let computerChoice;
let yourChoice;
let result;

let btn = document.querySelectorAll('button');
btn.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        if(btn.id === 'rock'){
            yourChoice = 'rock';
        }

        if(btn.id === 'paper'){
            yourChoice = 'paper';
        }

        if(btn.id === 'scissor'){
            yourChoice = 'scissor'
        }

        yourChoiceDisplay.innerHTML = yourChoice;
        getComputerChoice();
        getResult();
    });
});

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3)+1;
    if(randomNumber === 1){
        computerChoice = 'rock';
    }
    if(randomNumber === 2){
        computerChoice = 'paper';
    }
    if(randomNumber === 3){
        computerChoice = 'scissor';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if(computerChoice === yourChoice){
        result = 'Its a draw';
    }
    if(computerChoice === 'rock' && yourChoice === 'paper'){
        result = 'You win';
    } else if(computerChoice === 'rock' && yourChoice === 'scissor'){
        result = 'Computer Win';
    } else if(computerChoice === 'paper' && yourChoice === 'scissor'){
        result = 'You Win';
    } else if(computerChoice === 'paper' && yourChoice === 'rock'){
        result = 'Computer Win';
    } else if(computerChoice === 'scissor' && yourChoice === 'paper'){
            result = 'Computer Win';
    } else if(computerChoice === 'scissor' && yourChoice === 'rock'){
        result = 'You Win';
    }
    resultDisplay.innerHTML = result;
    }