import React from 'react';
import './Services.css';
import { Link } from 'react-router-dom';




const Services = () => {
  

  return (
      <div className="services-container">
          <div className='services-heading'><h3 className='services-heading-h3'>SERVICES</h3></div>
            
            
          <div className='services-text-div'>

                  {/* <div className='services-list'>
                      DENT REPAIR - SCRATCH REPAIR - SCRATCHED RIM REPAIR - PAINT CORRECTION
                  </div> */}
                  <h2>DENT REPAIR</h2>
                  <b>Type:</b> Medium - Large<br />
                  <b>Time:</b> 3 - 5 Hours<br />
                  Example of the dent repair process.
                  <div className="services-video-wrapper">
                      <video controls poster={require('../../images/acura-screenshot.png')}>
                      <source className="services-video" src={require('../../videos/acura-mdx-front-fender-and-bumper.mp4')} type="video/mp4" />
                      </video>
                  </div>
                  <hr />
                  <br /><br />
                  <h2>SCRATCH REPAIR</h2>
                  <b>Type:</b> Surface - Deep<br />
                  <b>Time:</b> 2 - 4 Hours<br />
                  Example of the scratch repair process.
                  <div className="services-video-wrapper">
                      <video controls poster={require('../../images/2021-red-corvette-screenshot.png')}>
                      <source className="services-video" src={require('../../videos/2021 red corvette.mp4')} type="video/mp4" />
                      </video>
                  </div>
                  <hr />
                  <br /><br />
                  <h2>COSMETIC RIM REPAIR</h2>
                  <b>Type:</b> Gouges And Scratches<br />
                  <b>Time:</b> 45 minutes - 1 Hour<br />
                  Example of the rim repair process.
                  <div className="services-video-wrapper">
                      <video controls poster={require('../../images/bmw-rim-screanshot.jpeg')}>
                      <source className="services-video" src={require('../../videos/bmw-rims.mp4')} type="video/mp4" />
                      </video>
                  </div>
                  <Link to={"/gallery"}><button className='photos-btn'>Click Here To View Our Full Gallery!</button></Link>
                  
                
          </div>
      </div>













  )
}

export default Services