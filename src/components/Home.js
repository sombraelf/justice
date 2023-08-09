import React from 'react'
import { Link } from "react-router-dom"

function Home() {
  return (
    <div className='Home'>
      <main>
        <div className="mainBox">
          <div className="textBox">
            <h1>Lust auf Eis?</h1>
            <p>Wir liefern dir leckeres Eis in Minuten.</p>
            <Link to='/About'><button >Erfahre mehr</button></Link>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md">
              <img src="images/conehorizontal.jpg" alt="..." class="img-thumbnail" />
            </div>
            <div className="col-md">
              <h1 className='darkFont'>Kugeleis</h1>
              <p className='darkFont'>Leckeres Eis aus hochwertigen Zutaten in verschiedenen Sorten. Wir verwenden ausschließlich Bio-Rohstoffe von lokalen Erzeugern, um dir ein unvergleichliches Eiserlebnis zu bieten.</p>
              <Link to='/Kugeleis'><button className="primaryButton">Zum Produkt</button></Link>
            </div>
            <div className="w-100 p-3"></div>
            <div className="col-md">
              <h1 className='darkFont'>Eisrolls</h1>
              <p className='darkFont'>Leckere Eisrolls aus hochwertigen Zutaten in verschiedenen Sorten. Wir verwenden ausschließlich Bio-Rohstoffe von lokalen Erzeugern, um dir ein unvergleichliches Eiserlebnis zu bieten.</p>
              <Link to='/Eisrolls'><button className="primaryButton">Zum Produkt</button></Link>
            </div>
            <div className="col-md">
              <img src="images/icerolls.jpg" alt="..." className="img-thumbnail" />
            </div>
          </div>
        </div>





        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/bg8.jpg" class="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Vegan</h5>
                <p>Finde was zu dir passt. Wir haben neben dem klassischen Eissorten auf Milchbasis auch eine große vegane Auswahl.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/bg6.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Nachhaltig</h5>
                <p>Wir arbeiten mit Zutaten aus der lokalen Umgebung und achten auf die faire und restlose Verarbeitung.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="images/bg7.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Schnell</h5>
                <p className='lightFont'>Unser Eis ist blitz schnell bei dir und bleibt dabei so frisch und kühl wie ein baby Eisbär. </p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <article className="container">
          <div className="row">
            <div className="col">
              <h1 className='darkFont'>Vegan</h1>
              <p className='darkFont'>Wir bieten vegane und laktosefreie Eissorten.</p>
            </div>
            <div className="col">
              <h1 className='darkFont'>Nachhaltig</h1>
              <p className='darkFont'>Wir verwenden nachhaltige Zutaten.</p>
            </div>
            <div className="col">
              <h1 className='darkFont'>Schnell</h1>
              <p className='darkFont'>Wir liefern schnell und mit Ökostrom.</p>
            </div>
          </div>
        </article>
      </main>

    </div>

  )
}

export default Home
