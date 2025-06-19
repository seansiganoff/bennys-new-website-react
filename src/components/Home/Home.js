
import './Home.css';
import Services from '../Services/Services';
import About from '../About/About';
import ReviewsSection from '../ReviewsSection/ReviewsSection';

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
            <img className="company-logo" src={require("../../images/new-company-logo1.jpg")} alt='Company Logo'/>
            <p>
                
            Auto Body Repair, at your home or office in just a few hours!<br />
            </p>
            <br />
            <br />
        <div className="locations"><b className='theme-color'>SERVING:</b> Dallas, Plano, Richardson, Frisco, Mckinney, Prosper, Coppel, Irving, Arlington, Lewisville, Flower Mound, Grapevine, Southlake.</div>

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
        




            
        </div>
        
        {<About />}
        {<Services />}
        {<ReviewsSection />}
    </div>
    
  )
}

export default Home