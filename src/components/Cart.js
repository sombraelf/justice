import React from 'react'

function Cart() {
  return (
    <main>
      <div className="mainBoxHalf">
        <div className="textBoxHalf">
          <h1>Warenkorb</h1>
        </div>
      </div>

      <div id="div1">
        <center>
          <div className='row'>
            <div className='col-md-12'>
              <table className="warenkorbTabelle" id="t1" border="1">
                <tr id="tr1">
                  <td id="td1">Foto</td>
                  <td>Name</td>
                  <td>Sorte</td>
                  <td>Preis</td>
                  <td id="td5">Löschen</td>
                </tr>
              </table>
            </div>
            <div className='col-md-12 mt-3'>
              <button type="button" className="primaryButtonCart">Zum Checkout</button>
            </div>
          </div>
        </center>
      </div>
    </main>
  )
}

export default Cart