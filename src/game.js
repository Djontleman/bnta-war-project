const Game = function(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
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

module.exports = Game;