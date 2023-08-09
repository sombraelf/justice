import React from 'react'

function Contact() {
  return (
    <div className='Contact'>

      <div className="mainBoxHalf">
        <div className="textBoxHalf">
          <h1>Kontakt</h1>
        </div>
      </div>

      <div className='container'>
        <form className="row g-3">
          <div className="col-md-12">
            <h1 className='darkFont'>Kontaktformular</h1>
            <p className='darkFont'>Wir stehen dir gerne bei Fragen oder Problemen zur Seite. Du erreichst uns über dieses Kontaktformular.</p>
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">Vorname</label>
            <input className="form-control" type="text" title="Nur Buchstaben, maximal 40 Zeichen" id="vorname" name="vorname" maxlength="40" minlength="2" pattern="[a-zA-Z'-'\s]*" />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">Nachname</label>
            <input className="form-control" type="text" title="Nur Buchstaben, maximal 40 Zeichen" id="nachname" name="nachname" maxlength="40" minlength="2" pattern="[a-zA-Z'-'\s]*" />
          </div>
          <div className="col-md-6">
            <label for="inputAddress" className="form-label">E-Mail*</label>
            <input className="form-control" type="email" title="Nur gültiges E-Mail-Format, maximal 40 Zeichen" id="email" name="email" placeholder="Max.Mustermann@stud.hs-ruhrwest.de" required="required" maxlength="40" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
          </div>
          <div className="col-md-6">
            <label for="inputAddress2" className="form-label">Kundennummer</label>
            <input className="form-control" type="text" title="8-stellige Kundennummer, Premiumkundennummern enden mit p" id="kundennr" name="kundennr" placeholder="1234567p" maxlength="8" minlength="8" pattern="[0-9]+p" />
          </div>
          <div className="col-md-6">
            <label for="inputCity" className="form-label">Betreff*</label>
            <input className="form-control" type="text" title="Maximal 40 Zeichen" id="betreff" name="betreff" required="required" maxlength="40" />
          </div>
          <div className="col-md-6">
            <label for="inputState" className="form-label">Kategorie</label>
            <select id="inputState" className="form-select">
              <option value="allgemein">
                Allgemeine Frage
              </option>

              <option value="zahlung">
                Zahlung &amp; Lieferung
              </option>

              <option value="sonstiges">
                Sonstiges
              </option>
            </select>
          </div>
          <div className='col-md-12'>
            <textarea className="form-control" id="beschreibung" title="Maximal 400 Zeichen" name="beschreibung" placeholder="Beschreibe dein Anliegen" required="required" maxlength="400" rows="15" cols="40"></textarea>

          </div>

          <div className="col-md-12">
            <button type="submit" className="primaryButton">Zurücksetzen</button>
          </div>
          <div className="col-md-12">
            <button type="submit" className="primaryButton">Abschicken</button>
          </div>
        </form>
      </div>


    </div>
  )
}

export default Contact
