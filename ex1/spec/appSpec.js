import { BerlinClock } from "../src/app.js";

describe("the first minute line", function () {
  let berlinClock = new BerlinClock();

  it("simpleMinuteLine should return Aucune lampe allumée when given 0:00 ", function () {
    let time = "0:00";
    let result = berlinClock.simpleMinuteLine(time);
    expect(result).toBe("Aucune lampe allumée");
  });

  it("simpleMinuteLine should return 1er lampe jaune when given 0:01", function () {
    let time = "0:01";
    let result = berlinClock.simpleMinuteLine(time);
    expect(result).toBe("1er lampe jaune");
  });

  it("simpleMinuteLine should return 1er lampe jaune, 2ème lampe jaune when given 0:02", function () {
    let time = "0:02";
    let result = berlinClock.simpleMinuteLine(time);
    expect(result).toBe("1er lampe jaune, 2ème lampe jaune");
  });

  it("simpleMinuteLine should return 1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune when given 0:03", function () {
    let time = "0:03";
    let result = berlinClock.simpleMinuteLine(time);
    expect(result).toBe("1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune");
  });

  it("simpleMinuteLine should return 1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune, 4ème lampe jaune jaune when given 0:04", function () {
    let time = "0:04";
    let result = berlinClock.simpleMinuteLine(time);
    expect(result).toBe(
      "1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune, 4ème lampe jaune"
    );
  });

  it("simpleMinuteLine should return Aucune lampe allumée when given 0:25", function () {
    let time = "0:25";
    let result = berlinClock.simpleMinuteLine(time);
    expect(result).toBe("Aucune lampe allumée");
  });
});

describe("the seconde minute line", function () {
  let berlinClock = new BerlinClock();
  it("blocOf5MinuteLine should return Aucune lampe allumée when given 0:00 ", function () {
    let time = "0:00";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe("Aucune lampe allumée");
  });

  it("blocOf5MinuteLine should return 1er lampe jaune allumée when given 0:05 ", function () {
    let time = "0:05";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe("1er lampe jaune");
  });

  it("blocOf5MinuteLine should return 1er lampe jaune allumée when given 0:10 ", function () {
    let time = "0:10";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe("1er lampe jaune, 2ème lampe jaune");
  });

  it("blocOf5MinuteLine should return 1er lampe jaune allumée when given 0:15 ", function () {
    let time = "0:15";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe("1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge");
  });

  it("blocOf5MinuteLine should return 1er lampe jaune allumée when given 0:20 ", function () {
    let time = "0:20";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe(
      "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune"
    );
  });
  it("blocOf5MinuteLine should return 1er lampe jaune allumée when given 0:25 ", function () {
    let time = "0:25";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe(
      "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune"
    );
  });

  it("blocOf5MinuteLine should return 1er lampe jaune allumée when given 0:35 ", function () {
    let time = "0:30";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe(
      "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge"
    );
  });
  it("blocOf5MinuteLine should return 1er lampe jaune allumée when given 0:35 ", function () {
    let time = "0:35";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe(
      "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge, 7ème lampe jaune"
    );
  });
  it("blocOf5MinuteLine should return 1er lampe jaune allumée when given 0:40 ", function () {
    let time = "0:40";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe(
      "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge, 7ème lampe jaune, 8ème lampe jaune"
    );
  });
  it("blocOf5MinuteLine should return 1er lampe jaune allumée when given 0:45 ", function () {
    let time = "0:45";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe(
      "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge, 7ème lampe jaune, 8ème lampe jaune, 9ème lampe rouge"
    );
  });
  it("blocOf5MinuteLine should return 1er lampe jaune allumée when given 0:5£0 ", function () {
    let time = "0:50";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe(
      "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge, 7ème lampe jaune, 8ème lampe jaune, 9ème lampe rouge, 10ème lampe jaune"
    );
  });
  it("blocOf5MinuteLine should return 1er lampe jaune allumée when given 0:55 ", function () {
    let time = "0:55";
    let result = berlinClock.blocOf5MinuteLine(time);
    expect(result).toBe(
      "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge, 7ème lampe jaune, 8ème lampe jaune, 9ème lampe rouge, 10ème lampe jaune, 11ème lampe jaune"
    );
  });

  it("blocOf5MinuteLine should return 1er lampe jaune, 2ème lampe jaune 1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune when given 0:13", function () {
    let time = "0:13";
    let result =
      berlinClock.blocOf5MinuteLine(time) +
      "\n" +
      berlinClock.simpleMinuteLine(time);
    expect(result).toBe(
      "1er lampe jaune, 2ème lampe jaune" +
        "\n" +
        "1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune"
    );
  });
});

describe("the first minute line", function () {
  let berlinClock = new BerlinClock();

  it("simpleHouresLine should return 1er lampe rouge when given 01:00", function () {
    let time = "01:00";
    let result = berlinClock.simpleHouresLine(time);
    expect(result).toBe("1er lampe rouge");
  });
});
// allumée ou éteinte
