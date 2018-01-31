describe("roman numerals", function() {
  var toRoman = require('../toRoman');

  it("Numbers under 10 should be fine", function() {
    expect(toRoman(1)).toEqual('I');
    expect(toRoman(2)).toEqual('II');
    expect(toRoman(3)).toEqual('III');
    expect(toRoman(4)).toEqual('IV');
    expect(toRoman(5)).toEqual('V');
    expect(toRoman(6)).toEqual('VI');
    expect(toRoman(7)).toEqual('VII');
    expect(toRoman(8)).toEqual('VIII');
    expect(toRoman(9)).toEqual('IX');

  });
  it("Numbers 10 - 15 should be fine", function() {
    expect(toRoman(10)).toEqual('X');
    expect(toRoman(11)).toEqual('XI');
    expect(toRoman(12)).toEqual('XII');
    expect(toRoman(13)).toEqual('XIII');
    expect(toRoman(14)).toEqual('XIV');
  });

});