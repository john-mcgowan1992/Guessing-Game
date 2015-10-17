//global variables
var targetNum = numGenerate();
var guessLog = [];
var guessCounter = 0;
var targetDistance;
var currentGuess; 


//generate random target number 
function numGenerate() {
	return Math.floor(Math.random() * 100) + 1;
}

//set currentGuess with input
function setGuess() {
	currentGuess = Number($("#guessInput").val());
		//define distance
	targetDistance = currentGuess - targetNum;
		//increment counter & store in guessLog
	guessCounter ++;
	guessLog.push(currentGuess);
	$("#guessInput").val("");
	validRun();
}


//define heat signal
function guessHelp() {
	if (targetDistance > 40 || targetDistance < -40) {
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
	else if (targetDistance > 0 || targetDistance < 0) {
		return "scalding hot!";
	}
	else {
			//reset background when user enters correct number 
		$('body').css('background-image', 'url(https://idisciple.blob.core.windows.net/idm/Let-the-Glory-of-God-Dwell-Upon-You.png)')
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
	else 
	{
		return "You are " + guessHelp() + " You win!"
	}
}

//append guessGuidance text below input box and clear any previous strings
function appender(str, id) {
	$(id).empty();
	$(id).text(str);
}

// check number repeat function 
 //couldn't seem to get this function to properly run... every time i added it to the conditionals of validRun() it would return true
function didRepeat() {
	if (guessLog.indexOf(currentGuess) !== -1) {
		return true;
	}
}


//run game with validations
function validRun() {
if(isNaN(currentGuess)) {
		return appender("Hey that's not a number! You just lost a guess.", '#textBox');
	}
else if (currentGuess < 1 || currentGuess > 100) {
	return appender("Well that was a waste of a guess! 1-100 please", '#textBox');
}
// couldn't get this to run as needed 
/* if (didRepeat()) {
	return "You have already tried that number. Guess again!"
}*/
else if (guessCounter > 5) {
	return appender("You're outta guesses! Play again at your own risk.", '#textBox');
}
else  {
	return appender(guessGuidance(), '#textBox');
	}
}

//newGame function for 'new game Button'
function newGame() {
	targetNum = Math.floor(Math.random() *101);
	guessLog = [];
	guessCounter = 0;
	targetDistance= 0;
	$('#textBox').empty();
	$('body').css('background-image', 'url(https://lh3.googleusercontent.com/-4PTjS9NbloE/VVJvHnm_txI/AAAAAAAAAbM/xBp4Qkhxrpc/w1452-h968-no/IMG_2184.jpg');
}

//redo button functionality
$('#Redobutton').click(function() {
	newGame();
});

//hint button functionality
$('#showAnswer').click(function() {
	return appender("The Answer is: " + targetNum, '#textBox');
});

// i played around with a number of different ways but couldnt figure out how to appen a list or a button that showed a list
	//the following code was my attempt to add a guess log to the page; i failed to do so
/*show list of guesses 
var listStr = "Last Guess: " + guessLog[guessCounter-1] + "\n" + "It was " + guessHelp();
		appender(listStr, "#guessList");
	*/	
	














