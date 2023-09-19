/*
Date: Aug/25th 2023
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

	let choice = getRandomInt()	// Either: 0, 1, or 2
	if(choice === 0){
		return 'rock'
	}
	else if (choice === 1){
		return 'paper'
	}
	else {
		return 'scissors'
	}
}

/*
	function playRound() pseudocode: 

if (player === computer){
	It's A draw!
}
else if (player = rock && computer = paper){
	return 'you lose! paper beats ${playerSelection}'
}
else if(player = rock && computer = scissors){
	return 'You win! ${playerSelection} beats Scissors!'
}
else if(player = paper && computer = rock){
	return 'You win!  ${playerSelection} beats rock'
}
else if(player = paper && computer = scissors){
	return 'You lose! scissors beats ${playerSelection}'
}
else if (player = scissors && computer = rock){
	return 'You lose! rock beats ${playerSelection}'
}
else if (player = scissors && computer = paper){
	return 'you win! ${playerSelection beats Paper!}'
}
*/

let playerScore = 0
let computerScore = 0

function playRound(playerSelection, computerSelection){ // Playes a single round and determines the winner based on player and computer selections
	
	playerInsensitive = playerSelection.toLowerCase() // converts playerSelection to lower case, to make it case-insensitive.
	
	if(playerInsensitive === computerSelection){
		return "It's a Draw!"
	}
	else if (playerInsensitive === 'rock' && computerSelection === 'paper'){
		computerScore++
		return `You lose! Paper beats ${playerSelection}`
	}
	else if(playerInsensitive === 'rock' && computerSelection === 'scissors'){
		playerScore++
		return `You win! ${playerSelection} beats scissors!`
	}
	else if(playerInsensitive === 'paper' && computerSelection=== 'rock'){
		playerScore++
		return `You win! ${playerSelection} beats rock`
	}
	else if(playerInsensitive === 'paper' && computerSelection === 'scissors'){
		computerScore++
		return `You lose! Scissors beats ${playerSelection}`
	}
	else if (playerInsensitive === 'scissors' && computerSelection === 'rock'){
		computerScore++
		return `You lose! Rock beats ${playerSelection}`
	}
	else if (playerInsensitive === 'scissors' && computerSelection === 'paper'){
		playerScore++
		return `You win! ${playerSelection} beats paper!`
	}
}

function game(){

	for(let i = 0; i < 5; i++){ // Main game loop, plays a game of 5 rounds
		playerSelection = prompt("Rock, Paper, or Scissors?")
		console.log(playRound(playerSelection,getComputerChoice()))
	}

	if (playerScore < computerScore){
		console.log(`You lost the game! your score is ${playerScore}, and the computer score is ${computerScore}.`)
	}
	else if (playerScore > computerScore){
		console.log(`You won the game! your score is ${playerScore}, and the computer score is ${computerScore}.`)
	}else(
		console.log(`The game ended with a draw! your score is ${playerScore}, and the computer score is ${computerScore}.`)
	)
}

//game() // Main Function Call 
