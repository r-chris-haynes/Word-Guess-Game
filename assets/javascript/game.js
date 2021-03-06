var nameOptions = [
  "homer",
  "marge",
  "lisa",
  "bart",
  "maggie",
  "grampa",
  "ned",
  "monty",
  "nelson",
  "milhouse",
  "barney",
  "smithers",
  "edna",
  "lenny",
  "moe",
  "apu",
  "krusty",
  "skinner",
  "willie",
  "pattie",
  "wiggum"
];

var selectedName = "";
var lettersInName = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

function startGame() {
  selectedName = nameOptions[Math.floor(Math.random() * nameOptions.length)];
  lettersInName = selectedName.split("");
  numBlanks = lettersInName.length;

  blanksAndSuccesses = [];
  wrongLetters = [];
  guessesLeft = 9;

  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  document.getElementById("nameToGuess").innerHTML = blanksAndSuccesses.join(
    " "
  );
  document.getElementById("numGuesses").innerHTML = guessesLeft;
  document.getElementById("winCounter").innerHTML = wins;
  document.getElementById("lossCounter").innerHTML = losses;

  console.log(selectedName);
  console.log(lettersInName);
  console.log(numBlanks);
  console.log(blanksAndSuccesses);
}

function wrongGuesses(){
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
}


function checkLetters(letter) {
  var isLetterInName = false;

  for (var i = 0; i < numBlanks; i++) {
    if (selectedName[i] == letter) {
      isLetterInName = true;
    }
  }

  if (isLetterInName) {
    for (var i = 0; i < numBlanks; i++) {
      if (selectedName[i] == letter) {
        blanksAndSuccesses[i] = letter;
      }
    }

    if(lettersInName.toString() === blanksAndSuccesses.toString()) {
        wrongLetters = [];
        wins ++;
        // console.log("wins: " + wins)
        wrongGuesses();
        startGame();
    }

  } else {
    wrongLetters.push(letter);
    guessesLeft--;
    wrongGuesses();
    // document.getElementById("wrongGuesses").innerHTML = wrongLetters;
    // console.log(guessesLeft);
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    
    if (guessesLeft === 0) {
      wrongLetters = [];
      losses++;
      wrongGuesses();
      
      document.getElementById("lossCounter").innerHTML = losses;
      startGame();
    }
  }
  document.getElementById("nameToGuess").innerHTML = blanksAndSuccesses.join(
    " "
  );
};

startGame();

document.onkeyup = function(event) {
  var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
  checkLetters(letterGuessed);

  console.log(letterGuessed);
};
