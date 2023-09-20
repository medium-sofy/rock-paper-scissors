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
const resultContainer = document.querySelector('#results-container')
const playerScoreContainer = document.querySelector('#player-score')
const computerScoreContainer = document.querySelector('#computer-score')

function playRound(playerSelection, computerSelection){ // Playes a single round and determines the winner based on player and computer selections
	
	playerInsensitive = playerSelection.toLowerCase() // converts playerSelection to lower case, to make it case-insensitive.
	
	if(playerInsensitive === computerSelection){
		resultContainer.textContent="It's a Draw!"
		playerScoreContainer.textContent=`Player score: ${playerScore}`
	    computerScoreContainer.textContent=`Computer Score: ${computerScore}`
		return "It's a Draw!"
	}
	else if (playerInsensitive === 'rock' && computerSelection === 'paper'){
		computerScore++
		resultContainer.textContent=`You lose! Paper beats ${playerSelection}`
		playerScoreContainer.textContent=`Player score: ${playerScore}`
	    computerScoreContainer.textContent=`Computer Score: ${computerScore}`
		return `You lose! Paper beats ${playerSelection}`
	}
	else if(playerInsensitive === 'rock' && computerSelection === 'scissors'){
		playerScore++
		resultContainer.textContent=`You win! ${playerSelection} beats scissors!`
		playerScoreContainer.textContent=`Player score: ${playerScore}`
	    computerScoreContainer.textContent=`Computer Score: ${computerScore}`
		return `You win! ${playerSelection} beats scissors!`
	}
	else if(playerInsensitive === 'paper' && computerSelection=== 'rock'){
		playerScore++
		resultContainer.textContent=`You win! ${playerSelection} beats rock`
		playerScoreContainer.textContent=`Player score: ${playerScore}`
	    computerScoreContainer.textContent=`Computer Score: ${computerScore}`
		return `You win! ${playerSelection} beats rock`
	}
	else if(playerInsensitive === 'paper' && computerSelection === 'scissors'){
		computerScore++
		resultContainer.textContent=`You lose! Scissors beats ${playerSelection}`
		playerScoreContainer.textContent=`Player score: ${playerScore}`
	    computerScoreContainer.textContent=`Computer Score: ${computerScore}`
		return `You lose! Scissors beats ${playerSelection}`
	}
	else if (playerInsensitive === 'scissors' && computerSelection === 'rock'){
		computerScore++
		resultContainer.textContent=`You lose! Rock beats ${playerSelection}`
		playerScoreContainer.textContent=`Player score: ${playerScore}`
	    computerScoreContainer.textContent=`Computer Score: ${computerScore}`
		return `You lose! Rock beats ${playerSelection}`
	}
	else if (playerInsensitive === 'scissors' && computerSelection === 'paper'){
		playerScore++
		resultContainer.textContent=`You win! ${playerSelection} beats paper!`
		playerScoreContainer.textContent=`Player score: ${playerScore}`
	    computerScoreContainer.textContent=`Computer Score: ${computerScore}`
		return `You win! ${playerSelection} beats paper!`
	}
}

function game(){

	const rock = document.querySelector('#rock')
	const paper = document.querySelector('#paper')
	const scissors = document.querySelector('#scissors')

	rock.addEventListener('click',()=>{console.log(playRound('rock',getComputerChoice()))})
	paper.addEventListener('click',()=>{console.log(playRound('paper',getComputerChoice()))})
	scissors.addEventListener('click',()=>{console.log(playRound('scissors',getComputerChoice()))})
}
game() // Main Function Call 
