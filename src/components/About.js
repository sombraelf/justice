import React from 'react'

function About() {
  return (
    <div className='About'>

      <div className="mainBoxHalf">
        <div className="textBoxHalf">
          <h1>Über uns</h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md">
            <img src="images/kugeleis.jpg" alt="..." className="img-thumbnail" />
          </div>
          <div className="col-md mt-3">
            <h1 className='darkFont'>Wir sind nachhaltig.</h1>
            <p className='darkFont'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
          </div>
          <div className="w-100 p-3"></div>
          <div className="col-md">
            <img src="images/anothercone.jpg" alt="..." className="img-thumbnail" />
          </div>
          <div className="col-md mt-3">
            <h1 className='darkFont'>Wir verwenden hochwertige Zutaten.</h1>
            <p className='darkFont'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default About
