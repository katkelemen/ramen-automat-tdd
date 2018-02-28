describe("ramen automat", function() {
  var ramen = require('../ramen');

  it("standby state", function() {
    expect((new ramen.RamenAutomat()).state).toEqual("standByForCoin");
  });

  it("insert coin", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    r.insertCoin();
    expect(r.state).toEqual("standByForRamen");
  });

  it("choose ramen", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin()
    r.chooseRamen()
    expect(r.state).toEqual("standByForCoin");
  });

  it("cancels coin", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    r.cancel();
    expect(r.state).toEqual("standByForCoin");
  });

  it("cancels coin", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    expect(r.cancel()).toEqual("Coins in tray");
  });

  

});

