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

  it("simpleMinuteLine should return 1er lampe jaune, 2ème lampe jaune when given 0:02",function(){
    let time = "0:02";
    let result=berlinClock.simpleMinuteLine(time);
    expect(result).toBe("1er lampe jaune, 2ème lampe jaune")
  })


  it("simpleMinuteLine should return 1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune when given 0:03",function(){
    let time = "0:03";
    let result=berlinClock.simpleMinuteLine(time);
    expect(result).toBe("1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune")
  })

  it("simpleMinuteLine should return 1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune, 4ème lampe jaune jaune when given 0:04",function(){
    let time = "0:04";
    let result=berlinClock.simpleMinuteLine(time);
    expect(result).toBe("1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune, 4ème lampe jaune")
  })




});



describe("the seconde minute line", function () {
  let berlinClock = new BerlinClock();


});

// allumée ou éteinte
