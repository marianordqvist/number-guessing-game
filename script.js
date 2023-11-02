"use strict";

let playersGuessArray = [];

// computer make up random number 1-100
let computersNumber = Math.floor(Math.random() * 100) + 1;

// loop for 5 rounds of guessing
for (let count = 5; count >= 0; count--) {
  // check if player is out of guesses. If so, break the loop.
  if (count === 0) {
    alert(
      "You lost the game. The number I was thinking of was " +
        computersNumber +
        "."
    );
    break;
  }

  // Ask player to input number & store guesses in array
  let playersGuess;

  while (true) {
    playersGuess = Number(
      prompt("Guess what number I am thinking of between 1 and 100")
    );
    // Check if the input is within the valid range
    if (playersGuess >= 1 && playersGuess <= 100) {
      playersGuessArray.push(playersGuess);
      break;
      // Run the loop again if input is a invalid number
    } else {
      alert("Invalid input. Please enter a number between 1 and 100.");
    }
  }

  // return either correct or higher or lower

  if (playersGuess === computersNumber) {
    alert("That was the correct number! You win!");
    break;
  } else if (playersGuess > computersNumber) {
    alert(
      "That was too high. \nYou have " +
        (count - 1) +
        " time(s) left to guess. \nYour previous guesses were: " +
        playersGuessArray.join(", ") +
        "."
    );
  } else if (playersGuess < computersNumber) {
    alert(
      "That was too low. \nYou have " +
        (count - 1) +
        " time(s) left to guess. \nYour previous guesses were: " +
        playersGuessArray.join(", ") +
        "."
    );
  }
}
