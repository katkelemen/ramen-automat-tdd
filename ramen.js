export class RamenAutomat {
  constructor() {
    this.state = "standByForCoin";
  }

  insertCoin() {
    if (this.state == "standByForRamen") {
        return "Take your change!"
    } else {
        this.state = "standByForRamen"
    }
  }

  chooseRamen() {
    if (this.state == "standByForRamen") {
        return "Enjoy your ramen!"
    } else {
        return
    }
  }

  cancel() {
    if (this.sate == "standByForRamen") {
      this.state = "standByForCoin";
    } else {
      return
    }
  }
};

