const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";

let pokemons = ['bul', 'cat', 'cha', 'chi', 'eev', 'mun', 'pha', 'pik', 'san', 'squ'];

let cards = null;

startGame();

function startGame() {
  cards = creatCardsFromPokemons(pokemons);
  shuffleCards(cards);
  initializeCards();

}

function initializeCards() {
  let gameBoard = document.getElementById("gameboard");

  cards.forEach((card) => {
    cardElement = document.createElement('div');
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon;

    createCardContent(card, cardElement);

    cardElement.addEventListener('click', flippiCard)
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

function shuffleCards(cards) {
  let currentIndex = cards.length;
  let randomIndex = 0;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [cards[randomIndex],
      cards[currentIndex]] = [cards[currentIndex],
      cards[randomIndex]]
  }
}


creatCardsFromPokemons(pokemons);
function creatCardsFromPokemons(pokemons) {
  let cards = [];

  pokemons.forEach((pokemon) => {
    cards.push(createPairFromPokemon(pokemon));
  })

  return cards.flatMap(pair => pair);
}

function createPairFromPokemon(pokemon) {
  return [{
    id: createIdWithPokemon(pokemon),
    icon: pokemon,
    flipped: false,
  },
    {
      id: createIdWithPokemon(pokemon),
      icon: pokemon,
      flipped: false,
    }]
}

function createIdWithPokemon(pokemon) {
  return pokemon + parseInt(Math.random() * 1000);
}

function flippiCard() {
  this.classList.add("flip");
}
