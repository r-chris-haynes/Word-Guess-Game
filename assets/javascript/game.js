// list of words for the computer to generate
var boardWords = [
    "clue", "monopoly", "trouble", "scrabble", "sorry"
];

var word = [];
var userWins = 0;
var userLosses = 0;
var guessesLeft = 7;
var guessesSoFar = [];


var currentWord = document.getElementById("current-word");
var guessesRemaining = document.getElementById("guesses-remaining");
var alreadyGuessed = document.getElementById("already-guessed");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");



var compChoice = boardWords[Math.floor(Math.random() * boardWords.length)];
var chars = "";
var charsSpace = "_"; 


    var replaceWithBlanks = function() {
    for (var i = 0; i < compChoice.length; i ++) {
     chars += charsSpace;
     currentWord.textContent = chars;
    }
};
replaceWithBlanks();
console.log(chars);


// var i = 0, strLength = str.length;
//     for(i; i < strLength; i++) {
//     str = str.replace(" ", "_");
//  }
//  console.log(str); //"This_string_is_kind_of_spacey."












// var userGuess = event.key


// var compChoice = boardWords[Math.floor(Math.random() * boardWords.length)];
// var chars = compChoice.split("");
// console.log(compChoice);
// var letterGuessCheck = false;
// for (var i = 0; i < chars.length; i++) {
//     if (chars[i] === userGuess); {
//     letterGuessCheck === true;
// }
// }

// var checkUserInput = function(userGuess) { 
//     if (userGuess === compChoice) {
//         wins++;
//         guessesSoFar = [];
//         guessesLeft = 25;
//         compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
//     } else if( guessesLeft===1) {
//         losses++;
//         guessesSoFar = [];
//         guessesLeft = 25;
//         compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
//     } else {
//         guessesLeft--;
//         guessesSoFar.push(userGuess);
//     }
// }

// var checkUserInput = document.getElementById("userGuess");

//  maybe i need to separate each letter and have them displayed as blanks. Seems inefficient. 
// The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
// var clueArray = ["_", "_", "_","_"];
// var monopolyArray = ["_", "_", "_", "_", "_", "_", "_", "_"];
// var troubleArray = ["_", "_", "_", "_", "_", "_", "_"];
// var scrabbleArray = ["_", "_", "_", "_", "_", "_", "_", "_"];
// var sorryArray = ["_", "_", "_", "_", "_"];  

// var userWins = 0;
// var userLosses = 0;
// var guessesLeft = 7;

// // my displays
// var currentWord = document.getElementById("current-word");
// var guessesRemaining = document.getElementById("guesses-remaining");
// var alreadyGuessed = document.getElementById("already-guessed");
// var wins = document.getElementById("wins");
// var losses = document.getElementById("losses");

// document.onkeyup = function(event) {
//     var alreadyGuessed = String.fromCharCode(event.keyCode).toLowerCase();
//     var compChoice = boardWords[Math.floor(Math.random() * boardWords.length)];


// var userGuess = whatever letter the user guesses. Declare in a function and then run in a for loop to see if userGuess === any part of the Array. if === {display letter in Array}; else {guessesLeft --}

