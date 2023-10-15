export class BerlinClock {
  simpleMinuteLine(time) {
    let minutes = parseInt(time.split(":")[1]);

    if (minutes % 10 === 0 || minutes % 10 === 5) return "Aucune lampe allumée";
    if (minutes % 10 === 1 || minutes % 10 === 6) return "1er lampe jaune";
    if (minutes % 10 === 2 || minutes % 10 === 7)
      return "1er lampe jaune, 2ème lampe jaune";
    if (minutes % 10 === 3 || minutes % 10 === 8)
      return "1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune";
    if (minutes % 10 === 4 || minutes % 10 === 9)
      return "1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune, 4ème lampe jaune";
  }

  blocOf5MinuteLine(time) {
    let minutes = parseInt(time.split(":")[1]);

    if (minutes < 5) return "Aucune lampe allumée";
    if (minutes >= 5 && minutes < 10) return "1er lampe jaune";
    if (minutes >= 10 && minutes < 15)
      return "1er lampe jaune, 2ème lampe jaune";
    if (minutes >= 15 && minutes < 20)
      return "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge";
    if (minutes >= 20 && minutes < 25)
      return "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune";
    if (minutes >= 25 && minutes < 30)
      return "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune";
    if (minutes >= 30 && minutes < 35)
      return "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge";
    if (minutes >= 35 && minutes < 40)
      return "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge, 7ème lampe jaune";
    if (minutes >= 40 && minutes < 45)
      return "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge, 7ème lampe jaune, 8ème lampe jaune";
    if (minutes >= 45 && minutes < 50)
      return "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge, 7ème lampe jaune, 8ème lampe jaune, 9ème lampe rouge";
    if (minutes >= 50 && minutes < 55)
      return "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge, 7ème lampe jaune, 8ème lampe jaune, 9ème lampe rouge, 10ème lampe jaune";
    if (minutes >= 55 && minutes < 60)
      return "1er lampe jaune, 2ème lampe jaune, 3ème lampe rouge, 4ème lampe jaune, 5ème lampe jaune, 6ème lampe rouge, 7ème lampe jaune, 8ème lampe jaune, 9ème lampe rouge, 10ème lampe jaune, 11ème lampe jaune";
  }

  simpleHouresLine(time) {
    let houres = parseInt(time.split(":")[0]);
    if (houres % 10 === 1 || houres % 10 === 6) return "1er lampe rouge";
  }
}
