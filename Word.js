//require the Letter constructor
var Letter = require("./Letter");

//constructor function for randomly selecting a word and storing it
var Word = function (word) {

    this.word = word;

    //empty array of letters for the word
    this.letterArr = [];

    var letters = this.word.split("");

    //create new Letter object from the word
    for (var i = 0; i < letters.length; i++) {
        
        var letter = new Letter (letters[i]);
        
        this.letterArr.push(letter);
    }

    this.showWord = function() {
        
        var chosenWord = "";

        for (var i = 0; i < this.letterArr.length; i++) {

            var letter = this.letterArr[i];

            chosenWord = chosenWord.concat(letter + " ");
        }

        return chosenWord;
    }

    this.userGuess = function(input) {

        for (var i = 0; i < this.letterArr.length; i++) {
            
            var letter = this.letterArr[i];
            
            letter.check(input);
        }
    }
}

module.exports = Word;