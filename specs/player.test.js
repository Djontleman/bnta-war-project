const Player = require("../src/player.js");
const Card = require("../src/card.js");
const Game = require("../src/game.js");


test("number is greater than 1", function(){
    const player_1 = new Player(1);
    const player_2 = new Player(2);
    const game = new Game(player_1, player_2)
    game.buildDeck();
    game.deal();
    const value = player_1.assignCard();
    expect(value).toBeGreaterThan(0);

})
test("number is less than 14", function(){
    const player_1 = new Player(1);
    const player_2 = new Player(2);
    const game = new Game(player_1, player_2)
    game.buildDeck();
    game.deal();
    const value = player_1.assignCard();
    expect(value).toBeLessThan(14);

})

// test("current deck length is 26", function(){
//     const player_1 = new Player(1);
//     const player_2 = new Player(2);
//     const game = new Game(player_1, player_2)
//     game.buildDeck();
//     game.deal();
//     const currentDeckLength = game.player1.currentDeck.length;
//     expect(currentDeckLength).toBe(26);
// })

test("current deck length changes from 26 to 25", function(){
    const player_1 = new Player(1);
    const player_2 = new Player(2);
    const game = new Game(player_1, player_2)
    game.buildDeck();
    game.deal();
    player_1.removeCard();
    const currentDeckLength = game.player1.currentDeck.length;
    expect(currentDeckLength).toBe(25);
})