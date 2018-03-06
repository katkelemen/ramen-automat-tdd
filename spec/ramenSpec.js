describe("ramen automat", function() {
  var ramen = require('../ramen');

  it("standby state", function() {
    expect((new ramen.RamenAutomat()).state).toEqual("standByForCoin");
  });

  it("insert coin", function() {
    let r = new ramen.RamenAutomat();
    expect(r.insertCoin()).toEqual(undefined);
 });

  it("choose ramen", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin()
    expect(r.chooseRamen()).toEqual("Take your ramen");
  });

  it("cancels coin", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    expect(r.cancel()).toEqual("Coins in tray");
  });

  

});

