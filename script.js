'use strict';
let randomNumber = Math.floor(Math.random() * 21);
let score = 20;
let highScore = 0;
function onCheckClick(number) {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    //guess empty
    if(!guess) {
        document.querySelector(".message").textContent = "Nummer ist leer";
        document.body.style.backgroundColor = "rgb(87, 15, 123)";
    }

    //guess > random
    if(guess > randomNumber) {
        document.querySelector(".message").textContent = "Nummer is kleiner";
        document.body.style.backgroundColor = "rgb(123, 15, 15)";
        score -= 1;
        document.querySelector(".score").textContent = "" + score;
    }
    if(guess < randomNumber) {
        document.querySelector(".message").textContent = "Nummer is großer";
        document.body.style.backgroundColor = "rgb(123, 15, 15)";
        score -= 1;
        document.querySelector(".score").textContent = "" + score;
    }
    if(guess == randomNumber) {
        document.querySelector(".message").textContent = "RICHTIG";
        document.body.style.backgroundColor = "green";
        highScore += score;
        score = 20;
        document.querySelector(".score").textContent = "" + score;
        document.querySelector(".highscore").textContent = "" + highScore;
    
    }
}

function onAgainClick() {
    score = 20;
    document.querySelector('.guess').textContent = "";
    randomNumber = Math.floor(Math.random() * 21);
    document.body.style.backgroundColor = "#222";
    document.querySelector(".message").textContent = "Start Guessing...";
    document.querySelector(".guess").value = "";
}
const guess = Number(document.querySelector('.guess').value);

//setting listener
console.log(document.querySelector(".check").addEventListener('click', onCheckClick));

document.querySelector(".again").addEventListener('click', onAgainClick);


