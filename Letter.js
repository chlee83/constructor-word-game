//constructor function for creating blank lines for letters
var Letter = function(letter) {
  
    this.letter = letter;

    this.correctLetter = false;

    this.underScore = function() {
        if(this.correctLetter === true) {
            return this.letter;
        }
        else {
            return "_";
        }
    }

    this.check = function(userLetter) {
        if(userLetter  === this.letter) {
            this.correctLetter = true;
        }
    }
};

module.exports = Letter;




