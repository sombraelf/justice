import React from 'react'
import zeichenZaehler from '../js/zeichenZaehler'
import Rating from './Rating'



function CustomerReviews() {
  return (

    <form className="reviewBox">
      <div className='row'>
        <div className='col-md-12'>
          <h1 className="darkFont">Kundenrezensionen</h1>
          <Rating />
          <p className='darkFont'>Teile deine Erfahrung mit anderen und schreibe eine Produktbewertung.</p>
        </div>
        <div className="col-md-12 form-group">

          <span id="zeichenCounter">0/800</span>
          <textarea onChange={zeichenZaehler} id="reviewText" name="kommentar" placeholder="Schreibe einen Kommentar"
            maxlength="800" rows="20" cols="50"></textarea>

        </div>

        <div className="col-md-12 form-group">
          <input type="submit" className="primaryButton" name="speichern" value="Speichern" />
        </div>
      </div>
    </form>

  )
}

export default CustomerReviews
