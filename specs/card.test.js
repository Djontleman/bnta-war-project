const Card = require("../src/card.js");

test("Check card is given value of 1", function () {
    card = new Card(1);
    expect(card.value).toBe(1);
})

test("Check card is given value of 548675", function () {
    card = new Card(548675);
    expect(card.value).toBe(548675);
})

test("Check card is given value of -6473869", function () {
    card = new Card(-6473869);
    expect(card.value).toBe(-6473869);
})

test("Check card is given value of 13", function () {
    card = new Card(13);
    expect(card.value).toBe(13);
})