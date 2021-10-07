const Game = require("../src/game.js");
const Player = require("../src/player.js");
const Card = require("../src/card.js");

test("Player 1's card is greater than player 2's", function(){
    const player1 = new Player(1);
    player1.currentCard = 10;
    const player2 = new Player(2);
    player2.currentCard = 3;
    const game = new Game(player1, player2);
    const comparison = game.compare();
    expect(comparison).toBe('Player 1 wins');
    
    
})


test("Player 1.s card is less than player 2's card", function(){
    const player1 = new Player(1);
    player1.currentCard = 5
    const player2 = new Player(2);
    player2.currentCard = 10
    const game = new Game(player1, player2);
    const comparison = game.compare();
    expect(comparison).toBe("Player 2 wins");
})

test("Deck is of length 52", function() {
    const game = new Game();
    game.buildDeck();
    const deckLength = game.deck.length;
    expect(deckLength).toBe(52);
})

test("Deck is of length 52", function() {
    const game = new Game();
    game.buildDeck();
    const shuffled = game.shuffle();
    const shuffledDeckLength = shuffled.length;
    expect(shuffledDeckLength).toBe(52);
})

test("Check player 1 is dealt 26 cards", function() {
    const player_1 = new Player(1);
    const player_2 = new Player(2);
    const game = new Game(player_1, player_2);
    game.buildDeck();
    game.deal();
    const player1DeckLength = game.player1.currentDeck.length;
    expect(player1DeckLength).toBe(26);
    
})

test("Check player 2 is dealt 26 cards", function() {
    const player_1 = new Player(1);
    const player_2 = new Player(2);
    const game = new Game(player_1, player_2);
    game.buildDeck();
    game.deal();
    const player2DeckLength = game.player2.currentDeck.length;
    expect(player2DeckLength).toBe(26);
    
})