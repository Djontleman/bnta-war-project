const Player = require("../src/player.js");
const Card = require("../src/card.js");


test("number is greater than 1", function(){
    const player = new Player(1);
    const value = player.assignCard();
    expect(value).toBeGreaterThan(0);

})
test("number is less than 14", function(){
    const player = new Player(1);
    const value = player.assignCard();
    expect(value).toBeLessThan(14);

})