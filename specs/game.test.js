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
    expect(comparison).toBe(player1);
    
    
})


test("Player 1.s card is less than player 2's card", function(){
    const player1 = new Player(1);
    player1.currentCard = 5
    const player2 = new Player(2);
    player2.currentCard = 10
    const game = new Game(player1, player2);
    const comparison = game.compare();
    expect(comparison).toBe(player2);
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

test("Check winner gets both cards", function(){
    const player_1 = new Player(1);
    const player_2 = new Player(2);
    const game = new Game(player_1, player_2);
    game.buildDeck();
    game.deal();
    const winner = game.turn();
    const winnerDeckLength = winner.currentDeck.length;
    expect(winnerDeckLength).toBe(27);
    
})

test("Deck length zero ends game", function(){
    const player_1 = new Player(1);
    const player_2 = new Player(2);
    const game = new Game(player_1, player_2);
    game.buildDeck();
    game.deal();
    game.player1.currentDeck = [];
    game.endGame();
    const gameOverBool = game.gameOver;
    expect(gameOverBool).toBe(true);
})

test("Ending game assigns winner to player 2", function(){
    const player_1 = new Player(1);
    const player_2 = new Player(2);
    const game = new Game(player_1, player_2);
    game.buildDeck();
    game.deal();
    game.player1.currentDeck = [];
    game.endGame();
    const gameOverWinner = game.gameWinner;
    expect(gameOverWinner).toBe(player_2);
})