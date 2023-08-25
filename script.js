/*
plan: assign a number to each possible choice, 
eg: rock = 0, paper = 1, and scissors = 2,
use math.floor(math.random() * 3) to get a random number in the range 0 to 2, 
check if generated number equals any choice value, if true, return that choice.
*/

function getRandomInt(int = 3){ //Returns a random integer in the range 0 to < int, defaults to 3.
	return Math.floor(Math.random() * int)
}

function getComputerChoice(){ //Returns either 'Rock', 'Paper', or 'Scissors'
	let rock = 0 
	let paper = 1 
	let scissors = 2

	let choice = getRandomInt()	
	if(choice === 0){
		return 'Rock'
	}
	else if (choice === 1){
		return 'Paper'
	}
	else {
		return 'Scissors'
	}
}

//function playRound(){}
//function game(){}