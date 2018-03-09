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

  it("select ramen with not enough coins", function() {
    let r = new ramen.RamenAutomat();
    expect(r.select(0)).toEqual("Not enough coins");
  });

  it("choose ramen with exactly enough coins", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    r.insertCoin();
    r.select(0);
    expect(r.chooseRamen()).toEqual("Take your ramen");
  });

  it("choose ramen with more than enough coins", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    r.insertCoin();
    r.insertCoin();
    r.select(0);
    expect(r.chooseRamen()).toEqual("Take your ramen and don't forget your change!");
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

  it("cancel changed coins in machine to 0", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    r.insertCoin();
    r.select(0);
    r.cancel();
    expect(r.coins).toEqual(0);
  });

  it("coins used when ramen chosen", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    r.insertCoin();
    r.select(0);
    r.chooseRamen();
    expect(r.coins).toEqual(0);
  });

  it("after ramen in tray, leftover coins returned to coin space", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin();
    r.insertCoin();
    r.insertCoin();
    r.select(0);
    r.chooseRamen();
    expect(r.coins).toEqual(0);
  });

  

});

