const ruleBtn = document.getElementById("rule-button");
const ruleBoard = document.querySelector(".rule-board");
const crossBtn = document.querySelector(".cross-btn");
const rockOption = document.querySelector(".rock");
const paperOption = document.querySelector(".paper");
const scissorOption = document.querySelector(".scissor");
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
const winMessage = document.querySelector(".win");
const lostMessage = document.querySelector(".lost");
const tieMessage = document.querySelector(".tie");
const userScoreDisplay = document.getElementById('user-score-display');
const computerScoreDisplay = document.getElementById('computer-score-display');



let result = 0;
let userScore = 0;
let computerScore = 0;

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


function userSelectedOption(selectedOption) {
    if (selectedOption === 1) {
        scissorOption1.classList.add('hidden');
        rockOption1.classList.add('hidden');
    } else if (selectedOption === 2) {
        paperOption1.classList.add('hidden');
        rockOption1.classList.add('hidden');
    } else if (selectedOption === 3) {
        paperOption1.classList.add('hidden');
        scissorOption1.classList.add('hidden');
    }
}

function computerSelectedOption(result) {
    if (result === 1) {
        scissorOption2.classList.add('hidden');
        rockOption2.classList.add('hidden');
    } else if (result === 2) {
        paperOption2.classList.add('hidden');
        rockOption2.classList.add('hidden');
    } else if (result === 3) {
        paperOption2.classList.add('hidden');
        scissorOption2.classList.add('hidden');
    }
}

const selectRock = () => {
    if (result === 1) {
        lostMessage.style.display = 'block';
        playAgainBtn.style.display = 'block';
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;

    } else if (result === 2) {
        winMessage.style.display = 'block';
        playAgainBtn.style.display = 'block';
        userScore++;
        userScoreDisplay.innerHTML = userScore;
    } else {
        tieMessage.style.display = 'block';
        replayBtn.style.display = 'block';
    }
}

const selectPaper = () => {
    if (result === 1) {
        tieMessage.style.display = 'block';
        replayBtn.style.display = 'block';
    } else if (result === 2) {
        lostMessage.style.display = 'block';
        playAgainBtn.style.display = 'block';
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
    } else {
        winMessage.style.display = 'block';
        playAgainBtn.style.display = 'block';
        userScore++;
        userScoreDisplay.innerHTML = userScore;
    }
}

const selectScissor = () => {
    if (result === 1) {
        winMessage.style.display = 'block';
        playAgainBtn.style.display = 'block';
        userScore++;
        userScoreDisplay.innerHTML = userScore;
    } else if (result === 2) {
        tieMessage.style.display = 'block';
        replayBtn.style.display = 'block';
    } else {
        lostMessage.style.display = 'block';
        playAgainBtn.style.display = 'block';
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
    }
}

rockOption.addEventListener('click', () => {
    result = randomNumber();
    options.classList.add('hidden');
    userSelectedOption(Number(rockOption.id));
    computerSelectedOption(result);
    winMessage.style.display = 'none';
    lostMessage.style.display = 'none';
    playAgainBtn.style.display = 'none';
    tieMessage.style.display = 'none';
    replayBtn.style.display = 'none';
    selectRock();
    OptionsContainer.classList.remove('hidden');
});

paperOption.addEventListener('click', () => {
    result = randomNumber();
    options.classList.add('hidden');
    userSelectedOption(Number(paperOption.id));
    computerSelectedOption(result);
    winMessage.style.display = 'none';
    lostMessage.style.display = 'none';
    playAgainBtn.style.display = 'none';
    tieMessage.style.display = 'none';
    replayBtn.style.display = 'none';
    selectPaper();
    OptionsContainer.classList.remove('hidden');
});

scissorOption.addEventListener('click', () => {
    result = randomNumber();
    options.classList.add('hidden');
    userSelectedOption(Number(scissorOption.id));
    computerSelectedOption(result);
    winMessage.style.display = 'none';
    lostMessage.style.display = 'none';
    playAgainBtn.style.display = 'none';
    tieMessage.style.display = 'none';
    replayBtn.style.display = 'none';
    selectScissor();
    OptionsContainer.classList.remove('hidden');
});

playAgainBtn.addEventListener('click', () => {
    options.classList.remove('hidden');
    OptionsContainer.classList.add('hidden');
    paperOption1.classList.remove('hidden');
    scissorOption1.classList.remove('hidden');
    rockOption1.classList.remove('hidden');
    paperOption2.classList.remove('hidden');
    scissorOption2.classList.remove('hidden');
    rockOption2.classList.remove('hidden');
    winMessage.style.display = 'none';
    lostMessage.style.display = 'none';
    playAgainBtn.style.display = 'none';
    tieMessage.style.display = 'none';
    replayBtn.style.display = 'none';
});

replayBtn.addEventListener('click', () => {
    options.classList.remove('hidden');
    OptionsContainer.classList.add('hidden');
    paperOption1.classList.remove('hidden');
    scissorOption1.classList.remove('hidden');
    rockOption1.classList.remove('hidden');
    paperOption2.classList.remove('hidden');
    scissorOption2.classList.remove('hidden');
    rockOption2.classList.remove('hidden');
    winMessage.style.display = 'none';
    lostMessage.style.display = 'none';
    playAgainBtn.style.display = 'none';
    tieMessage.style.display = 'none';
    replayBtn.style.display = 'none';
})