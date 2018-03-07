export class RamenAutomat {
  constructor() {
    this.coins = 0;
    this.ramens = {0: 2};
    this.selectedPrice = null;
  }

  insertCoin() {
    this.coins += 1;
    return "Your credit: " + this.coins;
  }

  select(n) {
    if (this.ramens[n] >= this.coins) {
      this.selectedPrice = this.ramens[n];
      return n
    } else {
      return "Not enough coins"
    }
  }

  chooseRamen() {
    console.log("inserted coins: " + this.coins + ", price: " + this.selectedPrice);
    if (this.selectedPrice) {
      if (this.coins >= this.selectedPrice) {
          return "Take your ramen";
      } else {
          return "Not enough coins"
      }
    }
  }

  cancel() {
    return this.coins + " coins in tray"
  }
};

