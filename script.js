'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1; 
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click' , function() {
    const guess = Number(document.querySelector('.input-field').value);

    //guess equal to  zero
    if(guess === 0) {
        document.querySelector('.start-guessing').textContent = 'No Number!';
    }

    //when guess number is equal to secret number 
    else if(guess === secretNumber) {
        document.querySelector('.start-guessing').textContent = 'Correct Number!';

        // change background color of body when user wins 
        document.querySelector('body').style.backgroundColor = '#60b347';

        //here we change the width 
        document.querySelector('.guess').style.width = '300px';

        //here we print the correct number on screen when user wins 
        document.querySelector('.guess').textContent = secretNumber;
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    
    //when guess number is greater then secret number 
    else if(guess > secretNumber) {
        if(score > 1) {
            document.querySelector('.start-guessing').textContent = 'Too High!';
            score --;
            document.querySelector('.score').textContent = score ;
        }else {
            document.querySelector('.start-guessing').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
    
    //when guess number is less then secret number 
    else if(guess < secretNumber) {
        if(score > 1) {
            document.querySelector('.start-guessing').textContent = 'Too Low!';
            score --;
            document.querySelector('.score').textContent = score ;
        }else {
            document.querySelector('.start-guessing').textContent = 'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});


document.querySelector('.again').addEventListener('click' , function() {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.start-guessing').textContent = 'Start guessing ...';
    document.querySelector('.guess').textContent = '?';
    document.querySelector('.input-field').textContent = '';
    document.querySelector('.guess').style.width = '150px';
});