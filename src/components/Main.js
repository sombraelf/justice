import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import Produkt from './Produkt'
import About from './About'
import Contact from './Contact'
import Imprint from './Imprint'
import Cart from './Cart'


function Main() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Kugeleis' element={
        <Produkt title='Kugeleis'
          beschreibung='Leckeres Eis aus hochwertigen Zutaten in verschiedenen Sorten. Wir verwenden ausschließlich Bio-Rohstoffe von lokalen Erzeugern, um dir ein unvergleichliches Eiserlebnis zu bieten.'
          inhaltsstoffe='Wasser, Milch, Zucker, Vanilleschoten'
          preis='1,50€'
          hersteller='Just Ice UG - im Angebot seit dem 1.06.2022'
          bild='images/conehorizontal.jpg'
        />
      } />
      <Route path='/Eisrolls' element={
        <Produkt title='Eisrolls'
          beschreibung='Leckere Eisrolls aus hochwertigen Zutaten in verschiedenen Sorten. Wir verwenden ausschließlich Bio-Rohstoffe von lokalen Erzeugern, um dir ein unvergleichliches Eiserlebnis zu bieten.'
          inhaltsstoffe='Wasser, Milch, Zucker, Vanilleschoten'
          preis='2,50€'
          hersteller='Just Ice UG - im Angebot seit dem 20.06.2022'
          bild='images/icerolls.jpg'
        />
      } />
      <Route path='/About' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Imprint' element={<Imprint />} />
      <Route path='/Cart' element={<Cart />} />
    </Routes>
  )
}

export default Main
