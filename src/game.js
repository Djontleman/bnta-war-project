const Card = require("../src/card.js");
const Player = require("../src/player.js");

const Game = function(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.deck = [];
}

Game.prototype.compare = function(){
    const card1 = this.player1.currentCard;
    const card2 = this.player2.currentCard;
    if (card1>card2){
        return "Player 1 wins";
    }
    else {
        return "Player 2 wins";
    }

}

Game.prototype.buildDeck = function(){
    for (j=0; j<4; j++){
        for (i=1; i<14; i++){
            this.deck.push(new Card(i));
        }
    }
}

Game.prototype.shuffle = function(){
    const newDeck = this.deck;
    const shuffledDeck = [];
    while (newDeck.length>0){
        let randomNum = Math.floor(Math.random()*newDeck.length);
        let randomCard = newDeck[randomNum];
        newDeck.splice(randomNum,1);
        shuffledDeck.push(randomCard);
    }
    return shuffledDeck;
}

Game.prototype.deal = function(){
    const shuffled = this.shuffle();
    this.player1.currentDeck = shuffled.slice(0,26);
    this.player2.currentDeck = shuffled.slice(26);
    
}

module.exports = Game;