function zumWarenkorbHinzufuegen(produkt) {
  // Hole das Warenkorb-Array aus dem localStorage über den Schlüssel 'warenkorb'
  let warenkorb = JSON.parse(localStorage.getItem('warenkorb'));

  // Wenn der Warenkorb bereits Produkte enthält ...
  if (warenkorb) {
    // Produkt zum Warenkorb hinzufügen
    warenkorb.push(produkt)

    // Das aktualisierte Warenkorb-Array in localStorage speichern
    localStorage.setItem('warenkorb', JSON.stringify(warenkorb));

  } else {
    // Ansonsten, wenn der Warenkorb noch leer ist ...

    // Produkt in ein neues Array einfügen und das neue Warenkorb-Array
    // in localStorage unter dem Schlüssel 'warenkorb' speichern
    localStorage.setItem('warenkorb', JSON.stringify([produkt]));
  }
}
