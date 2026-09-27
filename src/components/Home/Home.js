
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
            {/* <p className='home-p-text'>
              At CVR, we specialize in convenient, high-quality mobile dent and scratch repair that comes directly to your home or office.
              Most repairs are completed the same day, avoiding the inconvenience of rental cars and lengthy repair times at a traditional body shop.
              We use the same factory grade materials as body shops, so you get the same quality repair that lasts!<br /><br />
              Whether it's a dent, scratch, bumper scuff, crack or major damage, we got you covered!
            </p> */}
          </div>
      
        {<About />}
        {<Services />}
        {<ReviewsSection />}
    </div>
    
  )
}

export default Home