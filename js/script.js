const ruleBtn = document.getElementById("rule-button");
const ruleBoard = document.querySelector(".rule-board");
const crossBtn = document.querySelector(".cross-btn");
const rockOption = document.querySelector(".rock");
const paperOption = document.querySelector(".paper");
const scissorOption = document.querySelector(".scissor");
const triangle = document.querySelector('.triangle');
const options = document.querySelector(".options");
const rockOption1 = document.querySelector(".rock-1");
const paperOption1 = document.querySelector(".paper-1");
const scissorOption1 = document.querySelector(".scissor-1");
const rockOption2 = document.getElementById("rock-2");
const paperOption2 = document.getElementById("paper-2");
const scissorOption2 = document.getElementById("scissor-2");
const playAgainBtn = document.getElementById('play-again-button');
const replayBtn = document.getElementById('replay-button');
const matchOption = document.getElementById('option-match');
const OptionsContainer = document.querySelector(".select-option-container");



let result = 0;
ruleBtn.addEventListener('click', () => {
    ruleBoard.classList.toggle('hidden');
});


crossBtn.addEventListener('click', () => {
    ruleBoard.classList.add('hidden');
});

function randomNumber(maxLimit = 3) {
    let rand = Math.random() * maxLimit + 1;
    rand = parseInt(Math.floor(rand));
    return rand;
}


function gameOn(selectedOption) {
    if(selectedOption === 1) {
        options.classList.add('hidden');
        scissorOption1.classList.add('hidden');
        rockOption1.classList.add('hidden');
    }else if(selectedOption === 2) {
        options.classList.add('hidden');
        paperOption1.classList.add('hidden');
        rockOption1.classList.add('hidden');
    }else if(selectedOption === 3) {
        options.classList.add('hidden');
        paperOption1.classList.add('hidden');
        scissorOption1.classList.add('hidden');
    }
}

function computerOption(result) {
    if(result === 1) {
        options.classList.add('hidden');
        scissorOption2.classList.add('hidden');
        rockOption2.classList.add('hidden');
    }else if(result === 2) {
        options.classList.add('hidden');
        paperOption2.classList.add('hidden');
        rockOption2.classList.add('hidden');
    }else if(result === 3) {
        options.classList.add('hidden');
        paperOption2.classList.add('hidden');
        scissorOption2.classList.add('hidden');
    }
}

rockOption.addEventListener('click', () => {
    result = randomNumber(); 
    computerOption(result);
    gameOn(Number(rockOption.id));
    OptionsContainer.classList.remove('hidden');
});

paperOption.addEventListener('click', () => {
    result = randomNumber(); 
    computerOption(result);
    gameOn(Number(paperOption.id));
    OptionsContainer.classList.remove('hidden');
});

scissorOption.addEventListener('click', () => {
    result = randomNumber(); 
    computerOption(result);
    gameOn(Number(scissorOption.id));
    OptionsContainer.classList.remove('hidden');
});

playAgainBtn.addEventListener('click', () => {
    options.classList.remove('hidden');
    OptionsContainer.classList.add('hidden');
})