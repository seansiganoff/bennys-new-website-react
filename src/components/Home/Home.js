
import './Home.css';
import Services from '../Services/Services';
import About from '../About/About';
import ReviewsSection from '../ReviewsSection/ReviewsSection';

const Home = () => {
  return (
    <div className='home-container'>
        <img className='home-background-audi' src={require('../../images/audi.jpg')}  alt='Audi background' />
          <div className='home-text-top-left'>
              <img className='cvr-logo' src={require('../../images/new-company-logo7.png')} alt='company logo'/><br /><br />
            <p className='home-p'>DENTS - SCRATCHES - RIMS - BUMPER REPAIR</p><br />
            
          </div>
        
        {<About />}
        {<Services />}
        {<ReviewsSection />}
    </div>
    
  )
}

export default Home