describe("ramen automat", function() {
  var ramen = require('../ramen');

  it("standby state", function() {
    expect((new ramen.RamenAutomat()).state).toEqual("standByForCoin");
  });

  it("insert coin", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin()
    expect(r.insertCoin()).toEqual("Take your change!");
  });

  it("choose ramen", function() {
    let r = new ramen.RamenAutomat();
    r.insertCoin()
    expect(r.chooseRamen()).toEqual("Enjoy your ramen!");
  });

});

