	// Our array of possible letters.

	var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

	// Generates random letter.

	var letter = letters[Math.floor(Math.random()*letters.length)];

	// Initialize wins and losses to 0, and set the number of guesses to 9.

	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var guessArray = [];

	//  When the user presses a key, it will run the following fuction...

	document.onkeyup = function(event) {

		// Determine which key was pressed.

		var userGuess = event.key;
		guessArray.push(String.fromCharCode(event.which).toLowerCase());


		if (userGuess == letter) {
			wins++;
			guessesLeft = 9;
			letter = letters[Math.floor(Math.random()*letters.length)];
			guessArray.length = 0;
		}
		else {

			guessesLeft--;
		}

		if (guessesLeft == 0) {
			losses++;
			guessesLeft = 9;
			letter = letters[Math.floor(Math.random()*letters.length)];
			guessArray.length = 0;
		}

		var html = "<h1>The Psychic Game</h1>" + 
				"<h3>Guess what letter I am thinking of.</h3>" + 
				"<h3>Wins: " + wins + "</h3>" + 
				"<h3>Losses: " + losses + "</h3>" + 
				"<h3>Guesses Left: " + guessesLeft + "</h3>" + 
				"<h3>Your guesses so far: " + guessArray + "</h3>";

		document.querySelector("#game").innerHTML = html;
    }