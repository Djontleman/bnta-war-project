const Card = require("../src/card.js");

test("Check card is given value of 1", function () {
    card = Card(1);
    expect(card.value).toBe(1);
})

test("Check card is given value of 548675", function () {
    card = Card(548675);
    expect(card.value).toBe(548675);
})

test("Check card is given value of -6473869", function () {
    card = Card(-6473869);
    expect(card.value).toBe(-6473869);
})

test("Check card is given value of 13", function () {
    card = Card(13);
    expect(card.value).toBe(13);
})