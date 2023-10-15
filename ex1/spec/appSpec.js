import { BerlinClock } from "../src/app.js";

describe("the first minute line", function () {
  let berlinClock = new BerlinClock();

  it("simpleMinuteLine should return Aucune lampe allumée when given 0:00 ", function () {
    let time = "0:00";
    let result = berlinClock.simpleMinuteLine(time);
    expect(result).toBe("Aucune lampe allumée");
  });


  it("simpleMinuteLine should return 1er lampe jaune when given 0:01",function(){
    let time = "0:01";
    let result=berlinClock.simpleMinuteLine(time);
    expect(result).toBe("1er lampe jaune")
  })


});

// allumée ou éteinte
