export class RamenAutomat {
  constructor() {
    this.state = "standByForCoin";
  }

  insertCoin() {
    if (this.state == "standByForRamen") {
        return "Take your change"
    } else {
        this.state = "standByForRamen"
    }
  }

  chooseRamen() {
    if (this.state == "standByForRamen") {
        this.state = "standByForCoin";
        return "Take your ramen";
    } else {
        return
    }
  }

  cancel() {
    if (this.state == "standByForRamen") {
      this.state = "standByForCoin";
      return "Coins in tray";
    } else {
      return
    }
  }
};

