// list of words for the computer to generate
var boardWords = [
    "clue", "monopoly", "trouble", "scrabble", "sorry"
];
// make computer make a random choice once user clicks
var compChoice = boardWords[Math.floor(Math.random() * boardWords.length)];

var userWins = 0;
var userLosses = 0;
var guessesLeft = 7;

var currentWord = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-remaining");
var alreadyGuessed = document.getElementById("already-guessed");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");

document.onkeyup = function(event) {
    var alreadyGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    var compChoice = boardWords[Math.floor(Math.random() * boardWords.length)];

}




//  maybe i need to separate each letter and have them displayed as blanks. Seems like a lot of typing. 

// var clueArray = ["_", "_", "_","_"];
// var monopolyArray = ["_", "_", "_", "_", "_", "_", "_", "_"];
// var troubleArray = ["_", "_", "_", "_", "_", "_", "_"];
// var scrabbleArray = ["_", "_", "_", "_", "_", "_", "_", "_"];
// var sorryArray = ["_", "_", "_", "_", "_"];  



// var userGuess = whatever letter the user guesses. Declare in a function and then run in a for loop to see if userGuess === any part of the Array. if === {display letter in Array}; else {guessesLeft --}
