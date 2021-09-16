
let playerTurn
const cellElements = document.querySelectorAll(".cell");
const cellArray = [...cellElements];
const winnerMessage = document.querySelector(".win-message")
const winPage = document.querySelector(".win-page")
const resetBtn = document.getElementById('resetButton')
const resetBtn2 = document.getElementById('resetButton2')
const win_array = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
 ]

 resetBtn.addEventListener('click', newGame);
 resetBtn2.addEventListener('click', newGame);

 const playerFactory = (name, sym) => {
	return {name, sym}
}

const playerOne = playerFactory('Player One', 'x');
const playerTwo = playerFactory('Player Two', 'cir');

 newGame()

function handleClick(e) {
	 const cell = e.target
	 const currentPlayer = playerTurn ? playerTwo.sym : playerOne.sym
	 placeMarker(cell, currentPlayer)
	 swapPlayer()
	 setPlayerHover(currentPlayer)
	 if (checkWin(currentPlayer)) {
		gameWinner(false)
	 } else if (isDraw()) {
		gameWinner(true)
	 }
}

function newGame() {
	cellElements.forEach(cell => {
		cell.classList.remove(playerOne.sym)
		cell.classList.remove(playerTwo.sym)
		cell.addEventListener('click', handleClick, { once:true })
	})
	winPage.classList.remove('show')
}

function checkWin(currentPlayer){
	return win_array.some(combination => {
		return combination.every(index => {
			return cellElements[index].classList.contains(currentPlayer)
		})
	})
}

function placeMarker(cell, currentPlayer){
	cell.classList.add(currentPlayer);
}

function swapPlayer() {
	playerTurn = !playerTurn
}

function setPlayerHover(playerTurn) {
	let boardClass = document.getElementById("board");
	boardClass.classList.remove(playerOne.sym);
	boardClass.classList.remove(playerTwo.sym);
	if(playerTurn === playerOne.sym){
		boardClass.classList.add(playerTwo.sym);
	}else{
		boardClass.classList.add(playerOne.sym);
	}
}

function gameWinner(draw) {
	if (draw) {
		winnerMessage.innerText = "It's a draw!"
	}else {
		winnerMessage.innerText = `${playerTurn ? "X's" : "O's"} Win!`;
	}
	winPage.classList.add("show")
}

function isDraw() {
	return cellArray.every(cell => {
		return cell.classList.contains(playerOne.sym) ||
		cell.classList.contains(playerTwo.sym)
	})
}