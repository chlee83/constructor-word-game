//require Word from word.js file
var Word = require("./Word");

//require inquirer for user inputs
var inquirer = require("inquirer");

//array of words for the game
var gameWords = ["parrot", "eagle", "mongoose", "elephant", "mouse", 
                "cat", "shark", "hamster", "whale", "giraffe", "cheetah", 
                "snake", "flamingo"]

//guesses left for player
var guessesLeft = 10;

var guessedCorrect = false;

//choses a random number using array length
var ranNum = Math.floor(Math.random() * gameWords.length);

//choses a random word using ranNum
var randomWord = gameWords[ranNum];

//use Word constructor for the random word
var chosenWord = new Word(randomWord);


//main game function
function mainGame() {

    //if guesses left is greater than zero, ask user to guess a letter
    if (guessesLeft > 0) {

        inquirer.prompt([
            {
                type: "input",
                message: "\n" +chosenWord.display() + "\n\nGuess a letter!",
                name: "inputLetter"
            }
        ]).then(function(response) {
            
            // check letter in guess function
            chosenWord.guess(response.inputLetter);

            // if the chosen word has no more blanks share good job and reset game
            if (!chosenWord.display().includes("_")) {
                
                console.log("\nGood Job! You completed the word!\nThe word was: " + randomWord + "\n");

                resetGame();

            // if guessed correctly, continue main game function to guess again
            } else if (randomWord.indexOf(response.inputLetter) > -1) {

                console.log("Correct! \n");

                mainGame();

            //if wrong guess then decrease guesses left and display info
            } else {

                // decrease guesses left by 1
                guessesLeft--;

                //show guesses left
                console.log("\nIncorrect! \nGuessed Left: " + guessesLeft + "\n");

                mainGame();

            }

        });

    // else no more guesses left, reset game
    } else {

        console.log("Sorry, you lost! The word was: " + randomWord + "\n");

        resetGame();

    }

}

// reset game function
function resetGame() {

    //ask if player wants to play again
    inquirer.prompt([
        {
            type: "list",
            message: "Play another game?",
            name: "playAgain",
            choices: ["yes", "no"]
        }
    ]).then(function(res) {

        //if yes, reset details, choose new word, and play again
        if (res.playAgain === "yes") {

            guessesLeft = 10;

            ranNum = Math.floor(Math.random() * gameWords.length);
            
            randomWord = gameWords[ranNum];
        
            chosenWord = new Word(randomWord);
        
            mainGame();

        //if no, end game
        } else {
            return false;
        }
    })

}

//start game
mainGame();