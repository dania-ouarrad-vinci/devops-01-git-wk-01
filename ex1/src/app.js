export class BerlinClock {
  simpleMinuteLine(time) {
    
    if (time === "0:00") return "Aucune lampe allumée";
    if (time === "0:01") return "1er lampe jaune";
    if (time === "0:02") return "1er lampe jaune, 2ème lampe jaune";
    if (time === "0:03")return "1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune";
    if (time === "0:04")return "1er lampe jaune, 2ème lampe jaune, 3ème lampe jaune, 4ème lampe jaune";
  }



}
