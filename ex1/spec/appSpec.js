import { BerlinClock } from "../src/app.js";

describe("the first minute line", function () {
  let berlinClock = new BerlinClock();

  it("simpleMinuteLine should return Aucune lampe allumée when given 0:00 ", function () {
    let time = "0:00";
    let result = berlinClock.simpleMinuteLine(time);
    expect(result).toBe("Aucune lampe allumée");
  });

});

// allumée ou éteinte
