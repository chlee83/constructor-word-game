//constructor function for creating blank lines for letters
var Letter = function(letter) {
  
    //store letter inputted into function
    this.letter = letter;

    //boolean for if letter has been guessed yet
    this.guessedLetter = false;

    //function that returns letter or underscore
    this.toString = function() {

        //if the guessed letter is true, return the letter
        if(this.guessedLetter === false) {

            return "_";

        } else {

            return this.letter;

        }
    }

    //function that checks the letter guessed and see if it matches the correct letter
    this.check = function(userLetter) {

        //if the user's letter is the same as correct letter, change to true
        if(userLetter === this.letter) {

            this.guessedLetter = true;

            guessedCorrect = true;
        } else {
            return false;
        }
    }
}

module.exports = Letter;




