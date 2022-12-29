'use strict';

// Get random number: trunc() removes decimals => only from 0 -> 19 so we add 1 for 1 -> 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; // Initial score
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Take in input from box and check the guessed number
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '🛑 No number!';
    displayMessage('🛑 No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess != secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💣 You lost the game!';
      displayMessage('💣 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Again reset button
document.querySelector('.again').addEventListener('click', function () {
  // Reset score and secret number
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  // Reset message, number, score, guess input field, color, number width
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
