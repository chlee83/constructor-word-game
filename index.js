/*****************
 * letters are coming out as just objects and not displaying correctly
 * letters should display as underscores
 * 
 */

//require Word from word.js file
var Word = require("./Word");

//require inquirer for user inputs
var inquirer = require("inquirer");

//array of words for the game
var gameWords = ["Avengers", "Iron Man", "Snatch", "Spiderman", "Oceans Eleven", "Brave Heart", "Lion King", 
                "Finding Nemo", "Aladdin", "Independence Day", "Men In Black", "Jumanji"]

//guesses left for player
var guessesLeft = 10;

//choses a random number using array length
var ranNum = Math.floor(Math.random() * gameWords.length);
//choses a random word using ranNum
var randomWord = gameWords[ranNum];

//use Word constructor for the random word
var chosenWord = new Word(randomWord);


//main game function
function mainGame() {

    if (guessesLeft > 0) {

        inquirer.prompt([
            {
                type: "input",
                message: "Guesses Left: " + guessesLeft + 
                        "\n" + chosenWord.showWord() + 
                        "\nGuess a letter!",
                name: "inputLetter"
            }
        ]).then(function(response) {

            chosenWord.userGuess(response.inputLetter);

            guessesLeft--;;

            if (!chosenWord.showWord().includes("_")) {
                
                console.log("Good Job!");

                resetGame();

            } else {

                mainGame();

            }
        });

    } else {

        console.log("Sorry, you lost! The word was: " + chosenWord);
        resetGame();

    }


}

//reset game to starting guesses and pick new word
function resetGame() {

    guessesLeft = 10;

    chosenWord = new Word(randomWord);

    mainGame();

}

//start game
mainGame();