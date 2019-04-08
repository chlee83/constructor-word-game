//require the Letter constructor
var Letter = require("./Letter");

//constructor function for randomly selecting a word and storing it
var Word = function (response) {

    //grab the word for the game
    this.gameWord = response;

    //empty array of letters for the word
    this.lettersArr = [];

    //split the letters of the word
    var lettersOfWord = this.gameWord.split("");

    //create new Letter object from the word
    for (var i = 0; i < lettersOfWord.length; i++) {
        
        var letter = new Letter(lettersOfWord[i]);
        
        this.lettersArr.push(letter);
    }

    //function to string the word by concatenating the letters
    this.display = function() {
        
        var chosenWord = "";

        //create word with all the letters
        for (var i = 0; i < this.lettersArr.length; i++) {

            var letter = this.lettersArr[i];

            chosenWord += letter + " ";

        }

        return chosenWord;
    }

    //function to check each guessed letter
    this.guess = function(input) {

        //for all the letters in word, chcek the user's choice
        for (var i = 0; i < this.lettersArr.length; i++) {
            
            var letter = this.lettersArr[i];
            
            //check letter using check function
            letter.check(input);
        }
    }
}

module.exports = Word;