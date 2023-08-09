import React from 'react'
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav>
        <div className="containerHeader">
          <Link to="Home"><h1>Just'Ice</h1></Link>

          <div className="menu">
            <Link to="Home">Home</Link>
            <Link to="Kugeleis">Kugeleis</Link>
            <Link to="Eisrolls">Eisrolls</Link>
            <Link to="About">Über uns</Link>
            <Link to="Contact">Kontakt</Link>
          </div>

          <div>
            <i id="searchIcon" className="gg-search"></i>
          </div>
          <div>
            <Link to='Cart'><i className="gg-shopping-bag"></i></Link>
          </div>

          <button className="menuButton">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>

  )
}

export default Header
