import React from 'react'
import CustomerReviews from './CustomerReviews';


function Produkt(props) {
  console.log(props)
  return (
    <><div className="mainBoxHalf">
      <div className="textBoxHalf">
        <h1>{props.title}</h1>
      </div>
    </div>

      <div className='container'>
        <div className="row">
          <div className="col-md-6">
            <img className="img-thumbnail" src={props.bild} alt='Produktbild' />
          </div>
          <div className="col-md-6">
            <h1 className='darkFont m-3'>{props.title}</h1>
            <p className='darkFont'>{props.beschreibung}</p>
            <p className='darkFont'>Wähle deine Eissorte</p>
            <select className="selectSorte">
              <option value="vanille">Vanille</option>
              <option value="schokolade">Schokolade</option>
              <option value="zitrone">Zitrone</option>
            </select>
            <h1 className='darkFont m-3'>{props.preis}</h1>
            <button className="primaryButton" id="primaryTwoButton">In den Warenkorb</button>
          </div>

          <div className='col-md-6'>
            <h1 className='darkFont mt-3'>Weitere Informationen</h1>
            <p className='darkFont'>{props.inhaltsstoffe}</p>
            <p className='darkFont'>{props.hersteller}</p>
          </div>
          <div className='col-md-6 p-3'>
            <a href="#" className="fa fa-clock-o mt-3" id='trustIcon'> Schnelle Lieferung</a>
            <br></br>
            <a href="#" className="fa fa-leaf m-3" id='trustIcon'> Faire Zutaten</a>
            <br></br>
            <a href="#" className="fa fa-credit-card" id='trustIcon'> Sichere Zahlung</a>
          </div>







        </div>
      </div>


      <div>
        <CustomerReviews />
      </div></>

  );

}


export default Produkt
