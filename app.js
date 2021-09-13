const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';

document.querySelector('html').onclick = function () {
	alert('Ouch! Stop poking me!');
}


// Gameboard Object

const gameBoard = function(){
	let boardArray = [1, 2, 3, 4, 5, 6, 7, 8 ,9];
	return boardArray;
}

const player1 = function(name){
	this.name = name
	let sym = "x"
}

const player2 = function(name){
	this.name = name
	let sym = "o"
}

const gameManager = function(){
	let turn = 1;
	turnCounter();{
		turn += 1;
		return turn;
	}
	changePlayer(){
		if(turn % 2 === 0){
		currentPlayer = player1;
		return currentPlayer;
		}else {
			currentPlayer = player2;
			return currentPlayer;
		}
	}
}