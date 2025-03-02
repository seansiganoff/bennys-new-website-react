import React from 'react'
import './Home.css';
import Services from '../Services/Services';
import About from '../About/About';
import Guarantee from '../Guarantee/Guarantee';

const Home = () => {
  return (
    <div className='home-container'>
        <div className='logo-div'>
            <img className="company-logo" src={require("../../images/bennys-new-company-logo.png")} alt='Company Logo'/>
            <p>
                <br />
            Mobile Dent And Scratch Repair, AT YOUR DOORSTEP!<br />
            </p>
            <div className="locations">Serving: Plano, Frisco, Lewisville, Allen, Addison, The Colony, Carrollton and Mckinney.</div>
            <div className='reviews-div'>
              <button>
                <p>CLICK HERE<br /></p>
                <a href='https://g.co/kgs/cWBZQGr'>CHECK US OUT ON GOOGLE!</a>
              </button>
            </div>
        </div>
        {<About />}
        {<Services />}
        {<Guarantee />}
    </div>
  )
}

export default Home