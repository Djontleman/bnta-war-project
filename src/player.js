// const Player = function(name, playerNumber, deck){
//     this.name = name;
//     this.playerNumber = playerNumber;
//     this.deck = deck;
// }
const Card = require("../src/card.js");

const Player = function(playerNumber) {
    this.playerNumber = playerNumber;
    this.currentDeck = [];
    this.currentCard = null;
}

Player.prototype.assignCard = function(){
    this.currentCard = new Card(Math.floor(Math.random()*13 + 1));
    return this.currentCard.value;
}

module.exports = Player