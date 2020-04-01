function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    this.pickedCards = [];
    this.shuffleCards(this.cards);
  }

  shuffleCards() {
    if (this.cards === undefined)
      return undefined;

    let old = JSON.stringify(this.cards);
    old = JSON.parse(old);

    console.log(old);

    let shuffled = [];
    while (old.length > 0) {
      let index = rand(old.length);
      shuffled.push(old[index]);
      old.splice(index, 1);
    }

    console.log(this.cards);
    console.log(shuffled);
    return shuffled;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
    }

    return card1 === card2;
  }

  isFinished() {
    return this.pairsGuessed === (this.cards.length / 2);
  }
}