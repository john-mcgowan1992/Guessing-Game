//setup global variables
var targetNum = numGenerate();
var guessLog = [];
var guessCounter = guessLog.length;
var targetDistance;
var currentGuess; 


//generate targer number 
function numGenerate() {
	return Math.floor(Math.random() * 100) + 1;
}

//set currentGuess with input
function setGuess() {
	$("#guessButton").click(function() {
	currentGuess = Number(document.getElementById('guessInput').value);
	});
	//store in guessLog
		guessLog.push(currentGuess);
	//define distance
		targetDistance = currentGuess - targetNum;
	return currentGuess;
}


//define distance from target
function guessHelp() {
	if (targetDistance === 0) {
		return "You guessed the right number!";
	}
	else if (targetDistance > 40 || targetDistance < -40) {
		return "very cold. "
	}
	else if (targetDistance > 25 || targetDistance < -25) {
		return "cold.";
	}
	else if (targetDistance > 15 || targetDistance < -15) {
		return "warm.";
	}
	else if (targetDistance > 8 || targetDistance < -8) {
		return "hot.";
	}
	else if (targetDistance > 1 || targetDistance < - 1) {
		return "scalding hot!";
	}
	else {
		return "right on the money!";
	}
}


//return hot/cold and guessing direction
function guessGuidance() {
	if (targetDistance < 0) {
		return "You are " + guessHelp() + " You need to guess higher!";
	}
	else if (targetDistance > 0) {
		return "You are " + guessHelp() + " You need to guess lower!";
	}
	else {
		return "You are " + guessHelp() + " You win!"
	}
}

//core game function
function runGame() {
if (guessCounter > 5) {
	return "I'm sorry; you've used up all of your guesses. Please press 'Try Again' to restart the game.";
}
else if (guessLog.indexOf(currentGuess) !== -1) {
	return "You already tried that number! Guess again!";
}
else {
	return guessGuidance();
	}
}

//this additional code is just to see that the logic is working 
currentGuess= 65;
guessLog[0] = 30;
targetDistance = currentGuess - targetNum;
console.log(runGame(), "\n" + "Guess: " + currentGuess, "\n" + "Target: " + targetNum);

