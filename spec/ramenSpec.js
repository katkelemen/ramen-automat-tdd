describe("ramen automat", function() {
  var ramen = require('../ramen');

  it("standby state", function() {
    expect((new ramen.RamenAutomat()).coins).toEqual(0);
  });

  it("insert coin", function() {
    let r = new ramen.RamenAutomat();
    expect(r.insertCoin()).toEqual("Your credit: 1");
 });

  it("insert coin", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin()
    expect(r.insertCoin()).toEqual("Your credit: 2");
 });

  it("choose ramen with not enough coins", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    r.select(0);
    expect(r.chooseRamen()).toEqual("Not enough coins");
  });

  it("choose ramen with enough coins", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    r.insertCoin();
    r.select(0);
    expect(r.chooseRamen()).toEqual("Take your ramen");
  });

  it("cancels coin", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    expect(r.cancel()).toEqual("1 coins in tray");
  });

  it("cancels coin", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    r.insertCoin();
    expect(r.cancel()).toEqual("2 coins in tray");
  });

  it("cancels coin when ramen selected but not choosed yet", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    r.insertCoin();
    r.select(0);
    expect(r.cancel()).toEqual("2 coins in tray");
  });

  

});

