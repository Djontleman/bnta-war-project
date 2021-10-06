// const Player = function(name, playerNumber, deck){
//     this.name = name;
//     this.playerNumber = playerNumber;
//     this.deck = deck;
// }

const Player = function(playerNumber) {
    this.playerNumber = playerNumber;
    this.currentCard = null;
}

Player.prototype.assignCard = function(){
    this.currentCard = new this.Card(Math.random(1,13));
}

module.exports = Player