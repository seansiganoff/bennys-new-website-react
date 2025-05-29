
import './Home.css';
import Services from '../Services/Services';
import About from '../About/About';

const Home = () => {
  return (
    <div className='home-container'>
      <div className="vehicle-icons">
        <div className="vehicle-icons-inner-div-top" >
                <img src={require('../../images/tesla.png')} alt='Tesla logo'/>
                <img src={require('../../images/mercedes-icon.png')} alt='Mercedes logo'/>
                <img src={require('../../images/audi-icon.gif')} alt='Audi logo'/>
                <img src={require('../../images/porsche-icon.png')} alt='Porsche logo'/>
                <img src={require('../../images/bmw-icon.png')} alt='BMW logo'/>
                <img src={require('../../images/caddilic-icon.jpg')} alt='Cadillac logo'/>
            </div>
        </div>
        <div className='logo-div'>
            <img className="company-logo" src={require("../../images/bennys-new-company-logo33.png")} alt='Company Logo'/>
            <p>
                <br />
            <b>Mobile Dent And Scratch Repair</b>, at your home or office in just a few hours!<br />
            </p>
        <div className="locations"><b className='theme-color'>SERVING:</b> Plano, Mckinney, Frisco, Allen,  Addison, The Colony, Fairview and Carrollton</div>

            <div className="vehicle-icons">
              <div className="vehicle-icons-inner-div-bottom" >
                  <img src={require('../../images/toyota-icon.jpg')} alt='Toyota logo'/>
                  <img src={require('../../images/lexus-icon.png')} alt='Lexus logo'/>
                  <img src={require('../../images/jaguar-icon.jpg')} alt='Jaquar logo'/>
                  <img src={require('../../images/chevy-icon.jpg')} alt='Infiniti logo'/>
                  <img src={require('../../images/honda-icon.png')} alt='Honda logo'/>
                  <img src={require('../../images/ford-icon.png')} alt='Lamborghini logo'/>
              </div>
            
        </div>
        <br />
        




            <div className='reviews-div'>
              <button>
                <a href='https://g.co/kgs/cWBZQGr'>CHECK OUT OUR GOOGLE REVIEWS</a>
                <br /><p>CLICK HERE</p>
              </button>
            </div>
        </div>
        
        {<About />}
        {<Services />}
        
    </div>
    
  )
}

export default Home