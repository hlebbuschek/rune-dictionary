const runenTxt = `
Fehu: „Vieh“
h = Wohlbefinden; Wohlstand; Fruchtbarkeit; frische Energie; Zuhause;
u = finanzielle Unsicherheit; Materialismus; Unfruchtbarkeit; Melancholie; Streit; Verlust der Stabilität.
Uruz: „Stier / Bison“
h = Kraft; Gesundheit; Sexualität; Mut; Kühnheit; kreativer Impuls;
u = Wut; Egoismus; Gewalt; Schwäche; Neid; Passivität; fehlender Antrieb; Kraftmissbrauch.
Thurisaz: „Spitze / Spike / Dunkele Magie“
h = Konflikte; Selbstzerstörung; Rachsucht; Neigung zu Intrigen;
u = Energie; Aktivität; Kraft; weiser Umgang mit Kraft.
Ansuz: „Gottheit“
h = Intelligenz; Intuition; künstlerisches Geschick; Lehrfähigkeit; Weisheit; Tendenz, klugen Ratschlägen zu folgen; Fähigkeit, Verbindungen zwischen Menschen und Phänomenen zu finden;
u = Isolation; Inflexibilität; Dummheit; Fehlkommunikation; Missverständnisse; Manipulation.
Raido: „Fahrt / Weg“
h = Bewegung in Richtung Ideal; Harmonie; Entschlossenheit; Mobilität;
u = zyklischer Charakter der Probleme; Kurzsichtigkeit; Passivität; fehlende Richtung; Stagnation; Hindernisse.
Kenaz: „Fackel“
h = Kreativität; Potenzial; Talent; Konzentration; Liebe; Charme;
u = Krankheit; Unsicherheit; Illusionen; Täuschung; Verlust von Kreativität oder Wissen.
Gebo: „Geschenk“
h = Erwerbungen; Gesundheit; Aufgeschlossenheit; gegenseitiges Verständnis; Gaben; Liebe; Kommunikation;
u = Verlust der Harmonie, Neid; unausgeglichene Beziehungen; Verpflichtungen.
Wunjo: „Fröhlichkeit / Glück“
h = Freudiges Ereignis; Glück; Wohlbefinden; Freundschaft; gute Familienbeziehungen; Kraft; Energie;
u = kreative Krise; Depression; Leiden; innere Unzufriedenheit; Illusionen.
Hagalaz: „Hagel / Zerstörung / Naturkatastrophe“
h = Zerstörung; Streit; Feindschaft; Grausamkeit; Katastrophe;
u = Stärke; elementare Kraft.
Nauthiz: „Not“
h = Zwang; Armut; Apathie;
u = Negatives in Positives verwandeln; Einfallsreichtum; Lehren aus Schwierigkeiten ziehen.
Isaz: „Eis“
h = Trägheit; Langsamkeit; Einschränkung; Aggressionen zähmen; Ordnung schaffen; Geduld; Konzentration;
u = -.
Jera: „Ernte / Jahr / Sommer“
h = Belohnung für Mühe; Geburt; Fruchtbarkeit; Zielerreichung; Nutzen; Selbstvertrauen; Zyklen;
u = -.
Eihwaz: „Eibe / Verteidiger“  
h = Treue; Beständigkeit; Ehrlichkeit; Adel; Entschlossenheit; Vitalität; Weisheit;
u  = Angst; Kraftverlust; Stagnation; Unfähigkeit, sich weiterzuentwickeln.
Perth: „Schicksal“
h = Heilung; Schutz; Intuition; tiefe Gefühle; positive Veränderung; Sensibilität; Erreichen einer höheren Ebene;
u = Hindernis; Unwissenheit über das eigene Potenzial.
Algiz: „Sicherheit“
h =  Schutz; Sicherheit; stärke; Intuition; gute Gesundheit; Belastbarkeit;
u = Krankheit; Schaden; Verrat; Naivität; mangelnder Schutz.
Sowilu: „Sonne“
h = Liebe; Wärme; Energie; Korrektur von Negativität; Freundlichkeit; gute Beziehungen zu anderen; Gesundheit; Versöhnung;
u = Überanstrengung.
Teiwaz: „Krieger“
h = Macht; Transformation; Führung; Weisheit; Abenteuer; Liebe; Energie; Selbstdisziplin; Selbstaufopferung; Adel;
u = Apathie; Lügen; schmerzhafte Leidenschaft; Selbstzweifel; Ungerechtigkeit.
Berkana: „Birke“
h = ergebnisorientiert arbeiten; eine Familie gründen; Erfolg; Fähigkeit, Pläne zu machen; Geduld; Wiedergeburt; Fähigkeit, positive Veränderungen herbeizuführen; emotinale Heilun;
u = Ungeduld; Oberflächlichkeit; Blockaden im persönlichen Wachstum.
Ehwas: „Pferd“
h = Reisen; erfolgreiche Einkäufe; Schutz von Eindringlingen; Seelenfrieden; Vertrauen; nützliche Bekanntschaften;
u =  Hindernisse; Verrat; Passivität; Verlust von Kontrolle; Ablehnung positiver Veränderungen.
Mannaz: „Mensch“
h = Intelligenz; Entscheidungsfähigkeit; Weisheit;
u = Selbstvertrauen; Intrigen; Verleumdung; Entfremdung;Rechtsstreitigkeiten; übersteigertes Ego; Isolation.
Laguz: „Wasser / See“
h = Erneuerung; Einsicht; Reinigung; Versöhnung; Liebe; Erfüllung von Wünschen;
u = Oberflächlichkeit; mangelnde Bereitschaft; sich für das Erreichen gesetzter Ziele anzustrengen; Stagnation; Unlogik; Ängste; Emotionale Blockaden.
Ingwaz: „Fruchtbarkeit“
h = Fruchtbarkeit; Unterstützung aus dem Universum; Energie; Vitalität; positive Veränderungen; Wohlbefinden; gute Beziehungen zur Familie; Wiederherstellung der Kraft; innere Reife; Potenzial;
u = -.
Dagaz: „Tag“
h = Erleuchtung; Veränderung zum Besseren; gesteigertes Wohlbefinden; besseres Verständnis; plötzliche Veränderungen; Erleuchtung; Transformation;
u = -.
Othila: „Erbe“
h = Talent; Verbindung zwischen Generationen; Erbe; ewige Werte;
u = Streit; Betrug; Verluste; ungültige Bedingungen (Geschäfte oder Verträge); Unfähigkeit, loszulassen `
class Runen {
  constructor(name, bedeutung, haupt, umgekehrte) {
    this.name = name;
    this.bedeutung = bedeutung;
    this.haupt = haupt;
    this.umgekehrte = umgekehrte
  }
}
export function getRunen() {
  let runenArrayString = runenTxt.replaceAll('\n', '').split('.');

  const newArray = runenArrayString.map((item) => {
    const name = item.slice(0, item.indexOf(':'));
    const bedeutung = item.slice(item.indexOf('„') + 1, item.indexOf('“'));
    const haupt = item.slice(item.indexOf('h = ') + 4, item.indexOf('u = ') - 1);
    const hauptArray = haupt.split('; ');
    const umgekehrte = item.slice(item.indexOf('u = ') + 4);
    const umgekehrteArray = umgekehrte.split('; ');
    const rune = new Runen(name, bedeutung, hauptArray, umgekehrteArray);
    return rune;
  });
  return newArray;
}
