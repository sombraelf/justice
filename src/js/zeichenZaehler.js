export default function zeichenZaehler() {
    /* zaehlerNummer ist gleich Textlänge des Elements reviewText */
    let zaehlerNummer = document.getElementById('reviewText').value.length;
    /* Inhalt des Span-Elements wird überschrieben */
    document.getElementById("zeichenCounter").innerHTML = zaehlerNummer + '/800';
}

