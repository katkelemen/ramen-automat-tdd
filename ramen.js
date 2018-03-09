export class RamenAutomat {
  constructor() {
    this.coins = 0;
    this.ramens = {
      0: 2,
      1: 3,
      2: 4,
      3: 5
    };
    this.selectedPrice = null;
  }

  insertCoin() {
    this.coins += 1;
    return "Your credit: " + this.coins;
  }

  select(n) {
    if (this.ramens[n] <= this.coins) {
      this.selectedPrice = this.ramens[n];
      return ["You have selected ramen " + n, this.ramens[n]]
    } else {
      return ["Not enough coins", this.ramens[n]];
    }
  }

  chooseRamen() {
      if (this.selectedPrice) {
        if (this.coins == this.selectedPrice) {
          this.coins = 0;
          return "Take your ramen";
        } if (this.coins > this.selectedPrice) {
          this.coins = 0;
          return "Take your ramen and don't forget your change!";
        }
    }
  }

  cancel() {
    const coinsIn = this.coins
    this.coins = 0;
    return coinsIn + " coins in tray"
  }
};

