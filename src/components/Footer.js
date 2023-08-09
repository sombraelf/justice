import React from 'react'
import { Link } from "react-router-dom"

function Footer() {
  return (


    <footer class="py-3 my-4 footerBox">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <Link to='/Home'><li className="nav-item"><a className="nav-link px-2 text-muted">Home</a></li></Link>
        <Link to='/Kugeleis'><li className="nav-item"><a className="nav-link px-2 text-muted">Kugeleis</a></li></Link>
        <Link to='/Eisrolls'><li className="nav-item"><a className="nav-link px-2 text-muted">Eisrolls</a></li></Link>
        <Link to='/About'><li className="nav-item"><a className="nav-link px-2 text-muted">Über uns</a></li></Link>
        <Link to='/Contact'><li className='nav-item'><a className="nav-link px-2 text-muted">Kontakt</a></li></Link>
        <Link to='/Imprint'><li className="nav-item"><a className="nav-link px-2 text-muted">Impressum</a></li></Link>
      </ul>

      <p className="text-center text-muted">&copy; 2022 - Maximilian Paszke, Maik Krüger</p>
      <a href="#" className="fa fa-instagram" id='socialIcon'></a>
      <a href="#" className="fa fa-pinterest" id='socialIcon'></a>
      <a href="#" className="fa fa-facebook" id='socialIcon'></a>
    </footer>

  )
}

export default Footer

