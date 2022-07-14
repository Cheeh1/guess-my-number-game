'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; //Generating the random number
let score = 20; 
let highScore = 0;

//Do Not Repeat Yourself
const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number (document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No Number!');

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.empty').textContent = secretNumber;

    document.querySelector('.container').style.backgroundColor = '#60b347';
    document.querySelector('.empty').style.width = '10%'

    //Implementing highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highScore').textContent = highScore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!'); 
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  /*    //When score gets too high
  } else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'Too High!';
      score--; //decrement in score
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }

    //when score gets too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;  //decrement in score
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }*/
});

//Resetting the game
document.querySelector('.again').addEventListener('click', function() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.empty').textContent = '?';
  document.querySelector('.guess').value = '';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;

  document.querySelector('.container').style.backgroundColor = '#222';
  document.querySelector('.empty').style.width = '20px';
}); 


