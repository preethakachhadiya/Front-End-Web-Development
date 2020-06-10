var secretNumber = 7

var guess = prompt("Guess a number:");

if(Number(guess)<secretNumber)
	alert("Too low!");
else if(Number(guess)==secretNumber)
	alert("You guessed it Right!!");
else
	alert("Too high!");
