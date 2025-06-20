import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  
  return (

      <div className="about-container">
        <h3 className='about-heading'>ABOUT</h3>
        <div>
          <div className='about-text-div'>
            <p>
                  
                <b>Our Mobile Service Advantage: </b>
                With our mobile dent and scratch repair service, there's no need to take time out of your busy schedule to visit a body shop. 
                We will come to your location (home or office), and get the repair done the same day, in just a few hours!
                We bring the expertise and equipment right to your doorstep, saving you time, money and hassle.
                <br /><br />
                <b>Quality Workmanship: </b> 
                We believe in the importance of quality workmanship, and our attention to detail is evident in every repair. 
                Using the finest materials and proven techniques, we ensure that our repairs are not only visually appealing but also durable and reliable and that is why all our work comes with a Lifetime-Warranty!
                <Link to={"/lifetime-warranty"}><button className='lifetime-warranty-btn'>Click Here To View Our LIfetime-Warranty</button></Link>
            </p>
            <br />
          </div>         
        </div>
      </div>



   
  )
}

export default About