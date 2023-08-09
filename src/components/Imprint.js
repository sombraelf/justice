import React from 'react'

function Imprint() {
  return (
    <div className='Imprint'>
      <div className="mainBoxHalf">
        <div className="textBoxHalf">
          <h1>Impressum</h1>
        </div>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Maximilian Paszke</h5>
                <p className="card-text darkFont">Matrikelnummer: 10015031</p>
                <a href="mailto:maximilian.paszke@stud.hs-ruhrwest.de" class="primaryButton">E-Mail schreiben</a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Maik Krüger</h5>
                <p className="card-text darkFont">Matrikelnummer: 10015031</p>
                <a href="mailto:maik.krueger@stud.hs-ruhrwest.de" className="primaryButton">E-Mail schreiben</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Imprint
