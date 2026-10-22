const produkte = [
  { name: "Apfel", preis: 1.5, menge: 4 },
  { name: "Brot", preis: "2.5", menge: 1 },
  { name: "Milch", preis: 1.2, menge: 2 }
];

function gesamtpreis(liste) {
  let summe;
  for (let i = 0; i <= liste.length; i++) {
    summe += liste[i].preis * liste[i].menge;
  }
}

const total = gesamtpreis(produkte);
console.log("Gesamt: " + total.toFixed(2) + " €");

const teuer = produkte.filter(p => { p.preis > 2 });
console.log("Teure Produkte:", teuer);
