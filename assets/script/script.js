const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";

startGame();

function startGame() {
	initializeCards(game.creatCardsFromPokemons());

}

function initializeCards() {
	let gameBoard = document.getElementById("gameboard");
	gameBoard.innerHTML = ''

	game.cards.forEach((card) => {
		let cardElement = document.createElement('div');
		cardElement.id = card.id;
		cardElement.classList.add(CARD);
		cardElement.dataset.icon = card.icon;

		createCardContent(card, cardElement);

		cardElement.addEventListener('click', flipCard)
		gameBoard.appendChild(cardElement);
	})
}

function createCardContent(card, cardElement) {
	createCardFace(FRONT, card, cardElement);
	createCardFace(BACK, card, cardElement);
}

function createCardFace(face, card, element) {
	let cardElementFace = document.createElement('div');
	cardElementFace.classList.add(face);


	if (face === FRONT) {
		let iconElement = document.createElement('img');
		iconElement.src = "./assets/img/" + card.icon + ".png";
		iconElement.classList.add(ICON);
		cardElementFace.appendChild(iconElement);
	} else {
		let iconElement = document.createElement('img');
		iconElement.src = "./assets/img/poke.png";
		iconElement.classList.add(ICON);
		cardElementFace.appendChild(iconElement);
	}
	element.appendChild(cardElementFace);
}


function flipCard() {
				console.log(game);
	if (game.setCard(this.id)) {
		this.classList.add('flip')

		if (game.secondCard) {
			if (game.checkMatch()) {
				game.clearCard()
			} else {
				setTimeout(() => {
					let firstCardView = document.getElementById(game.firstCard.id)
					let secondCardView = document.getElementById(game.secondCard.id)

					firstCardView.classList.remove('flip')
					secondCardView.classList.remove('flip')
					game.clearCard();
				}, 1000)
			}
		}
	}
}
