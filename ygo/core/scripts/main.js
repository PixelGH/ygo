var cardsJson;
requirejs(['../data/cards.json'], (c) => {
    cardsJson = c;
});
const cards = JSON.parse(cardsJson);

document.getElementById('container').innerHTML = cards