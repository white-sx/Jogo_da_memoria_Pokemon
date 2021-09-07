let game = {
	
	lockMode: false,
	firstCard: null,
	secondCard: null,
	
	pokemons: ['bul',
		'cat',
		'cha',
		'chi',
		'eev',
		'mun',
		'pha',
		'pik',
		'san',
		'squ'],
	
	setCard: function(id) {
		let card = this.cards.filter(card => card.id === id)[0]; 
		
		if (card.flipped || this.lockMode) return false; if (!this.firstCard) {
			this.firstCard = card; 
			this.firstCard.flipped = true; 
			return true;
		} else {
			this.secondCard = card; 
			this.secondCard.flipped = true; 
			this.lockMode = true; 
			return true;
		}
	},
	
	checkMatch: function () {
		if (!this.firstCard || !this.secondCard) return false; return this.firstCard.icon === this.secondCard.icon;
	},
	
	clearCard: function() {
		this.firstCard = null; 
		this.secondCard = null; 
		this.lockMode = false;
	},
	
	unflipCards: function () {
					this.firstCard.flipped = false; 
					this.secondCard.flipped = false; 
					this.clearCard();
	},
	
	checkGameOver() {
        return this.cards.filter(card => !card.flipped).length == 0;
    },
		
	cards: null,
	
	creatCardsFromPokemons: function() {
		this.cards = []; 
		this.pokemons.forEach((pokemon) => {
			this.cards.push(this.createPairFromPokemon(pokemon));
		}) 
		this.cards = this.cards.flatMap(pair => pair); this.shuffleCards(); return this.cards;
	},
	createPairFromPokemon: function(pokemon) {
		return [{
			id: this.createIdWithPokemon(pokemon),
			icon: pokemon,
			flipped: false,
		},
			{
				id: this.createIdWithPokemon(pokemon),
				icon: pokemon,
				flipped: false,
			}]
	},
	createIdWithPokemon: function(pokemon) {
		return pokemon + parseInt(Math.random() * 1000);
	},
	shuffleCards: function(cards) {
		let currentIndex = this.cards.length; let randomIndex = 0; while (currentIndex !== 0) {
			randomIndex = Math.floor(Math.random() * currentIndex); currentIndex--; [this.cards[randomIndex],
				this.cards[currentIndex]] = [this.cards[currentIndex],
				this.cards[randomIndex]]
		}
	},
}
