const Card = require("../src/card.js");
const Player = require("../src/player.js");

const Game = function(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.deck = [];
    this.gameOver = false;
    this.gameWinner = null;
}

Game.prototype.compare = function(){
    const card1 = this.player1.currentCard;
    const card2 = this.player2.currentCard;
    if (card1>card2){
        return this.player1;
    }
    else if (card2>card1){
        return this.player2;
    }
    else {
        this.war();
    }

}

Game.prototype.war = function(){
    // const faceDown1 = this.player1.currentDeck.slice(1,4);
    // const faceDown2 = this.player2.currentDeck.slice(1,4);
    const faceUp1 = this.player1.currentDeck[3];
    const faceUp2 = this.player2.currentDeck[3];
    const allCards = this.player1.currentDeck.slice(0,3).concat(this.player2.currentDeck.slice(0,3)).concat([this.player1.currentCard, this.player2.currentCard]).concat([this.player1.currentDeck[3], this.player2.currentDeck[3]]);
    player1.currentDeck = loser.currentDeck.slice(4);
    player2.currentDeck = loser.currentDeck.slice(4);
    
    if (faceUp1>faceUp2){
        winner = this.player1;
        loser = this.player2;
    }
    else if (faceUp2>faceUp1){
        winner = this.player2;
        loser = this.player1;
    }
    else {
        this.war();
        
    }

    if (this.gameOver===false){
        for (card of allCards){
            winner.currentDeck.push(card);
        }
        
        

        // this.player1.assignCard();
        // this.player2.assignCard();
        // const cardsPlayed = [this.player1.currentCard, this.player2.currentCard];
        // this.player1.removeCard();
        // this.player2.removeCard();
        // // const winner = this.compare();
        // winner.currentDeck.push(cardsPlayed[0], cardsPlayed[1]);
        this.endGame();
        return winner;
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

Game.prototype.turn = function(){
    if (this.gameOver===false){
        this.player1.assignCard();
        this.player2.assignCard();
        const cardsPlayed = [this.player1.currentCard, this.player2.currentCard];
        this.player1.removeCard();
        this.player2.removeCard();
        const winner = this.compare();
        winner.currentDeck.push(cardsPlayed[0], cardsPlayed[1]);
        this.endGame();
        return winner;
    }
}

Game.prototype.endGame = function(){
    if (this.player1.currentDeck.length===0){
        this.gameOver = true;
        this.gameWinner = this.player2;
    }
    else if (this.player2.currentDeck.length===0){
        this.gameOver = true;
        this.gameWinner = this.player1;
    }
}

module.exports = Game;