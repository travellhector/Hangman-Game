var myWords = ["ALLEYOOP", "JUMPMAN", "WARIORS", "POSTER", "ISOLATION", "BACKCOURT", "CAVALIERS"];

var guessed = document.getElementById("guessed");

var displayedWord = document.getElementById("currentWord");

var i = 0;

// array to track keys pressed already
var myKeys = new Array();

// variables for current word and blank spaces in word
var theWord = myWords[i];
var lettercount = theWord.length;

function startGame () { 
    console.log(lettercount);
    console.log(theWord);

    for (i = 0; i < lettercount; i++) {
        var letterblanks = document.createElement("span");
        letterblanks.id = 'l'+i;
        letterblanks.innerHTML = "_";
        displayedWord.appendChild(letterblanks)

    }
    
    // displayedWord.innerHTML = theWord;


  }

  startGame()

document.onkeyup = function(event) {

    // Captures the key press, converts it to lowercase, and saves it to a variable.
    var letter = String.fromCharCode(event.which).toUpperCase();
    console.log(letter);

    var guessList = document.createElement("span");
    guessList.innerHTML = letter;

    // if key pressed is a letter
    if (event.keyCode >= 65 && event.keyCode <= 90) {

        // create array that holds guessed letters so we can check if the guess has already been selected current round.
        var a = myKeys.indexOf(letter);

        if (a == -1){
            myKeys.push(letter);
            guessed.appendChild(guessList);
            console.log(myKeys);

            for (i = 0; i < lettercount; i++) {
                
        
            } 
    
        }
        
        // -------------------------------------------------------------

    }

}





