var nameOptions = ["homer", "marge", "lisa", "bart", "maggie", "grampa",
                   "ned", "monty", "nelson", "mihouse", "barney", "smithers",
                    "edna", "lenny", "moe", "apu", "krusty", "skinner", "willie",
                    "pattie", "wiggum"];

var selectedName = "";
var lettersInName = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

function startGame () {
    selectedName = nameOptions[Math.floor(Math.random() * nameOptions.length)];
    lettersInName = selectedName.split("");
    numBlanks = lettersInName.length;
    
    console.log(selectedName);
    console.log(lettersInName);
    console.log(numBlanks);
}

startGame();




