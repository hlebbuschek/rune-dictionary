// id. name:
//  num. bedeutung,  
//  num. bedeutung; 
//  num. bedeutung| 
const liste = `
00. Odin:
01. Antwort auf eine Frage|
01. Vergangenheit und Zukunft:
01. Vergangenheit (Ursprung des Themas),
02. Gegenwart (aktuelle Situation),
03. Zukunft (Wohin führt es?)|
02. Fünf-Runen-Kreuz:
02. Positive Einflüsse / Chancen;
04. Vergangenheit,
01. Thema der Situation,
05. Zukunft;
03. Negative Einflüsse / Herausforderungen|
03. Sechs-Runen-Kreuz:
06. Wahrscheinliches Ergebnis / Richtung der Entwicklung;
04. Herausforderungen / Blockaden / Hindernisse,
01. Zentrales Thema oder Hauptenergie,
05. Mögliche Unterstützung oder Ressourcen;
02. Höheres Ziel / geistige Führung oder Bestimmung;
03. Verborgene Einflüsse / unbewusste Faktoren|
04. Entscheidungs-Kreuz:
06. Höheres Ziel oder mögliche Entwicklung;
01. Vergangenheit oder äußere Einflüsse,
05. Der zentrale Punkt der Situation / das Hauptthema oder die Hauptaufgabe,
02. Zukunft oder Potenziale;
03. Gegenwart / die aktuelle Position;
04. Tiefer liegende Ursachen oder verborgene Kräfte|
05. Spiegel:
01. Sichtbar - Vergangenheit - Was gesät wurde / frühere Erfahrungen,
02. Sichtbar - Herausforderungen - Hindernisse / Blockaden oder Prüfungen,
03. Sichtbar - Gegenwart - Aktuelle Situation und innere Reaktion darauf,
04. Sichtbar - Wachstum - Was sich gerade entwickelt / Potenzial,
05. Sichtbar - Zukünftige Chancen - Möglichkeiten oder warnende Zeichen,
06. Sichtbar - Ernte / Ergebnis - Endgültiges Resultat / Konsequenzen;
07. Verborgen - Vergangenheit - Was gesät wurde / frühere Erfahrungen,
08. Verborgen - Herausforderungen - Hindernisse / Blockaden oder Prüfungen,
09. Verborgen - Gegenwart - Aktuelle Situation und innere Reaktion darauf,
10. Verborgen - Wachstum - Was sich gerade entwickelt / Potenzial,
11. Verborgen - Zukünftige Chancen - Möglichkeiten oder warnende Zeichen,
12. Verborgen - Ernte / Ergebnis - Endgültiges Resultat / Konsequenzen|
06. Gepflügtes Feld:
12. Gesamtschicksal oder „die Lehre“ der Legung,
11. Finanzen / materielle Sicherheit,
10. Zukunftsvisionen / Pläne / Hoffnungen,
09. Spiritueller Weg / innere Weisheit,
08. Hindernisse oder Herausforderungen,
07. Persönliche Entwicklung / Selbstverwirklichung;
01. Körperliche Gesundheit / Vitalität,
02. Geistige Gesundheit / innere Balance,
03. Arbeit / Karriere / berufliche Entwicklung,
04. Beziehungen allgemein (Freunde / Kollegen),
05. Familie / familiäre Beziehungen,
06. Liebe / romantische Partnerschaft|
07. Pyramide:
01. ;
02. ,
03. ;
04. ,
05. ;
06. ,
07. 
`;

class Layot {
  constructor(id, name, rows) {
    this.id = id;
    this.name = name.replaceAll(' ', '\n');
    this.lagen = this.getPositions(rows)
  }
  getPositions(rows) {
    const newArray = rows.map(item => {
      const posArray = item.split(',');
      let newPositions = []; 
      posArray.forEach(pos => {
        const num = Number(pos.slice(0, 2));
        const bezeichnung = pos.slice(4);
        const lage = new Lage(num, bezeichnung);
        newPositions.push(lage);
      });
      return newPositions; 
    });
    return newArray; 
  }
}

class Lage {
  constructor(num, bezeichnung) {
    this.num = num;
    this.bezeichnung = bezeichnung
  }
}

export function getLayots() {
  const layotsArray = liste.replaceAll('\n', '').split('|');
  const newArray = layotsArray.map(item => {
    const id = item.slice(0, 2);
    const name = item.slice(3, item.indexOf(':'));
    const rows = item.slice(item.indexOf(':') + 1);
    const rowsArray = rows.split(';');
    const layot = new Layot(id, name, rowsArray);
    return layot;
  });

  return newArray;
}
