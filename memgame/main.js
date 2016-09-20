var cards = ["king", "queen", "queen", "king", "queen", "king", "king", "queen"];
var cardsInPlay = []
var points = document.getElementById('points')
var score = points.innerHTML;

function reset(){
	board.innerHTML = ('')
	createBoard();
}
var board = document.getElementById('game-board');

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	var newCard = document.createElement('div');
	newCard.className = 'card';
	newCard.setAttribute('data-card', cards[i]);
	newCard.addEventListener('click', isTwoCards);
	board.appendChild(newCard);
	}
}
var isTwoCards = function(){
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>";
	} else {
		this.innerHTML = "<img src='queen.png'>";
	}
	if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
	cardsInPlay = [];
	}
}

var isMatch = function(cards){
	if (cards[0] === cards[1]) {
		alert('You found a match!');
		score++;
		points.innerHTML = score;
	}
	else {
		alert('Sorry, try again.')
	}
}
createBoard();
