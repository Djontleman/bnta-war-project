const Player = require("../src/player.js");


test("number is greater than 1", function(){
    const player = new Player(1);
    const card = player.assignCard();
    expect(card).toBeGreaterThan(0);

})
test("number is less than 14", function(){
    const player = new Player(1);
    const card = player.assignCard();
    expect(card).toBeLessThan(14);

})