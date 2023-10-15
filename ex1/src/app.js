export class BerlinClock {
  simpleMinuteLine(time) {
    if (time === "0:00") return "Aucune lampe allumée";
    if(time==="0:01") return "1er lampe jaune";
  }
}
