const FRONT = "card_front";
const BACK = "card_back";

let pokemons = ['bul', 'cat', 'cha', 'chi', 'eev', 'mun', 'pha', 'pike', 'san', 'squ']

creatCardsFromPokemons(pokemons);
function creatCardsFromPokemons(pokemons) {
  let cards = [];

  for (let pokemon of pokemons) {
    cards.push(createPairFromPokemon(pokemon));
  }

  console.log(cards.flatMap(pair => pair));
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